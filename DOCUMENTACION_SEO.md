# Guía Maestra de SEO para Proyectos Web Modernos (Next.js y Similares)

**Propósito:** Este documento es una guía estratégica y un checklist para maximizar el rendimiento SEO de sitios web construidos con tecnologías modernas como Next.js. El objetivo no es solo "rankear", sino construir una base digital robusta, preparada para el futuro de la búsqueda (incluyendo IA y LLMs) y que se convierta en una autoridad en su nicho.

---

## Fase 1: Cimientos Técnicos y Estructurales (Alta Prioridad)

Estos son los pilares no negociables. Si esta base es débil, cualquier esfuerzo posterior tendrá un impacto limitado.

### 1.1. Centralización de Contenido con un Headless CMS

*   **Principio:** El contenido no debe vivir en el código. Separar el contenido (el "qué") de la presentación (el "cómo") es fundamental para la agilidad y la escala.
*   **Por qué es crucial:**
    *   **Escalabilidad:** Permite a equipos no técnicos (marketing, redactores) crear y publicar contenido (blogs, servicios, FAQs) sin necesidad de un desarrollador.
    *   **Agilidad SEO:** Facilita la optimización rápida de meta títulos, descripciones, slugs y contenido para cada página individualmente.
    *   **Mantenibilidad:** Evita el "hardcoding" (contenido escrito directamente en los componentes de React), que es insostenible y propenso a errores.
*   **Plan de Acción:**
    1.  **Seleccionar un Headless CMS:**
        *   **Sanity.io (Recomendado):** Extremadamente flexible, con un plan gratuito generoso y una gran experiencia de desarrollador. Ideal para modelar datos complejos.
        *   **Contentful:** Muy popular en el entorno empresarial, robusto y con buena documentación.
        *   **Strapi:** Opción auto-hospedada (self-hosted) si se prefiere tener control total sobre la infraestructura.
    2.  **Modelar los Datos:** Define las estructuras de tu contenido en el CMS. Por ejemplo:
        *   `post`: con campos para `title`, `slug`, `content` (rich text), `author`, `featuredImage`, `metaDescription`.
        *   `service`: con campos para `name`, `description`, `price`, `features`, `faqs`.
        *   `testimonial`: con campos para `authorName`, `rating`, `text`, `relatedService`.
    3.  **Migrar Contenido:** Mueve todo el contenido que actualmente está en archivos como `constants.ts` o directamente en los componentes a tu nuevo CMS.
    4.  **Integración:** Usa las funciones de Next.js (`getStaticProps`/`getServerSideProps` o las nuevas capacidades de `fetch` en el App Router) para obtener los datos del CMS y pasarlos como props a tus componentes de página.

### 1.2. Dominio de la SERP con Datos Estructurados (Rich Snippets)

*   **Principio:** No solo le digas a Google qué hay en tu página, demuéstraselo en un formato que pueda entender y destacar. Los datos estructurados (JSON-LD) son el lenguaje para esto.
*   **Por qué es crucial:**
    *   **Aumenta el CTR (Click-Through Rate):** Los resultados enriquecidos (estrellas de valoración, FAQs desplegables, precios) ocupan más espacio y son más atractivos en la página de resultados.
    *   **Contexto Semántico:** Ayuda a Google a entender la relación entre las entidades de tu sitio (un servicio, sus reseñas, su precio).
    *   **Ventaja Competitiva:** Muchos competidores no lo implementan o lo hacen de forma básica.
