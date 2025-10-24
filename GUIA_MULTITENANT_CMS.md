# Guía Maestra: Creación de un Headless CMS Multi-Tenant con Next.js y Firestore

**Propósito:** Este documento es el plan de acción y la guía técnica para evolucionar un CMS de un solo sitio a una plataforma **multi-tenant** robusta y escalable. El objetivo es construir un único sistema capaz de gestionar múltiples sitios web de clientes de forma segura y eficiente.

---

## 1. Arquitectura del Sistema

Dejamos de construir "casas a medida" para construir una "fábrica de casas de lujo".


1.  **El Backend (Tu CMS Multi-Tenant):**
    *   **Stack:** Next.js + Firebase (Cloud Firestore).
    *   **Alojamiento:** Una única instancia alojada en un subdominio (ej. `cms.tuempresa.com`).
    *   **Función:** Es el panel de control donde tus clientes (Carla de HealppyPets, Juan de "Abogados Asociados", etc.) inician sesión para crear, editar y publicar su contenido. Es el cerebro centralizado.

2.  **El Frontend (La Plantilla Universal):**
    *   **Stack:** Next.js (el proyecto actual de HealppyPets, pero refactorizado).
    *   **Alojamiento:** Se despliega una instancia por cada cliente (ej. `www.healppypets.com`, `www.abogadosasociados.com`), cada una con su propio dominio.
    *   **Función:** Es la "cara" pública. Es una plantilla que no contiene contenido "hardcodeado", solo la lógica para pedirlo a la API de tu CMS y mostrarlo con el estilo y la marca de cada cliente.




## 2. Paso a Paso: Construyendo el Backend Multi-Tenant (Tu CMS)

Esta es la parte más crítica. Aquí construimos el motor de la plataforma.

### Paso 2.1: Modelado de Datos en Cloud Firestore

La clave de la multi-tenencia es aislar los datos de cada cliente. Usaremos un campo `siteId` en cada documento relevante.

**Estructura de Colecciones:**

*   `sites` (Colección)
    *   `healppypets` (Documento)
        ```json
        {
          "name": "HealppyPets",
          "domain": "healppypets.com",
          "logoUrl": "/logos/healppypets.png",
          "primaryColor": "#F2C2EA",
          "contactEmail": "info@healppypets.com"
        }
        ```
    *   `abogadosasociados` (Documento)
        ```json
        {
          "name": "Abogados Asociados",
          "domain": "abogadosasociados.com",
          "logoUrl": "/logos/abogados.png",
          "primaryColor": "#0D47A1",
          "contactEmail": "contacto@abogadosasociados.com"
        }
        ```

*   `users` (Colección - para el login del CMS)
    *   `uid_de_carla` (Documento)
        ```json
        {
          "email": "carla@healppypets.com",
          "role": "admin",
          "siteId": "healppypets"
        }
        ```

*   `posts` (Colección)
    *   `post_xyz_123` (Documento)
        ```json
        {
          "title": "La Importancia de la Alimentación...",
          "slug": "importancia-alimentacion-mascotas",
          "content": "...",
          "authorId": "...",
          "siteId": "healppypets"
        }
        ```

*   `services` (Colección)
    *   `servicio_abc_789` (Documento)
        ```json
        {
          "title": "Grooming Profesional",
          "description": "...",
          "price": "Desde $15",
          "siteId": "healppypets"
        }
        ```

### Paso 2.2: Reglas de Seguridad de Firestore

Esto es **no negociable** para la seguridad. Estas reglas garantizan que un cliente NUNCA pueda ver o modificar los datos de otro.

```js
// firestore.rules
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {

    // Los datos de configuración de un sitio son públicos para lectura,
    // pero solo un super-admin (rol que puedes definir) podría escribirlos.
    match /sites/{siteId} {
      allow read: if true;
      allow write: if false; // O lógica de super-admin
    }

    // Los usuarios del CMS solo pueden leer y escribir su propio documento de usuario.
    match /users/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }

    // Función de ayuda para verificar si el usuario autenticado pertenece al sitio del documento.
    // Compara el `siteId` del documento que se intenta acceder (`docSiteId`) con el `siteId`
    // del perfil del usuario que hace la petición (`request.auth.uid`).
    function isOwner(docSiteId) {
      return request.auth != null && get(/databases/$(database)/documents/users/$(request.auth.uid)).data.siteId == docSiteId;
    }

    match /posts/{postId} {
      // Cualquiera puede leer los posts (para el sitio público).
      allow read: if true;
      
      // Para crear: el `siteId` del nuevo post debe coincidir con el del usuario autenticado.
      allow create: if isSiteOwner(request.resource.data.siteId);

      // Para actualizar: el usuario debe ser dueño del sitio y no puede cambiar el `siteId` del post.
      allow update: if isSiteOwner(resource.data.siteId) && request.resource.data.siteId == resource.data.siteId;

      // Para borrar: el usuario debe ser dueño del sitio al que pertenece el post existente.
      allow delete: if isSiteOwner(resource.data.siteId);
    }

    match /services/{serviceId} {
      // Los servicios son públicos para lectura
      allow read: if true;
      allow create: if isSiteOwner(request.resource.data.siteId);
      allow update: if isSiteOwner(resource.data.siteId) && request.resource.data.siteId == resource.data.siteId;
      allow delete: if isSiteOwner(resource.data.siteId);
    }

    // Repetir patrón para todas las colecciones de contenido...
  }
}
```

### Paso 2.3: Creación de la API Multi-Tenant (en tu CMS)

Tu CMS necesita endpoints (API Routes) para que los frontends de los clientes pidan datos. Estos endpoints deben ser conscientes del `siteId`.

**Ejemplo de un endpoint para obtener posts (`/pages/api/posts.ts`):**

```typescript
import type { NextApiRequest, NextApiResponse } from 'next';
import { firestore } from './_firebase'; // Tu inicialización de Firebase Admin

export default async function handler(req: NextApiRequest, res: NextApiResponse) { // Asegúrate de que tu CMS usa Firebase Admin SDK
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { siteId, slug } = req.query;

  if (!siteId || typeof siteId !== 'string') {
    return res.status(400).json({ message: 'siteId is required' });
  }

  try {
    let query = firestore.collection('posts').where('siteId', '==', siteId);

    // Si se pide un post específico por slug
    if (slug && typeof slug === 'string') {
      query = query.where('slug', '==', slug);
    }

    const snapshot = await query.get();

    if (snapshot.empty) {
      return res.status(404).json({ message: 'No posts found' });
    }

    const posts = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

    // Si se pidió un slug, devolver solo el primer resultado (objeto único)
    if (slug) {
      return res.status(200).json(posts[0]);
    }

    // Si no, devolver la lista de posts
    return res.status(200).json(posts);

  } catch (error) {
    console.error('Error fetching posts:', error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
}
```

---

## 3. Paso a Paso: Adaptando el Frontend Universal

Ahora, modificamos el sitio del cliente (tu proyecto actual) para que sea una plantilla dinámica.

### Paso 3.1: Configuración con Variables de Entorno

En la raíz de tu proyecto frontend (el de la plantilla universal), crea un archivo `.env.local`. Este archivo **no se sube a Git**.
