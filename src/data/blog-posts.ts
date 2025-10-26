// src/data/blog-posts.ts

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
  isCMSPost?: boolean; // Flag para identificar posts del CMS
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

La alimentación adecuada es una inversión en la salud y felicidad de tu mascota. En Healppypets, estamos disponibles para asesorarte sobre la mejor dieta para tu compañero peludo. ¡Visítanos!
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

En Healppypets ofrecemos servicios completos de grooming profesional. ¡Agenda tu cita!
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

En Healppypets llevamos el registro de vacunación de tu mascota y te recordamos cuándo tocan los refuerzos. ¡Agenda tu cita de vacunación!
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

El bienestar emocional es tan importante como la salud física. En Healppypets podemos ayudarte a identificar y manejar el estrés de tu mascota. ¡Contáctanos!
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
  },
  {
    slug: "guia-completa-cuidado-gatos",
    title: "Guía Completa para el Cuidado de Gatos en Carcelén",
    excerpt: "Todo lo que necesitas saber sobre el cuidado felino: desde alimentación hasta prevención de enfermedades. Guía especializada para dueños de gatos en Quito.",
    content: `
# Guía Completa para el Cuidado de Gatos en Carcelén

Los gatos son compañeros extraordinarios que requieren cuidados específicos diferentes a los perros. Esta guía te ayudará a brindarle a tu felino la mejor calidad de vida.

## Alimentación Felina Especializada

### Necesidades Nutricionales Únicas
Los gatos son carnívoros estrictos y necesitan:
- **Taurina**: Esencial para la salud cardíaca y visual
- **Arginina**: Fundamental para el metabolismo
- **Proteína de alta calidad**: Mínimo 26% en peso seco
- **Ácidos grasos omega-3**: Para pelaje y piel saludables

### Horarios de Alimentación
- **Gatitos (2-12 meses)**: 3-4 comidas al día
- **Adultos (1-7 años)**: 2 comidas al día
- **Seniors (+7 años)**: 2-3 comidas pequeñas al día

### Alimentos Prohibidos para Gatos
- Chocolate y café
- Cebolla y ajo
- Uvas y pasas
- Leche de vaca (muchos gatos son intolerantes)
- Atún en lata para humanos (en exceso)

## Calendario de Vacunación Felina

### Vacunas Esenciales
**8 semanas**: Primera dosis triple felina (Panleucopenia, Rinotraqueítis, Calicivirus)
**12 semanas**: Segunda dosis triple felina + Primera leucemia felina
**16 semanas**: Tercera dosis triple felina + Segunda leucemia felina + Antirrábica
**Anual**: Refuerzos de todas las vacunas

### Vacunas Opcionales
- Clamidia felina
- Peritonitis infecciosa felina (PIF)
- Bordetella (para gatos en contacto con muchos felinos)

## Desparasitación Específica para Gatos

### Parásitos Internos
- **Gatitos**: Cada 2-3 semanas hasta los 6 meses
- **Adultos de interior**: Cada 6 meses
- **Adultos con acceso al exterior**: Cada 3 meses

### Parásitos Externos
- **Pulgas**: Pipetas mensuales específicas para gatos
- **Garrapatas**: Revisión semanal, especialmente en orejas y cuello
- **Ácaros**: Limpieza de oídos semanal

## Comportamiento y Enriquecimiento Ambiental

### Necesidades Básicas del Gato
1. **Territorio vertical**: Estantes y árboles para gatos
2. **Escondites**: Cajas, cuevas, espacios seguros
3. **Puntos de observación**: Lugares altos para vigilar
4. **Áreas de rascado**: Múltiples rascadores de diferentes texturas

### Estimulación Mental
- Juguetes interactivos con comida
- Rotación de juguetes cada semana
- Sesiones de juego de 10-15 minutos, 2-3 veces al día
- Ventanas con vistas al exterior

## Higiene y Grooming Felino

### Cepillado
- **Pelo corto**: 1-2 veces por semana
- **Pelo largo**: Diario para evitar nudos
- **Época de muda**: Diario para todos los gatos

### Baño
- Solo cuando sea absolutamente necesario
- Usar shampoo con pH específico para gatos
- Temperatura del agua tibia
- Secado completo para evitar resfriados

### Cuidado de Uñas
- Corte cada 2-3 semanas
- Solo la parte blanca transparente
- Usar cortauñas específicos para gatos

## Caja de Arena: Guía Completa

### Ubicación Ideal
- Lugar tranquilo y accesible
- Lejos de comida y agua
- Múltiples pisos: una caja por piso mínimo

### Mantenimiento
- Limpieza diaria de desechos sólidos
- Cambio completo semanal
- Tipo de arena: preferiblemente sin aroma
- Profundidad: 5-7 cm de arena

### Problemas Comunes
- Eliminación fuera de la caja: revisar salud y limpieza
- Rechazo a la arena: probar diferentes tipos
- Estrés por cambios en el hogar

## Señales de Alerta en Gatos

### Síntomas que Requieren Atención Inmediata
- Dificultad para orinar o defecar
- Vómitos frecuentes (más de 2 veces en 24 horas)
- Letargo extremo o esconderse
- Cambios en apetito o sed
- Respiración acelerada o con esfuerzo
- Secreción en ojos o nariz

### Emergencias Felinas
- Obstrucción urinaria (especialmente en machos)
- Ingestión de objetos extraños
- Caídas desde altura
- Intoxicación por plantas o químicos

## Prevención de Enfermedades Comunes

### Enfermedad Renal
- Agua fresca siempre disponible
- Dieta de calidad
- Chequeos regulares después de los 7 años

### Problemas Dentales
- Cepillado dental semanal
- Juguetes dentales
- Limpiezas dentales profesionales

### Obesidad
- Control de porciones
- Juego activo diario
- Monitoreo de peso regular

## Cuidados por Edad

### Gatitos (0-12 meses)
- Socialización temprana
- Múltiples comidas pequeñas
- Juegos de desarrollo
- Esterilización a los 4-6 meses

### Adultos (1-7 años)
- Chequeos anuales
- Mantenimiento de peso
- Actividad regular
- Cuidado dental

### Seniors (+7 años)
- Chequeos cada 6 meses
- Dieta senior
- Ambiente más cálido
- Vigilancia de artritis

## Plantas Seguras y Tóxicas

### Plantas Seguras para Gatos
- Hierba gatera
- Hierba para gatos
- Spider plant
- Boston fern

### Plantas Extremadamente Tóxicas
- **Lirios**: Todas las variedades son mortales
- Azaleas
- Tulipanes
- Poinsettias

## Tips para Gatos de Interior vs Exterior

### Gatos de Interior
- Mayor esperanza de vida
- Menor riesgo de enfermedades
- Necesitan más estimulación mental
- Ventanas con mallas de seguridad

### Gatos con Acceso al Exterior
- Vacunación y desparasitación más frecuente
- Collar con identificación
- Esterilización obligatoria
- Chequeos veterinarios regulares

## Primeros Auxilios Básicos

### Kit de Emergencia para Gatos
- Termómetro digital
- Gasas y vendas
- Solución salina
- Transportadora resistente
- Números de emergencia veterinaria

### Qué NO Hacer
- No dar medicamentos humanos
- No inducir vómito sin consultar
- No mover gatos con lesiones espinales

En HealppyPets Carcelén somos especialistas en medicina felina. Ofrecemos consultas especializadas, vacunación, desparasitación y grooming específico para gatos. ¡Tu felino merece atención especializada!

**Agenda tu consulta felina al WhatsApp: +593 98 700 5084**
    `,
    category: "Cuidado Felino",
    author: {
      name: "Dra. Patricia Vásquez",
      role: "Veterinaria Especialista en Medicina Felina",
    },
    image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=800&q=80",
    date: "2024-10-15",
    readTime: 12,
    tags: ["gatos", "medicina felina", "cuidado gatos", "salud felina", "Carcelén"],
    featured: true
  },
  {
    slug: "comportamiento-gatos-casa",
    title: "Entendiendo el Comportamiento de tu Gato: Señales y Comunicación",
    excerpt: "Descifra el lenguaje corporal y vocal de tu gato. Aprende qué te está comunicando y cómo responder adecuadamente.",
    content: `
# Entendiendo el Comportamiento de tu Gato: Señales y Comunicación

Los gatos tienen un sistema de comunicación complejo y fascinante. Aprender a interpretar sus señales te ayudará a fortalecer tu vínculo y entender mejor sus necesidades.

## Lenguaje Corporal Felino

### La Cola: Indicador de Emociones
- **Cola erguida**: Felicidad, confianza, saludo amistoso
- **Cola esponjada**: Miedo, agresión, intimidación
- **Cola entre las piernas**: Sumisión, miedo, inseguridad
- **Movimiento rápido**: Excitación, frustración, irritación
- **Vibración suave**: Extrema felicidad, anticipación

### Las Orejas: Radar Emocional
- **Erectas hacia adelante**: Atención, interés, curiosidad
- **Hacia atrás o aplastadas**: Miedo, agresión, molestia
- **Giratorias**: Escuchando múltiples sonidos, alerta
- **Relajadas**: Estado calmado, confortable

### Los Ojos: Ventanas del Alma Felina
- **Parpadeo lento**: "Beso de gato", signo de afecto y confianza
- **Mirada fija**: Desafío, territorial, posible agresión
- **Pupilas dilatadas**: Excitación, miedo, estimulación
- **Medio cerrados**: Relajación, somnolencia, confort

## Comunicación Vocal

### Tipos de Maullidos
- **Maullido corto**: Saludo básico
- **Maullido largo y agudo**: Demanda urgente (comida, atención)
- **Trino o parloteo**: Saludo cariñoso, imitación de vocalización materna
- **Maullido grave**: Queja, molestia
- **Maullido silencioso**: Comunicación íntima, muy especial

### Ronroneo: Más que Felicidad
- **Ronroneo suave**: Contentamiento, relajación
- **Ronroneo fuerte**: Felicidad intensa, solicitud de atención
- **Ronroneo durante enfermedad**: Autoreparación, analgésico natural
- **Ronroneo con maullidos**: Demanda específica

### Sonidos de Alerta
- **Bufido**: Advertencia, "aléjate"
- **Gruñido**: Amenaza seria, preparación para atacar
- **Grito agudo**: Dolor, miedo extremo
- **Parloteo**: Excitación por presas (pájaros, insectos)

## Comportamientos Típicos y su Significado

### Amasado con las Patas
- **Qué es**: Presión alternada con las patas delanteras
- **Significado**: Comportamiento de cachorro, satisfacción extrema
- **Cuándo**: Sobre superficies suaves, mantas, tu regazo
- **Respuesta**: Permitir y disfrutar este signo de afecto

### Frotarse y Marcaje
- **Cara y cabeza**: Marcaje con feromonas faciales (territorio seguro)
- **Costados**: Reclamando posesión afectuosa
- **Spray de orina**: Marcaje territorial (especialmente en machos no castrados)

### Juego vs Agresión
#### Juego Normal:
- Movimientos fluidos
- Pausas frecuentes
- Sin vocalización agresiva
- Orejas erguidas

#### Agresión Real:
- Movimientos rígidos
- Sin pausas
- Bufidos, gruñidos
- Orejas aplastadas

## Problemas de Comportamiento Comunes

### Arañado Destructivo
**Causas**:
- Marcaje territorial
- Estiramiento y ejercicio
- Afilado de uñas
- Estrés o aburrimiento

**Soluciones**:
- Múltiples rascadores
- Ubicación estratégica cerca de áreas problema
- Recompensas por usar rascadores
- Cubrimiento temporal de muebles

### Eliminación Fuera de la Caja
**Causas Médicas**:
- Infección urinaria
- Problemas digestivos
- Artritis (dificultad para acceder)

**Causas Conductuales**:
- Caja de arena sucia
- Cambio de arena
- Estrés ambiental
- Ubicación inadecuada

### Agresión
#### Tipos:
- **Territorial**: Defensa del espacio
- **Por miedo**: Respuesta defensiva
- **Redirecta**: Frustración dirigida hacia otro objetivo
- **Por juego**: Falta de límites aprendidos

## Enriquecimiento para Comportamiento Saludable

### Estimulación Mental
- Juguetes puzzle con comida
- Escondites y cajas
- Rotación de juguetes
- Sesiones de entrenamiento con clicker

### Ejercicio Físico
- Juguetes con plumas
- Punteros láser (siempre terminar con presa física)
- Túneles y estructuras para trepar
- Juegos de persecución

### Ambiente Vertical
- Árboles para gatos
- Estantes escalonados
- Hamacas en ventanas
- Torres de observación

## Socialización y Múltiples Gatos

### Introducción de Nuevo Gato
1. **Separación inicial**: Habitaciones separadas
2. **Intercambio de olores**: Mantas, juguetes
3. **Comidas en lados opuestos de puerta**
4. **Contacto visual supervisado**
5. **Interacción gradual controlada**

### Señales de Buena Convivencia
- Juego mutuo
- Acicalamiento entre gatos
- Descansar cerca (no necesariamente juntos)
- Compartir recursos sin conflicto

## Gatos y Estrés

### Identificación del Estrés
- Esconderse excesivamente
- Cambios en apetito
- Eliminación inapropiada
- Agresión repentina
- Vocalizaciones excesivas

### Reducción del Estrés
- Rutinas predecibles
- Espacios seguros
- Feromonas sintéticas
- Enriquecimiento ambiental
- Tiempo de calidad individual

## Comunicación Humano-Gato

### Cómo "Hablar" con tu Gato
- **Parpadeo lento**: Envía señales de calma
- **Voz suave**: Los gatos prefieren tonos agudos
- **Movimientos lentos**: Evita asustarlos
- **Respeta su espacio**: Deja que se acerquen primero

### Errores Comunes
- Castigo físico (nunca efectivo)
- Gritar (aumenta el estrés)
- Forzar interacciones
- Ignorar señales de incomodidad

## Cuándo Buscar Ayuda Profesional

### Consulta Veterinaria si:
- Cambios súbitos de comportamiento
- Agresión sin causa aparente
- Eliminación fuera de la caja persistente
- Exceso de vocalización
- Comportamientos compulsivos

### Especialista en Comportamiento Animal si:
- Problemas de agresión complejos
- Fobias severas
- Comportamientos destructivos persistentes
- Problemas de socialización

En HealppyPets Carcelén entendemos el comportamiento felino y ofrecemos consultas especializadas para problemas conductuales. Nuestro equipo puede ayudarte a interpretar y mejorar la comunicación con tu gato.

**¿Necesitas ayuda con el comportamiento de tu gato? WhatsApp: +593 98 700 5084**
    `,
    category: "Comportamiento",
    author: {
      name: "Dr. Miguel Torres",
      role: "Etólogo Veterinario especialista en Felinos",
    },
    image: "https://images.unsplash.com/photo-1574158622682-e40e69881006?w=800&q=80",
    date: "2024-10-20",
    readTime: 10,
    tags: ["comportamiento felino", "comunicación gatos", "etología", "bienestar felino"],
    featured: true
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