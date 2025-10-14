export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  author: {
    name: string;
    role: string;
    avatar?: string;
  };
  image: string;
  date: string;
  readTime: number;
  tags: string[];
  featured?: boolean;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "importancia-alimentacion-mascotas",
    title: "La Importancia de la Alimentación en Nuestras Mascotas",
    excerpt: "Una dieta balanceada es fundamental para la salud y bienestar de tu mascota. Descubre cómo elegir el mejor alimento y los nutrientes esenciales que necesitan.",
    content: `
# La Importancia de la Alimentación en Nuestras Mascotas

La alimentación de nuestras mascotas es uno de los pilares fundamentales para garantizar su salud, bienestar y longevidad. Al igual que los humanos, los animales necesitan una dieta equilibrada que les proporcione todos los nutrientes esenciales.

## ¿Por qué es tan importante?

Una buena alimentación no solo mantiene a tu mascota con energía, sino que también:

- Fortalece su sistema inmunológico
- Mantiene su pelaje brillante y saludable
- Previene enfermedades crónicas
- Mejora su digestión
- Controla su peso ideal

## Nutrientes Esenciales

### Proteínas
Las proteínas son fundamentales para el crecimiento y reparación de tejidos. Los perros y gatos necesitan proteínas de alta calidad provenientes de carnes, pescados o fuentes vegetales.

### Grasas
Las grasas proporcionan energía y son necesarias para la absorción de vitaminas. Los ácidos grasos omega-3 y omega-6 son especialmente importantes para la salud de la piel y el pelaje.

### Carbohidratos
Aunque no son esenciales, los carbohidratos proporcionan energía rápida y fibra para una buena digestión.

### Vitaminas y Minerales
Son necesarios en pequeñas cantidades pero son cruciales para el funcionamiento correcto del organismo.

## Consejos para una Alimentación Saludable

1. **Elige alimentos de calidad**: Busca marcas reconocidas que utilicen ingredientes naturales
2. **Controla las porciones**: Evita el sobrepeso siguiendo las recomendaciones del fabricante
3. **Agua fresca siempre disponible**: La hidratación es tan importante como la alimentación
4. **Evita alimentos tóxicos**: Chocolate, cebolla, ajo, uvas y aguacate son peligrosos
5. **Consulta con tu veterinario**: Cada mascota tiene necesidades específicas

## Señales de una Buena Alimentación

Si tu mascota está bien alimentada, notarás:
- Pelaje brillante y sedoso
- Energía y vitalidad
- Peso saludable
- Buen apetito
- Deposiciones firmes y regulares

## ¿Cuándo Cambiar de Alimento?

Puede ser necesario cambiar la alimentación si:
- Tu mascota cambia de etapa de vida (cachorro a adulto, adulto a senior)
- Tiene problemas de salud específicos
- Muestra alergias o intolerancias
- Su nivel de actividad cambia significativamente

Recuerda que cualquier cambio de alimentación debe hacerse gradualmente durante 7-10 días para evitar problemas digestivos.

## Conclusión

La alimentación adecuada es una inversión en la salud y felicidad de tu mascota. En HealppyPets, estamos disponibles para asesorarte sobre la mejor dieta para tu compañero peludo. ¡Visítanos!
    `,
    category: "Nutrición",
    author: {
      name: "Dr. Carlos Mendoza",
      role: "Veterinario Especialista en Nutrición",
    },
    image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=800&q=80",
    date: "2024-10-01",
    readTime: 8,
    tags: ["nutrición", "salud", "alimentación", "cuidados"],
    featured: true
  },
  {
    slug: "guia-grooming-basico-casa",
    title: "Guía de Grooming Básico en Casa",
    excerpt: "Aprende a mantener a tu mascota limpia y hermosa entre visitas al veterinario con estos consejos prácticos de grooming casero.",
    content: `
# Guía de Grooming Básico en Casa

El grooming regular es esencial para la salud y bienestar de tu mascota. Aunque es recomendable visitar profesionales, hay cuidados básicos que puedes hacer en casa.

## Beneficios del Grooming Regular

- Reduce la caída de pelo
- Previene nudos y enredos
- Detecta problemas de piel temprano
- Fortalece el vínculo con tu mascota
- Mantiene la higiene general

## Herramientas Esenciales

### Para el Baño
- Shampoo específico para mascotas
- Toallas absorbentes
- Secador de pelo (a temperatura baja)

### Para el Cepillado
- Cepillo según el tipo de pelo
- Peine de dientes finos
- Cortauñas

## Frecuencia Recomendada

- **Baño**: Cada 4-6 semanas (o según necesidad)
- **Cepillado**: Diario para pelo largo, semanal para pelo corto
- **Corte de uñas**: Cada 3-4 semanas
- **Limpieza de oídos**: Semanal

## Paso a Paso del Baño

1. Cepilla antes del baño para eliminar nudos
2. Usa agua tibia
3. Aplica shampoo desde el cuello hacia atrás
4. Evita ojos, oídos y nariz
5. Enjuaga completamente
6. Seca con toalla y secador

## Consejos Importantes

- Nunca uses productos humanos
- Sé gentil y paciente
- Recompensa el buen comportamiento
- Si tu mascota se estresa mucho, busca ayuda profesional

## Cuándo Acudir al Profesional

Busca ayuda profesional si:
- Tu mascota tiene pelo muy enredado
- Necesita un corte específico de raza
- No coopera durante el grooming
- Tiene problemas de piel

En HealppyPets ofrecemos servicios completos de grooming profesional. ¡Agenda tu cita!
    `,
    category: "Cuidados",
    author: {
      name: "María Rodríguez",
      role: "Groomer Profesional",
    },
    image: "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?w=800&q=80",
    date: "2024-09-15",
    readTime: 6,
    tags: ["grooming", "cuidados", "higiene", "belleza"],
    featured: true
  },
  {
    slug: "calendario-vacunacion-perros",
    title: "Calendario de Vacunación para Perros",
    excerpt: "Mantén a tu perro protegido con este calendario completo de vacunación desde cachorro hasta adulto.",
    content: `
# Calendario de Vacunación para Perros

La vacunación es una de las medidas más importantes para proteger la salud de tu perro. Conoce el calendario completo desde cachorro hasta adulto.

## Vacunas Esenciales (Core)

### 6-8 Semanas
- Primera dosis de vacuna múltiple (Parvovirus, Distemper, Hepatitis)

### 10-12 Semanas
- Segunda dosis de vacuna múltiple
- Primera dosis de Leptospirosis

### 14-16 Semanas
- Tercera dosis de vacuna múltiple
- Segunda dosis de Leptospirosis
- Vacuna antirrábica

### Refuerzos Anuales
- Vacuna múltiple anual
- Antirrábica anual o trianual (según legislación)
- Leptospirosis anual

## Vacunas Opcionales (Non-Core)

Dependiendo del estilo de vida:
- Bordetella (Tos de las perreras)
- Coronavirus
- Giardia
- Enfermedad de Lyme

## Importancia de Seguir el Calendario

- Protección temprana contra enfermedades mortales
- Desarrollo correcto del sistema inmune
- Cumplimiento de requisitos legales
- Prevención de brotes

## Efectos Secundarios Normales

Pueden aparecer:
- Dolor leve en el sitio de inyección
- Letargo por 24-48 horas
- Fiebre leve
- Pérdida de apetito temporal

## Cuándo Preocuparse

Contacta inmediatamente si:
- Vómitos persistentes
- Diarrea severa
- Hinchazón facial
- Dificultad para respirar
- Convulsiones

## Recomendaciones Post-Vacunación

- Mantén a tu perro en reposo 24 horas
- Evita baños por 48 horas
- No socialices con perros no vacunados
- Observa cualquier reacción

En HealppyPets llevamos el registro de vacunación de tu mascota y te recordamos cuándo tocan los refuerzos. ¡Agenda tu cita de vacunación!
    `,
    category: "Salud",
    author: {
      name: "Dra. Ana López",
      role: "Veterinaria",
    },
    image: "https://images.unsplash.com/photo-1666214280557-f1b5022eb634?w=800&q=80",
    date: "2024-09-28",
    readTime: 7,
    tags: ["vacunación", "salud", "prevención", "cachorros"],
    featured: false
  },
  {
    slug: "senales-estres-mascotas",
    title: "Señales de Estrés en tu Mascota",
    excerpt: "Aprende a identificar cuándo tu mascota está estresada y cómo ayudarla a sentirse mejor.",
    content: `
# Señales de Estrés en tu Mascota

El estrés en las mascotas es más común de lo que pensamos. Aprende a identificar las señales y cómo ayudar a tu compañero peludo.

## Señales en Perros

### Lenguaje Corporal
- Cola entre las piernas
- Orejas hacia atrás
- Postura encorvada
- Evitar contacto visual

### Comportamiento
- Jadeo excesivo
- Lamido compulsivo
- Ladrido excesivo
- Destrucción de objetos

## Señales en Gatos

### Físicas
- Pupilas dilatadas
- Cola esponjada
- Orejas aplastadas
- Pelo erizado

### Conductuales
- Esconderse
- Agresividad repentina
- Marcaje excesivo
- Pérdida de apetito

## Causas Comunes de Estrés

1. **Cambios en el hogar**: Mudanzas, renovaciones, nuevos miembros
2. **Rutina alterada**: Cambios en horarios de comida o paseos
3. **Falta de ejercicio**: Energía acumulada
4. **Socialización inadecuada**: Miedo a otros animales o personas
5. **Problemas de salud**: Dolor o malestar
6. **Ruidos fuertes**: Tormentas, fuegos artificiales

## Cómo Ayudar

### Crear un Espacio Seguro
- Cama cómoda en lugar tranquilo
- Juguetes favoritos
- Acceso a agua fresca

### Ejercicio Regular
- Paseos diarios
- Juegos interactivos
- Estimulación mental

### Rutina Consistente
- Horarios fijos de comida
- Momentos de juego establecidos
- Descanso adecuado

### Técnicas de Relajación
- Masajes suaves
- Música relajante
- Feromonas sintéticas
- Aromaterapia pet-safe

## Cuándo Buscar Ayuda Profesional

Consulta al veterinario si:
- El estrés persiste más de una semana
- Hay cambios en alimentación o eliminación
- Aparece agresividad
- Automutilación
- Letargo extremo

## Prevención

- Socialización temprana
- Entrenamiento positivo
- Ambiente enriquecido
- Atención a necesidades básicas
- Chequeos veterinarios regulares

El bienestar emocional es tan importante como la salud física. En HealppyPets podemos ayudarte a identificar y manejar el estrés de tu mascota. ¡Contáctanos!
    `,
    category: "Consejos",
    author: {
      name: "Dr. Roberto Pérez",
      role: "Veterinario Especialista en Comportamiento",
    },
    image: "https://images.unsplash.com/photo-1450778869180-41d0601e046e?w=800&q=80",
    date: "2024-10-10",
    readTime: 9,
    tags: ["comportamiento", "bienestar", "salud mental", "cuidados"],
    featured: false
  }
];

// Función para obtener posts por categoría
export function getPostsByCategory(category: string): BlogPost[] {
  return BLOG_POSTS.filter(post => post.category === category);
}

// Función para obtener post por slug
export function getPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find(post => post.slug === slug);
}

// Función para obtener posts destacados
export function getFeaturedPosts(): BlogPost[] {
  return BLOG_POSTS.filter(post => post.featured);
}

// Función para obtener posts relacionados
export function getRelatedPosts(currentSlug: string, limit: number = 3): BlogPost[] {
  const currentPost = getPostBySlug(currentSlug);
  if (!currentPost) return [];
  
  return BLOG_POSTS
    .filter(post => 
      post.slug !== currentSlug && 
      (post.category === currentPost.category || 
       post.tags.some(tag => currentPost.tags.includes(tag)))
    )
    .slice(0, limit);
}