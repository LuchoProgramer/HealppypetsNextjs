export const GA_TRACKING_ID = 'G-T2KBL64FPR';

// Definición de tipos para los eventos
type GTagEvent = {
    action: string;
    category: string;
    label?: string;
    value?: number;
    // send_to es crucial para Google Ads cuando tengas el ID y el Label
    // Ejemplo: 'AW-CONVERSION_ID/CONVERSION_LABEL'
    send_to?: string;
};

// Mapeo de Conversiones de Google Ads
// Este diccionario conecta tus eventos de GA4 con las etiquetas criptográficas de Google Ads.
// Cuando tengas tus IDs, solo reemplaza los valores de 'AW-XXXXX/YYYYYY'.
const ADS_CONVERSION_MAP: Record<string, string> = {
    // 'nombre_evento_ga4': 'AW-ID_CUENTA/LABEL_CONVERSION'
    'whatsapp_click': '', // Poner aquí Label de WhatsApp p.ej: 'AW-12345/AbC_WxYz'
    'generate_lead': '',  // Poner aquí Label de Formulario
    'phone_click': '',    // Poner aquí Label de Teléfono
    'begin_checkout': '', // Poner aquí Label de Agendar Cita
};

// Declaración global para evitar errores de TS
declare global {
    interface Window {
        gtag?: (...args: any[]) => void;
    }
}

// Función genérica centralizada
export const trackEvent = ({ action, category, label, value, send_to }: GTagEvent) => {
    if (typeof window !== 'undefined' && window.gtag) {
        const eventParams: any = {
            event_category: category,
            event_label: label,
            value: value,
        };

        // 1. Enviar siempre a GA4 (Evento Base)
        // Si se pasa un send_to explícito, se usa; si no, va al default (GA4)
        if (send_to) {
            eventParams.send_to = send_to;
        }
        window.gtag('event', action, eventParams);

        // 2. Revisar si este evento activa una conversión de Google Ads (Doble Disparo)
        // Si el evento tiene un "gemelo" en el mapa de Ads, lanzamos el segundo evento directo.
        const adsConversionLabel = ADS_CONVERSION_MAP[action];
        if (adsConversionLabel) {
            window.gtag('event', 'conversion', {
                'send_to': adsConversionLabel,
                // Opcional: pasar el valor si es relevante para Ads (ej. valor de venta)
                'value': value,
                'event_callback': () => {
                    // Callback opcional por si quieres saber cuándo terminó
                    // console.log('Conversión enviada a Ads');
                }
            });
            console.log(`[Analytics] Ads Conversion Sent: ${adsConversionLabel}`);
        }

        // Log para depuración
        console.log(`[Analytics] Event Sent: ${action}`, eventParams);
    }
};

// --- EVENTOS ESPECÍFICOS DE CONVERSIÓN ---

// 1. Clic en WhatsApp
// Location nos ayuda a saber si fue en el header, footer o botón flotante
export const trackWhatsAppClick = (location: string) => {
    trackEvent({
        action: 'whatsapp_click',
        category: 'Contact',
        label: `WhatsApp - ${location}`,
        // Tarea futura: Cuando tengas el ID de Ads, podrías añadir algo como:
        // send_to: 'AW-XXXXX/YYYYYYY'
    });
};

// 2. Envío de Formulario
export const trackFormSubmit = (formName: string) => {
    trackEvent({
        action: 'generate_lead', // Nombre estándar de GA4 para leads
        category: 'Form',
        label: `Form Submit - ${formName}`,
    });
};

// 3. Clic en Teléfono/Llamada
export const trackPhoneClick = (phoneNumber: string) => {
    trackEvent({
        action: 'phone_click',
        category: 'Contact',
        label: `Call - ${phoneNumber}`,
    });
};

// 4. Agendamiento (si hubiera un botón específico de agendar)
export const trackBookingInitiated = () => {
    trackEvent({
        action: 'begin_checkout', // O 'schedule'
        category: 'Booking',
        label: 'Booking Initiated',
    });
};
