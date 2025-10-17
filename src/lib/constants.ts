// lib/constants.ts

export const SITE_CONFIG = {
  name: "HealppyPets",
  description: "Veterinaria en Carcelén, Quito - Grooming, Vacunación y Farmacia",
  url: "https://www.healppypets.com",
  email: "happypetscada@gmail.com",
  phone: "+593987005084",
  whatsapp: "593987005084",
  whatsappMessage: "Hola! Quisiera agendar una cita para mi mascota 🐾",
  whatsappPromo: "Hola! Quiero mi 20% de descuento en la primera visita 🐾",
  address: {
    street: "Calle Clemente Yerovi Indaburu Oe143 y OE1B",
    city: "Quito",
    neighborhood: "Carcelén",
    country: "Ecuador",
    mapUrl: "https://maps.app.goo.gl/iYnfsRuaXtEEt3vF9",
    embedUrl: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5115.203389153639!2d-78.47400523370821!3d-0.09343334941765224!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d58f59fde75e49%3A0xe14c66c3a13865b7!2sHealppy%20Pets%20Veterinary%20Spa!5e0!3m2!1ses!2sec!4v1760510326301!5m2!1ses!2sec"
  },
  social: {
    facebook: "https://www.facebook.com/profile.php?id=100093894950283&mibextid=ZbWKwL",
    tiktok: "https://www.tiktok.com/@healppy.pets?_t=8oi5rDO8oBp&_r=1",
    instagram: "https://www.instagram.com/healppy_pets?utm_source=qr&igsh=OHhsZjVhczc3cW9n"
  }
} as const;

export const NAVIGATION_LINKS = [
  { href: "#servicios", label: "Servicios" },
  { href: "#nosotros", label: "Nosotros" },
  { href: "#testimonios", label: "Testimonios" },
  { href: "/blog", label: "Blog" },
  { href: "/entretenimiento", label: "Entretenimiento" },
  { href: "#contacto", label: "Contacto" },
] as const;

export const SERVICES = [
  {
    id: "grooming",
    title: "Grooming Profesional",
    shortDescription: "Mantén a tu mascota limpia, feliz y saludable",
    description: "Nuestro servicio de grooming incluye baño con productos premium, corte de pelo según la raza, limpieza de oídos, corte de uñas y cepillado profesional. Tu mascota se sentirá renovada y feliz.",
    icon: "Sparkles",
    image: "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?w=800&q=80",
    features: [
      "Baño con productos hipoalergénicos",
      "Corte de pelo profesional",
      "Limpieza de oídos y ojos",
      "Corte de uñas y limado",
      "Cepillado y desenredado",
      "Perfume especial para mascotas"
    ],
    benefits: [
      "Mejora la salud de la piel",
      "Previene enfermedades cutáneas",
      "Mascota más feliz y cómoda",
      "Detección temprana de problemas"
    ],
    price: "Desde $15",
    duration: "1-2 horas",
    color: "primary"
  },
  {
    id: "vacunacion",
    title: "Vacunación y Desparasitación",
    shortDescription: "Protege a tu mascota de enfermedades",
    description: "Plan completo de vacunación según la edad y necesidades de tu mascota. Incluye vacunas esenciales y desparasitación interna y externa para mantener a tu peludo protegido.",
    icon: "Syringe",
    image: "https://images.unsplash.com/photo-1666214280557-f1b5022eb634?w=800&q=80",
    features: [
      "Vacuna antirrábica",
      "Vacuna múltiple (séxtuple/óctuple)",
      "Desparasitación interna",
      "Desparasitación externa",
      "Plan de vacunación personalizado",
      "Carnet de vacunación"
    ],
    benefits: [
      "Prevención de enfermedades graves",
      "Mayor esperanza de vida",
      "Protección para toda la familia",
      "Cumplimiento de normativas legales"
    ],
    price: "Desde $12",
    duration: "30 minutos",
    color: "secondary"
  },
  {
    id: "consulta",
    title: "Consulta Veterinaria",
    shortDescription: "Atención médica profesional",
    description: "Consultas veterinarias completas con evaluación general, diagnóstico y tratamiento. Nuestros veterinarios están comprometidos con la salud integral de tu mascota.",
    icon: "Stethoscope",
    image: "https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?w=800&q=80",
    features: [
      "Examen físico completo",
      "Diagnóstico profesional",
      "Tratamiento personalizado",
      "Seguimiento post-consulta",
      "Orientación nutricional",
      "Asesoría en cuidados"
    ],
    benefits: [
      "Detección temprana de enfermedades",
      "Tratamiento oportuno",
      "Mejor calidad de vida",
      "Tranquilidad para el dueño"
    ],
    price: "Desde $20",
    duration: "30-45 minutos",
    color: "accent"
  },
  {
    id: "farmacia",
    title: "Farmacia Veterinaria",
    shortDescription: "Medicamentos y productos de calidad",
    description: "Contamos con una amplia variedad de medicamentos, suplementos y productos para el cuidado de tu mascota. Solo productos de marcas reconocidas y de alta calidad.",
    icon: "Pill",
    image: "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?w=800&q=80",
    features: [
      "Medicamentos veterinarios",
      "Suplementos nutricionales",
      "Productos antiparasitarios",
      "Productos de higiene",
      "Accesorios para mascotas",
      "Asesoría farmacéutica"
    ],
    benefits: [
      "Productos originales garantizados",
      "Precios competitivos",
      "Asesoría profesional",
      "Disponibilidad inmediata"
    ],
    price: "Variable",
    duration: "Inmediato",
    color: "success"
  }
] as const;

