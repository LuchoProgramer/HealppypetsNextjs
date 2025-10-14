import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Combina clases de Tailwind CSS de manera inteligente
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Formatea un número de teléfono
 */
export function formatPhone(phone: string): string {
  const cleaned = phone.replace(/\D/g, "");
  const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
  if (match) {
    return `(${match[1]}) ${match[2]}-${match[3]}`;
  }
  return phone;
}

/**
 * Formatea una fecha a formato legible
 */
export function formatDate(date: string): string {
  const d = new Date(date);
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return d.toLocaleDateString("es-EC", options);
}

/**
 * Genera un mensaje de WhatsApp personalizado
 */
export function generateWhatsAppMessage(data: {
  name?: string;
  service?: string;
  message?: string;
  petName?: string;
  date?: string;
  time?: string;
}): string {
  let message = "Hola! ";

  if (data.name) {
    message += `Soy ${data.name}. `;
  }

  if (data.petName && data.service) {
    message += `Quisiera agendar ${data.service} para ${data.petName}`;
    if (data.date) {
      message += ` el ${data.date}`;
    }
    if (data.time) {
      message += ` a las ${data.time}`;
    }
    message += ". ";
  } else if (data.service) {
    message += `Me interesa el servicio de ${data.service}. `;
  }

  if (data.message) {
    message += data.message;
  }

  return message;
}

/**
 * Valida un email
 */
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Valida un teléfono ecuatoriano
 */
export function isValidPhone(phone: string): boolean {
  const cleaned = phone.replace(/\D/g, "");
  return cleaned.length === 10 && cleaned.startsWith("0");
}

/**
 * Trunca un texto a un número específico de palabras
 */
export function truncateText(text: string, maxWords: number): string {
  const words = text.split(" ");
  if (words.length <= maxWords) {
    return text;
  }
  return words.slice(0, maxWords).join(" ") + "...";
}

/**
 * Genera un slug a partir de un texto
 */
export function generateSlug(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .trim();
}

/**
 * Calcula el tiempo de lectura estimado
 */
export function calculateReadingTime(text: string): number {
  const wordsPerMinute = 200;
  const wordCount = text.split(/\s+/).length;
  const readingTime = Math.ceil(wordCount / wordsPerMinute);
  return readingTime;
}

/**
 * Obtiene las iniciales de un nombre
 */
export function getInitials(name: string): string {
  const names = name.split(" ");
  if (names.length === 1) {
    return names[0].charAt(0).toUpperCase();
  }
  return (
    names[0].charAt(0).toUpperCase() + names[names.length - 1].charAt(0).toUpperCase()
  );
}

/**
 * Verifica si una fecha está en el pasado
 */
export function isPastDate(date: string): boolean {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const inputDate = new Date(date);
  return inputDate < today;
}

/**
 * Obtiene el saludo según la hora del día
 */
export function getGreeting(): string {
  const hour = new Date().getHours();
  if (hour < 12) {
    return "Buenos días";
  } else if (hour < 19) {
    return "Buenas tardes";
  } else {
    return "Buenas noches";
  }
}

/**
 * Debounce function para optimizar eventos
 */
export function debounce<T extends (...args: unknown[]) => unknown>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout;
  return function executedFunction(...args: Parameters<T>) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

/**
 * Scrollea suavemente a un elemento
 */
export function smoothScrollTo(elementId: string, offset: number = 80): void {
  const element = document.getElementById(elementId);
  if (element) {
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  }
}