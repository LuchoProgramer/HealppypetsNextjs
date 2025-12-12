"use client";

import { useEffect } from 'react';

/**
 * Componente cliente que detecta embeds de TikTok e inyecta el script necesario para renderizarlos.
 * Se debe colocar en cualquier página que pueda contener videos de TikTok.
 */
export default function TikTokLoader() {
    useEffect(() => {
        // Función para cargar el script
        const loadTikTokScript = () => {
            // Verificar si hay embeds en la página
            const embeds = document.querySelectorAll('.tiktok-embed');
            if (embeds.length === 0) return;

            // Verificar si el script ya existe para evitar duplicados
            if (document.querySelector('script[src="https://www.tiktok.com/embed.js"]')) {
                // Si el script ya existe pero los videos no se han cargado, podemos intentar recargar
                // @ts-ignore
                if (window.tiktok) {
                    // @ts-ignore
                    window.tiktok.embed.load();
                }
                return;
            }

            // Crear e inyectar el script
            const script = document.createElement('script');
            script.src = "https://www.tiktok.com/embed.js";
            script.async = true;
            document.body.appendChild(script);
        };

        // Intentar cargar inmediatamente
        loadTikTokScript();

        // Opcional: Observar cambios en el DOM si el contenido se carga dinámicamente
        // (Útil si usas suspense o carga lazy de contenido)
        const observer = new MutationObserver((mutations) => {
            let shouldLoad = false;
            mutations.forEach(mutation => {
                if (mutation.addedNodes.length > 0) {
                    shouldLoad = true;
                }
            });
            if (shouldLoad) loadTikTokScript();
        });

        observer.observe(document.body, { childList: true, subtree: true });

        return () => observer.disconnect();
    }, []);

    return null;
}