export const TESTIMONIALS = [
  {
    id: 1,
    name: "María González",
    petName: "Max",
    petType: "Golden Retriever",
    image: "https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=400&q=80",
    rating: 5,
    text: "El servicio de grooming es excelente. Max siempre sale feliz y con un olor increíble. El personal es muy cariñoso y profesional.",
    service: "Grooming",
    date: "2024-09-15"
  },
  {
    id: 2,
    name: "Carlos Ramírez",
    petName: "Luna",
    petType: "Gato Persa",
    image: "https://images.unsplash.com/photo-1574158622682-e40e69881006?w=400&q=80",
    rating: 5,
    text: "Llevé a Luna para su vacunación y el trato fue impecable. Muy profesionales y mi gatita no sufrió nada. Totalmente recomendado.",
    service: "Vacunación",
    date: "2024-08-20"
  },
  {
    id: 3,
    name: "Andrea Silva",
    petName: "Rocky",
    petType: "Bulldog Francés",
    image: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=400&q=80",
    rating: 5,
    text: "Rocky tenía problemas de piel y gracias a la consulta veterinaria y los productos de la farmacia, está completamente recuperado. ¡Gracias HealppyPets!",
    service: "Consulta Veterinaria",
    date: "2024-10-01"
  },
  {
    id: 4,
    name: "Jorge Mendoza",
    petName: "Bella",
    petType: "Schnauzer",
    image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=400&q=80",
    rating: 5,
    text: "El servicio es de primera. Bella ama ir a HealppyPets. El ambiente es acogedor y las instalaciones están muy limpias.",
    service: "Grooming",
    date: "2024-09-28"
  },
  {
    id: 5,
    name: "Patricia Morales",
    petName: "Simba",
    petType: "Gato",
    image: "https://images.unsplash.com/photo-1615789591457-74a63395c990?w=400&q=80",
    rating: 5,
    text: "Encontré todo lo que necesitaba para Simba en la farmacia. Los precios son justos y siempre tienen stock. Excelente atención.",
    service: "Farmacia",
    date: "2024-09-10"
  },
  {
    id: 6,
    name: "Luis Herrera",
    petName: "Toby",
    petType: "Labrador",
    image: "https://images.unsplash.com/photo-1552053831-71594a27632d?w=400&q=80",
    rating: 5,
    text: "Toby recibió todas sus vacunas aquí y el seguimiento ha sido excelente. Me explican todo con mucha paciencia. Son los mejores.",
    service: "Vacunación",
    date: "2024-10-05"
  },
  {
    id: 7,
    name: "Carmen López",
    petName: "Michi",
    petType: "Gato Naranja",
    image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=400&q=80",
    rating: 5,
    text: "Michi estaba muy estresado y me dieron consejos maravillosos. Ahora está mucho más tranquilo. El equipo es muy empático.",
    service: "Consulta Veterinaria",
    date: "2024-09-18"
  },
  {
    id: 8,
    name: "Roberto Castro",
    petName: "Zeus",
    petType: "Pastor Alemán",
    image: "https://images.unsplash.com/photo-1568572933382-74d440642117?w=400&q=80",
    rating: 5,
    text: "Zeus es un perro grande y a veces es difícil encontrar lugares que lo atiendan bien. Aquí lo tratan como a un rey. Muy profesionales.",
    service: "Grooming",
    date: "2024-10-12"
  }
] as const;