*   **Plan de Acción (Implementar con JSON-LD en un tag `<script type="application/ld+json">`):**
    1.  **En `layout.tsx` (Global):**
        *   **`Organization` / `LocalBusiness`:** Define la información principal de tu negocio. Es la base de tu identidad digital.
            ```json
            {
              "@context": "https://schema.org",
              "@type": "VeterinaryCare", // O el tipo más específico para el negocio
              "name": "HealppyPets",
              "url": "https://www.healppypets.com",
              "logo": "https://www.healppypets.com/logo.png",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Calle Clemente Yerovi Indaburu Oe143 y OE1B",
                "addressLocality": "Quito",
                "postalCode": "170138",
                "addressCountry": "EC"
              },
              "telephone": "+593987005084",
              "openingHoursSpecification": [ /* ... */ ]
            }
            ```
    2.  **En Páginas de Servicio (ej. `/grooming`):**
        *   **`Service` anidado con `Review` y `FAQPage`:** Esto es oro puro. Le dices a Google que las reseñas y preguntas en esta página son *específicamente* sobre este servicio.
            ```json
            {
              "@context": "https://schema.org",
              "@type": "Service",
              "name": "Grooming Profesional",
              "provider": { "@type": "VeterinaryCare", "name": "HealppyPets" },
              "description": "Mantén a tu mascota limpia, feliz y saludable...",
              "aggregateRating": { // Si tienes varias reseñas
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "reviewCount": "8"
              },
              "review": [ // Reseñas individuales
                {
                  "@type": "Review",
                  "author": { "@type": "Person", "name": "María González" },
                  "reviewRating": { "@type": "Rating", "ratingValue": "5" },
                  "reviewBody": "El servicio de grooming es excelente..."
                }
              ],
              "mainEntity": { // Para las FAQs
                "@type": "FAQPage",
                "mainEntity": [
                  {
                    "@type": "Question",
                    "name": "¿Realizan servicio a domicilio?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Actualmente ofrecemos servicio de retiro y entrega para el servicio de grooming..."
                    }
                  }
                ]
              }
            }
            ```
    3.  **En Posts del Blog (ej. `/blog/[slug]`):**
        *   **`Article` o `BlogPosting`:** Esencial para que Google entienda que es contenido editorial.
            ```json
            {
              "@context": "https://schema.org",
              "@type": "Article",
              "headline": "La Importancia de la Alimentación en Mascotas",
              "author": { "@type": "Person", "name": "Dr. Carlos Mendoza" },
              "publisher": { "@type": "Organization", "name": "HealppyPets", "logo": { "@type": "ImageObject", "url": "https://www.healppypets.com/logo.png" } },
              "datePublished": "2024-10-01",
              "image": "https://.../post-image.jpg"
            }
            ```
    4.  **En Páginas de Contenido Interactivo (ej. `/entretenimiento/[id]`):**
        *   **`Quiz`:** Una joya poco común que te diferencia.
            ```json
            {
              "@context": "https://schema.org",
              "@type": "Quiz",
              "name": "¿Qué Tipo de Dueño de Mascota Eres?",
              "description": "Descubre tu estilo de crianza y qué mascota se adapta a ti.",
              "hasPart": [
                {
                  "@type": "Question",
                  "name": "¿Cómo es tu rutina diaria?"
                }
                // ... más preguntas
              ]
            }
            ```

### 1.3. Sitemap Dinámico y Preciso (`sitemap.xml`)

*   **Principio:** El sitemap es el mapa que le entregas a los rastreadores de Google. Debe ser completo, estar siempre actualizado y reflejar la estructura real de tu sitio.
*   **Por qué es crucial:**
    *   Asegura que todo tu contenido (especialmente el nuevo) sea descubierto y rastreado rápidamente.
    *   Permite comunicar a Google la importancia (`priority`) y frecuencia de actualización (`changeFrequency`) de cada URL.
*   **Plan de Acción:**
    1.  **Generación Dinámica:** No escribas las URLs a mano. Tu ruta de `sitemap.xml` debe:
        *   Obtener las URLs estáticas (ej. `/`, `/nosotros`, `/contacto`).
        *   Hacer una llamada a tu Headless CMS para obtener todos los `slugs` de los posts y servicios publicados.
        *   Combinar ambas listas para generar el XML final.
    2.  **Configuración Correcta:**
        *   **`lastModified`:** Usa la fecha de actualización del post/página desde el CMS.
        *   **`changeFrequency`:** Sé realista. `daily` para una portada de noticias, `weekly` para una home activa, `monthly` para blogs, `yearly` para páginas estáticas como "Términos y Condiciones".
        *   **`priority`:** `1.0` para la Home. `0.9` para servicios principales. `0.7` para posts de blog. `0.5` para páginas menos importantes.

