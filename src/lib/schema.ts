export const groomingSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Grooming Express",
  description: "Grooming profesional para mascotas en HealppyPets",
  provider: {
    "@type": "LocalBusiness",
    name: "HealppyPets",
    address: "Calle Clemente Yerovi Indaburu Oe143 y OE1B, Carcelén, Quito",
    telephone: "+593987005084",
  },
  priceRange: "$20-$30",
  areaServed: "Carcelén, Quito",
};

export const vacunacionSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Vacunación Completa",
  description: "Plan de vacunación personalizado para mascotas en HealppyPets",
  provider: {
    "@type": "LocalBusiness",
    name: "HealppyPets",
    address: "Calle Clemente Yerovi Indaburu Oe143 y OE1B, Carcelén, Quito",
    telephone: "+593987005084",
  },
  priceRange: "$20",
  areaServed: "Carcelén, Quito",
};

export const consultasSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Consulta Veterinaria",
  description: "Consultas veterinarias completas con evaluación, diagnóstico y plan de tratamiento en HealppyPets",
  provider: {
    "@type": "LocalBusiness",
    name: "HealppyPets",
    address: "Calle Clemente Yerovi Indaburu Oe143 y OE1B, Carcelén, Quito",
    telephone: "+593987005084",
  },
  priceRange: "$15",
  areaServed: "Carcelén, Quito",
};

export const primeraCitaSchema = {
  "@context": "https://schema.org",
  "@type": "Offer",
  name: "Primera Cita - 20% OFF",
  description: "Promoción de primera cita para nuevos clientes en HealppyPets: 20% de descuento en grooming, consulta o vacunación",
  provider: {
    "@type": "LocalBusiness",
    name: "HealppyPets",
    address: "Calle Clemente Yerovi Indaburu Oe143 y OE1B, Carcelén, Quito",
    telephone: "+593987005084",
  },
  priceSpecification: {
    "@type": "PriceSpecification",
    priceCurrency: "USD",
    price: "varies",
  },
  availability: "https://schema.org/InStock",
};