export const STORY_SECTIONS = [
  {
    id: "origen",
    title: "Todo comenzó con un sueño",
    subtitle: "La historia de HealppyPets",
    content: "En el corazón de Carcelén, nació un sueño: crear un espacio donde cada mascota reciba el amor y cuidado que merece. HealppyPets no es solo una veterinaria, es el hogar donde tu mejor amigo encuentra salud, felicidad y bienestar.",
    icon: "Home",
    image: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=800&q=80"
  },
  {
    id: "mision",
    title: "Nuestra misión es tu tranquilidad",
    subtitle: "Cuidamos lo que más amas",
    content: "Cada cola que mueve, cada ronroneo, cada mirada de agradecimiento nos recuerda por qué hacemos esto. Nos dedicamos a ser el puente entre tu amor por tu mascota y su salud óptima.",
    icon: "Heart",
    image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=800&q=80"
  },
  {
    id: "valores",
    title: "Valores que nos definen",
    subtitle: "Lo que nos hace diferentes",
    content: "Creemos en el trato humanizado, la excelencia profesional y el compromiso genuino con cada peludo que cruza nuestra puerta. Tu mascota no es un número, es parte de nuestra familia extendida.",
    icon: "Star",
    image: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=800&q=80"
  }
] as const;

export const VALUES = [
  {
    icon: "Sparkles",
    title: "Bienestar Animal",
    description: "Priorizar siempre la salud y felicidad de las mascotas es nuestra razón de ser."
  },
  {
    icon: "HandHeart",
    title: "Responsabilidad",
    description: "Fomentar prácticas responsables tanto en el cuidado diario como en la adopción."
  },
  {
    icon: "Leaf",
    title: "Sostenibilidad",
    description: "Promover prácticas respetuosas con el medio ambiente en todos nuestros servicios."
  },
  {
    icon: "Lightbulb",
    title: "Innovación",
    description: "Buscar continuamente nuevas maneras de mejorar el cuidado de las mascotas."
  },
  {
    icon: "GraduationCap",
    title: "Educación",
    description: "Proporcionar a los dueños las herramientas necesarias para cuidar mejor de sus compañeros."
  }
] as const;

export const STATS = [
  {
    value: "2000+",
    label: "Mascotas Felices",
    icon: "🐕"
  },
  {
    value: "98%",
    label: "Satisfacción",
    icon: "⭐"
  },
  {
    value: "3+",
    label: "Años de Experiencia",
    icon: "🏆"
  },
  {
    value: "24/7",
    label: "Atención WhatsApp",
    icon: "💬"
  }
] as const;