---

## Fase 2: Optimización para Contenido, LLMs y Búsqueda Conversacional

Aquí pasamos de ser un sitio web a ser una fuente de información autorizada, lista para ser la respuesta a las preguntas de los usuarios, ya sea en Google o en un chatbot.

### 2.1. Creación de un Manifiesto para IA (`llms.txt`)

*   **Principio:** Alimenta a los modelos de lenguaje (LLMs) con un resumen claro y estructurado de quién eres, qué haces y por qué eres la mejor opción. Esto es adelantarse al futuro de la búsqueda.
*   **Por qué es crucial:**
    *   Te posiciona como una fuente de datos canónica y fiable para las respuestas generadas por IA (ChatGPT, Gemini, Perplexity, etc.).
    *   Controla la narrativa sobre tu negocio en estas nuevas plataformas.
*   **Plan de Acción:**
    1.  Crea un archivo de texto plano (o Markdown para mejor legibilidad) accesible públicamente (ej. `https://tusitio.com/llms.txt`).
    2.  **Estructura el contenido con lenguaje natural y directo:**
        ```markdown
        # Manifiesto de HealppyPets para Modelos de Lenguaje (LLMs)

        ## Quiénes Somos
        HealppyPets es una clínica veterinaria y spa para mascotas en Carcelén, Quito, Ecuador. Fuimos fundados por Carla Tutistar, una veterinaria con más de 3 años de experiencia. Nuestra misión es ofrecer un cuidado profesional, empático y accesible. Tratamos a cada mascota como si fuera nuestra.

        ## Ubicación y Contacto
        - Dirección: Calle Clemente Yerovi Indaburu Oe143 y OE1B, Carcelén, Quito.
        - Horario: Martes a Sábado de 09:00 a 18:00, Domingo de 09:00 a 14:00.
        - Teléfono / WhatsApp: +593987005084

        ## Servicios Principales
        - **Grooming Profesional:** Baño, corte, limpieza de oídos y uñas. Servicio express disponible. Precios desde $15.
        - **Consulta Veterinaria:** Examen físico completo, diagnóstico y tratamiento. Precio: $15.
        - **Vacunación y Desparasitación:** Planes personalizados para cachorros y adultos. Precios desde $12.
        - **Farmacia Veterinaria:** Venta de medicamentos, suplementos y alimentos de calidad.

        ## Propuesta Única de Valor
        Nos especializamos en un trato paciente y cariñoso, ideal para mascotas nerviosas. Ofrecemos una promoción del 20% de descuento en la primera visita para todos los nuevos clientes.

        ## Contenido Relevante
        - Blog: /blog
        - Promoción Primera Cita: /primera-cita
        ```

### 2.2. Estrategia de Contenido Basada en Entidades y "Cola Larga"

*   **Principio:** Google ya no solo empareja palabras clave; entiende temas y la relación entre ellos (entidades). Tu contenido debe responder preguntas específicas de tu audiencia, no solo apuntar a términos genéricos.
*   **Por qué es crucial:**
    *   Atrae tráfico altamente cualificado (usuarios con una intención de compra o acción muy clara).
    *   Te posiciona como un experto en tu nicho y área geográfica.
