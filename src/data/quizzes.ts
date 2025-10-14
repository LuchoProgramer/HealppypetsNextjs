// src/data/quizzes.ts

export interface QuizOption {
  text: string;
  points: Record<string, number>;
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: QuizOption[];
}

export interface QuizResult {
  type: string;
  title: string;
  description: string;
  icon: string;
  tips: string[];
  recommendations: string[];
}

export interface Quiz {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  questions: QuizQuestion[];
  results: QuizResult[];
}

export const QUIZZES: Quiz[] = [
  {
    id: "que-tipo-dueno-eres",
    title: "¿Qué Tipo de Dueño de Mascota Eres?",
    description: "Descubre tu estilo de crianza y qué tipo de mascota se adaptaría mejor a tu personalidad y estilo de vida.",
    image: "https://images.unsplash.com/photo-1450778869180-41d0601e046e?w=800&q=80",
    category: "Personalidad",
    questions: [
      {
        id: 1,
        question: "¿Cómo es tu rutina diaria?",
        options: [
          { 
            text: "Muy ocupado/a, trabajo todo el día", 
            points: { independiente: 3, tranquilo: 2, activo: 0, protector: 1 } 
          },
          { 
            text: "Trabajo desde casa o tengo horarios flexibles", 
            points: { independiente: 1, tranquilo: 2, activo: 2, protector: 2 } 
          },
          { 
            text: "Paso mucho tiempo en casa y me encanta", 
            points: { independiente: 0, tranquilo: 3, activo: 1, protector: 3 } 
          },
          { 
            text: "Siempre activo/a, hago ejercicio y salgo mucho", 
            points: { independiente: 1, tranquilo: 0, activo: 3, protector: 1 } 
          }
        ]
      },
      {
        id: 2,
        question: "¿Cuánto espacio tienes en casa?",
        options: [
          { 
            text: "Apartamento pequeño", 
            points: { independiente: 3, tranquilo: 2, activo: 0, protector: 1 } 
          },
          { 
            text: "Apartamento mediano con balcón", 
            points: { independiente: 2, tranquilo: 3, activo: 1, protector: 2 } 
          },
          { 
            text: "Casa con patio pequeño", 
            points: { independiente: 1, tranquilo: 2, activo: 2, protector: 3 } 
          },
          { 
            text: "Casa grande con jardín", 
            points: { independiente: 0, tranquilo: 1, activo: 3, protector: 2 } 
          }
        ]
      },
      {
        id: 3,
        question: "¿Cuál es tu nivel de experiencia con mascotas?",
        options: [
          { 
            text: "Primera vez, soy novato/a", 
            points: { independiente: 3, tranquilo: 3, activo: 0, protector: 1 } 
          },
          { 
            text: "He tenido mascotas antes", 
            points: { independiente: 2, tranquilo: 2, activo: 2, protector: 2 } 
          },
          { 
            text: "Tengo bastante experiencia", 
            points: { independiente: 1, tranquilo: 1, activo: 3, protector: 3 } 
          },
          { 
            text: "Soy un experto/a", 
            points: { independiente: 0, tranquilo: 0, activo: 3, protector: 3 } 
          }
        ]
      },
      {
        id: 4,
        question: "¿Cuánto tiempo puedes dedicar al cuidado diario?",
        options: [
          { 
            text: "30 minutos o menos", 
            points: { independiente: 3, tranquilo: 2, activo: 0, protector: 0 } 
          },
          { 
            text: "1 hora al día", 
            points: { independiente: 2, tranquilo: 3, activo: 1, protector: 2 } 
          },
          { 
            text: "2-3 horas al día", 
            points: { independiente: 1, tranquilo: 2, activo: 3, protector: 2 } 
          },
          { 
            text: "Todo el tiempo que sea necesario", 
            points: { independiente: 0, tranquilo: 1, activo: 3, protector: 3 } 
          }
        ]
      },
      {
        id: 5,
        question: "¿Qué buscas en una mascota?",
        options: [
          { 
            text: "Compañía tranquila y relajada", 
            points: { independiente: 2, tranquilo: 3, activo: 0, protector: 1 } 
          },
          { 
            text: "Un amigo para hacer ejercicio", 
            points: { independiente: 0, tranquilo: 0, activo: 3, protector: 1 } 
          },
          { 
            text: "Protección y lealtad", 
            points: { independiente: 1, tranquilo: 1, activo: 2, protector: 3 } 
          },
          { 
            text: "Independencia, que no demande mucho", 
            points: { independiente: 3, tranquilo: 2, activo: 0, protector: 0 } 
          }
        ]
      }
    ],
    results: [
      {
        type: "independiente",
        title: "Dueño Independiente",
        description: "Eres perfecto para mascotas que valoran su espacio y autonomía. Prefieres una relación equilibrada donde ambos tienen su independencia.",
        icon: "Cat",
        tips: [
          "Un gato es tu compañero ideal",
          "Establece rutinas simples y consistentes",
          "Proporciona juguetes interactivos para cuando no estés",
          "Considera tener comederos automáticos"
        ],
        recommendations: [
          "Gatos adultos son perfectos para ti",
          "Razas como British Shorthair o Scottish Fold",
          "Peces ornamentales también son una excelente opción",
          "Asegúrate de tener un espacio cómodo para tu mascota"
        ]
      },
      {
        type: "tranquilo",
        title: "Dueño Tranquilo y Hogareño",
        description: "Te encanta la compañía constante y valoras los momentos de calma. Eres ideal para mascotas que disfrutan del tiempo en casa y la rutina.",
        icon: "Home",
        tips: [
          "Razas de perros pequeños o medianos son perfectas",
          "Establece una rutina relajante de cuidado",
          "Los momentos de mimos son importantes",
          "Crea un ambiente acogedor para tu mascota"
        ],
        recommendations: [
          "Perros como Bichon Frisé, Cavalier King Charles",
          "Gatos cariñosos como Ragdoll o Persa",
          "Mascotas senior que buscan un hogar tranquilo",
          "Considera la adopción de mascotas maduras"
        ]
      },
      {
        type: "activo",
        title: "Dueño Activo y Aventurero",
        description: "Tu energía es contagiosa y necesitas una mascota que te acompañe en todas tus aventuras. El ejercicio y la actividad son parte de tu vida diaria.",
        icon: "Zap",
        tips: [
          "Razas de perros activas son tu mejor opción",
          "Planifica actividades al aire libre regularmente",
          "El entrenamiento activo fortalecerá su vínculo",
          "Invierte en equipo deportivo para mascotas"
        ],
        recommendations: [
          "Border Collie, Labrador, Golden Retriever",
          "Husky Siberiano, Australian Shepherd",
          "Jack Russell Terrier para espacios más pequeños",
          "Planifica rutas de senderismo pet-friendly"
        ]
      },
      {
        type: "protector",
        title: "Dueño Protector y Dedicado",
        description: "Eres extremadamente cuidadoso y dedicado. Estás dispuesto a dar todo por tu mascota y priorizas su bienestar por encima de todo.",
        icon: "Shield",
        tips: [
          "Cualquier mascota será feliz contigo",
          "Tu compromiso es admirable",
          "No olvides también cuidar de ti mismo",
          "Considera mascotas con necesidades especiales"
        ],
        recommendations: [
          "Puedes adoptar mascotas con necesidades especiales",
          "Razas que requieren cuidados extra como Bulldogs",
          "Cachorros o mascotas rescatadas se beneficiarán de tu dedicación",
          "Considera ser familia de acogida temporal"
        ]
      }
    ]
  },
  {
    id: "que-mascota-te-conviene",
    title: "¿Qué Mascota Te Conviene Más?",
    description: "Basado en tu estilo de vida, personalidad y preferencias, descubre qué tipo de mascota sería tu compañero perfecto.",
    image: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=800&q=80",
    category: "Estilo de vida",
    questions: [
      {
        id: 1,
        question: "¿Cuál es tu presupuesto mensual para una mascota?",
        options: [
          { text: "Menos de $30", points: { pez: 3, hamster: 2, gato: 1, perro: 0 } },
          { text: "$30 - $60", points: { pez: 2, hamster: 3, gato: 2, perro: 1 } },
          { text: "$60 - $100", points: { pez: 1, hamster: 2, gato: 3, perro: 2 } },
          { text: "Más de $100", points: { pez: 0, hamster: 1, gato: 2, perro: 3 } }
        ]
      },
      {
        id: 2,
        question: "¿Tienes alergias?",
        options: [
          { text: "Sí, alergias severas al pelo", points: { pez: 3, hamster: 1, gato: 0, perro: 0 } },
          { text: "Alergias leves", points: { pez: 2, hamster: 2, gato: 1, perro: 1 } },
          { text: "No tengo alergias", points: { pez: 1, hamster: 2, gato: 3, perro: 3 } }
        ]
      },
      {
        id: 3,
        question: "¿Viajas con frecuencia?",
        options: [
          { text: "Muy seguido (más de 2 veces al mes)", points: { pez: 3, hamster: 2, gato: 1, perro: 0 } },
          { text: "Ocasionalmente (1-2 veces al mes)", points: { pez: 2, hamster: 3, gato: 2, perro: 1 } },
          { text: "Rara vez", points: { pez: 1, hamster: 2, gato: 3, perro: 2 } },
          { text: "Casi nunca", points: { pez: 0, hamster: 1, gato: 2, perro: 3 } }
        ]
      },
      {
        id: 4,
        question: "¿Cuánto ruido puedes tolerar?",
        options: [
          { text: "Prefiero el silencio absoluto", points: { pez: 3, hamster: 2, gato: 2, perro: 0 } },
          { text: "Ruidos ocasionales están bien", points: { pez: 2, hamster: 2, gato: 3, perro: 1 } },
          { text: "No me molestan los ruidos", points: { pez: 1, hamster: 1, gato: 2, perro: 3 } }
        ]
      },
      {
        id: 5,
        question: "¿Cuánta interacción física quieres?",
        options: [
          { text: "Solo observación", points: { pez: 3, hamster: 1, gato: 0, perro: 0 } },
          { text: "Algo de contacto ocasional", points: { pez: 2, hamster: 3, gato: 2, perro: 1 } },
          { text: "Contacto regular", points: { pez: 0, hamster: 2, gato: 3, perro: 2 } },
          { text: "Máxima interacción y juegos", points: { pez: 0, hamster: 1, gato: 2, perro: 3 } }
        ]
      }
    ],
    results: [
      {
        type: "perro",
        title: "¡Un Perro es Para Ti!",
        description: "Tu estilo de vida, energía y dedicación son perfectos para un perro. Estás listo para el compromiso y el amor incondicional que viene con un compañero canino.",
        icon: "Dog",
        tips: [
          "Investiga razas según tu espacio y energía",
          "Prepárate para paseos diarios",
          "El entrenamiento es esencial desde cachorro",
          "Considera el tiempo de socialización"
        ],
        recommendations: [
          "Visita refugios locales para adopción",
          "Consulta sobre el temperamento antes de adoptar",
          "Prepara tu hogar antes de traer a tu perro",
          "Agenda chequeos veterinarios regulares"
        ]
      },
      {
        type: "gato",
        title: "¡Un Gato es Tu Compañero Ideal!",
        description: "Los gatos combinan perfectamente con tu estilo de vida. Son independientes pero cariñosos, perfectos para quienes valoran la compañía sin demandas excesivas.",
        icon: "Cat",
        tips: [
          "Proporciona rascadores y juguetes",
          "Mantén limpia la caja de arena",
          "Los gatos necesitan juego y estimulación",
          "Considera tener dos gatos para compañía mutua"
        ],
        recommendations: [
          "Gatos adultos suelen adaptarse mejor",
          "Esterilización es importante",
          "Crea espacios verticales para que escalen",
          "Rutina de cepillado previene bolas de pelo"
        ]
      },
      {
        type: "hamster",
        title: "¡Un Hamster es Perfecto Para Ti!",
        description: "Los hamsters son mascotas adorables y de bajo mantenimiento. Ideales para espacios pequeños y personas con horarios ocupados.",
        icon: "Circle",
        tips: [
          "Necesitan una jaula espaciosa",
          "Son más activos por la noche",
          "Requieren juguetes y una rueda para ejercicio",
          "Limpia su jaula semanalmente"
        ],
        recommendations: [
          "Compra una jaula de al menos 60x40 cm",
          "Proporciona escondites y túneles",
          "Alimentación balanceada es clave",
          "Manipula con cuidado y gentileza"
        ]
      },
      {
        type: "pez",
        title: "¡Un Acuario es Para Ti!",
        description: "Los peces ofrecen belleza, tranquilidad y requieren menos interacción física. Perfectos para observar y relajarse después de un día agitado.",
        icon: "Waves",
        tips: [
          "Investiga sobre el ciclo del nitrógeno",
          "Comienza con peces resistentes",
          "Mantén la temperatura y pH estables",
          "Limpia el filtro regularmente"
        ],
        recommendations: [
          "Bettas o Guppys son buenos para principiantes",
          "Invierte en un buen filtro y calentador",
          "No sobrealimentes a tus peces",
          "Haz cambios parciales de agua semanales"
        ]
      }
    ]
  }
];

export function getQuizById(id: string): Quiz | undefined {
  return QUIZZES.find(quiz => quiz.id === id);
}