export const FAQ = [
  {
    question: "¿Cuál es el horario de atención?",
    answer: "Atendemos de lunes a viernes de 9:00 AM a 6:00 PM, y sábados de 9:00 AM a 2:00 PM. Para emergencias, puedes contactarnos por WhatsApp."
  },
  {
    question: "¿Necesito agendar cita previa?",
    answer: "Recomendamos agendar cita previa para garantizar la atención. Puedes hacerlo por WhatsApp, teléfono o mediante nuestro formulario en línea."
  },
  {
    question: "¿Qué debo llevar a la primera consulta?",
    answer: "Trae el carnet de vacunación (si lo tiene), historial médico previo, y cualquier medicamento que esté tomando tu mascota actualmente."
  },
  {
    question: "¿Realizan servicio a domicilio?",
    answer: "Actualmente ofrecemos servicio de retiro y entrega para el servicio de grooming. Para otros servicios, te esperamos en nuestra clínica."
  },
  {
    question: "¿Qué métodos de pago aceptan?",
    answer: "Aceptamos efectivo, transferencias bancarias y principales tarjetas de crédito y débito."
  },
  {
    question: "¿Tienen productos para la venta?",
    answer: "Sí, contamos con una farmacia veterinaria completa con medicamentos, suplementos, alimentos y accesorios para tu mascota."
  }
] as const;

export const BLOG_CATEGORIES = [
  { id: "salud", name: "Salud", icon: "🏥", color: "primary" },
  { id: "nutricion", name: "Nutrición", icon: "🍖", color: "success" },
  { id: "cuidados", name: "Cuidados", icon: "✨", color: "secondary" },
  { id: "consejos", name: "Consejos", icon: "💡", color: "accent" },
  { id: "curiosidades", name: "Curiosidades", icon: "🎯", color: "primary" }
] as const;

export const GROOMING_PACKAGES = [
  {
    name: "Básico",
    price: "$15",
    duration: "1 hora",
    features: [
      "Baño con shampoo estándar",
      "Secado",
      "Cepillado básico",
      "Corte de uñas"
    ]
  },
  {
    name: "Completo",
    price: "$25",
    duration: "1.5 horas",
    popular: true,
    features: [
      "Baño con shampoo premium",
      "Secado y peinado",
      "Cepillado profesional",
      "Corte de uñas y limado",
      "Limpieza de oídos",
      "Perfume especial"
    ]
  },
  {
    name: "Premium SPA",
    price: "$40",
    duration: "2 horas",
    features: [
      "Todo lo del paquete Completo",
      "Corte de pelo según raza",
      "Hidratación profunda",
      "Masaje relajante",
      "Limpieza dental básica",
      "Fotografía profesional"
    ]
  }
] as const;

export const WORKING_HOURS = [
  { day: "Lunes", hours: "Cerrado" },
  { day: "Martes - Sábado", hours: "09:00-13:00, 15:00-18:00" },
  { day: "Domingo", hours: "09:00-14:00" }
] as const;

export const EMERGENCY_INFO = {
  title: "¿Emergencia?",
  description: "Si tu mascota tiene una emergencia fuera de nuestro horario, contáctanos por WhatsApp. Te orientaremos sobre los pasos a seguir.",
  phone: SITE_CONFIG.phone,
  whatsapp: SITE_CONFIG.whatsapp
} as const;

// --- Exported types inferred from the constants ---
export type ServiceType = {
  id: string;
  title: string;
  shortDescription?: string;
  description?: string;
  icon?: string;
  image?: string;
  features: readonly string[];
  benefits?: readonly string[];
  price?: string;
  duration?: string;
  color?: string;
};

export type TestimonialType = {
  id: number;
  name: string;
  petName: string;
  petType: string;
  image?: string;
  rating: number;
  text: string;
  service?: string;
  date?: string;
};

export type WorkingHour = (typeof WORKING_HOURS)[number];

// Backwards-compatible aliases
export type Service = ServiceType;
export type Testimonial = TestimonialType;