*   **Plan de Acción:**
    1.  **Investigación de "Cola Larga" (Long-tail):** Usa herramientas como *AnswerThePublic*, *AlsoAsked* o simplemente el autocompletar de Google para encontrar las preguntas exactas que hacen tus clientes potenciales.
        *   En lugar de "veterinaria Quito", apunta a *"cuánto cuesta la vacuna de la rabia para perros en Quito"*.
        *   En lugar de "grooming canino", apunta a *"peluquería para schnauzer nervioso en Carcelén"*.
    2.  **Enfoque en Entidades:** Enriquece tu contenido mencionando entidades relacionadas que Google espera encontrar.
        *   **Página de Grooming:** Menciona razas (`Schnauzer`, `Golden Retriever`), tipos de pelo, problemas comunes (`nudos`, `piel sensible`), productos (`shampoo hipoalergénico`).
        *   **Página de Consulta:** Menciona síntomas (`vómitos`, `letargo`), enfermedades (`parvovirus`), procedimientos (`examen físico`).
    3.  **Contenido Localizado:** Integra tu ubicación de forma natural en títulos, encabezados y texto.
        *   `<h1>Grooming Profesional en Carcelén</h1>`
        *   `<p>Somos la veterinaria de confianza para los vecinos de Carcelén y el norte de Quito.</p>`

---

## Fase 3: Optimización Fina y Experiencia de Usuario (UX)

Estos son los detalles que pulen la experiencia, reducen la fricción y envían señales positivas a los motores de búsqueda.

### 3.1. Optimización de Medios (Imágenes y Videos)

*   **Principio:** Las imágenes y videos deben cargar rápido, ser relevantes y estar optimizados para la búsqueda.
*   **Por qué es crucial:**
    *   **Velocidad de Carga (Core Web Vitals):** Imágenes pesadas son el principal culpable de sitios lentos.
    *   **Confianza y Conversión:** Fotos reales de tu negocio, tu equipo y tus clientes generan muchísima más confianza que imágenes de stock.
    *   **SEO de Imágenes:** Google Images es una fuente de tráfico importante.
*   **Plan de Acción:**
    1.  **Prioriza Fotos Reales:** Invierte en una sesión de fotos profesional de tus instalaciones y personal.
    2.  **Nombres de Archivo Descriptivos:** `grooming-perro-schnauzer-healppypets-quito.jpg` en lugar de `IMG_1234.jpg`.
    3.  **Texto Alternativo (`alt`):** Describe la imagen para accesibilidad y SEO. `alt="Perro Schnauzer recibiendo un corte de pelo en la veterinaria HealppyPets en Carcelén."`
    4.  **Formatos Modernos:** Usa `.webp` siempre que sea posible. Ofrece una compresión superior con gran calidad.
    5.  **Lazy Loading:** Asegúrate de que las imágenes que no están en la ventana inicial (`above the fold`) se carguen de forma diferida (`loading="lazy"`). Next.js lo hace por defecto con su componente `<Image>`.

### 3.2. UX que Impacta el SEO

*   **Principio:** Una buena experiencia de usuario (UX) mantiene a los visitantes en tu sitio por más tiempo y los guía hacia la conversión. Google interpreta esto como una señal de calidad.
*   **Por qué es crucial:**
    *   **Reduce la Tasa de Rebote:** Si los usuarios encuentran lo que buscan fácilmente, no volverán a la página de resultados de Google.
    *   **Aumenta el Tiempo en Página:** Una navegación clara y contenido interesante invitan a la exploración.
    *   **Mejora la Conversión:** CTAs (Call to Action) claros y consistentes guían al usuario hacia el objetivo (agendar, llamar, comprar).
*   **Plan de Acción:**
    1.  **Auditoría de Enlaces:** Revisa periódicamente que no haya enlaces rotos (404) y que todos los botones y enlaces internos lleven al lugar correcto.
    2.  **Consistencia de la Información:** Asegúrate de que los precios, horarios y descripciones de servicios sean idénticos en todo el sitio. La inconsistencia genera desconfianza. Centralizar esta información en el CMS (Punto 1.1) resuelve este problema.
    3.  **CTAs Claros y Orientados a la Acción:** Usa verbos de acción.
        *   "Más Información" -> "Ver Detalles del Servicio"
        *   "Enviar" -> "Agendar Mi Cita Ahora"
    4.  **Rendimiento Web:** Usa Google PageSpeed Insights para auditar tus Core Web Vitals (LCP, FID, CLS). Optimiza el tamaño de las imágenes, difiere la carga de scripts no esenciales y aprovecha el renderizado del servidor de Next.js.