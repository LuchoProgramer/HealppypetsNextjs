# Documentación: Uso y creación de llms.txt para proyectos web

## ¿Qué es llms.txt?
`llms.txt` es un archivo en formato markdown ubicado en la raíz de un sitio web. Su objetivo es proporcionar a los modelos de lenguaje (LLMs) un resumen claro, enlaces clave y contexto relevante sobre el sitio, facilitando la inferencia y el acceso a información importante.

## ¿Por qué usarlo?
- Mejora la comprensión de tu sitio por parte de asistentes de IA y motores de búsqueda avanzados.
- Permite a los LLMs responder preguntas sobre tus servicios, contacto, ubicación y recursos clave sin procesar HTML complejo.
- Es un estándar emergente propuesto por Jeremy Howard y la comunidad de Answer.AI.

## Estructura recomendada
1. **Encabezado H1**: Nombre del proyecto o sitio.
2. **Nota opcional**: Aclaración sobre el tipo de enlaces (HTML o markdown).
3. **Cita (blockquote)**: Resumen breve del proyecto.
4. **Párrafo adicional**: Contexto, público objetivo, diferenciadores.
5. **Datos de contacto**: WhatsApp, dirección, email, etc.
6. **Secciones con H2**: Listas de enlaces relevantes (servicios, blog, recursos, etc.) con descripciones breves.
7. **Sección Opcional**: Recursos secundarios o menos prioritarios.

## Ejemplo básico
```markdown
# Mi Proyecto Web
# Nota: Las URLs enlazadas son páginas HTML. Si se generan versiones markdown, se actualizarán aquí.

> Descripción breve del proyecto y su propósito.

Párrafo adicional con detalles sobre el público objetivo, servicios, etc.

**WhatsApp:** [099 999 9999](https://wa.me/593999999999)
**Dirección:** [Calle Ejemplo, Ciudad, País](https://maps.app.goo.gl/ejemplo)

## Servicios
- [Servicio 1](https://miweb.com/servicio1): Descripción breve.
- [Servicio 2](https://miweb.com/servicio2): Descripción breve.

## Blog
- [Blog principal](https://miweb.com/blog): Artículos y recursos educativos.

## Opcional
- [FAQ](https://miweb.com/faq): Respuestas a dudas frecuentes.
- [Contacto](https://miweb.com/contacto): Formulario y datos de contacto.
```

## Buenas prácticas
- Usa lenguaje claro y directo.
- Incluye enlaces a recursos clave y datos de contacto.
- Si tienes versiones markdown de tus páginas, enlázalas; si no, usa las URLs HTML y acláralo en una nota.
- Actualiza el archivo si cambian los servicios, enlaces o datos de contacto.

## Validación y herramientas
- Puedes validar el formato y generar archivos de contexto usando [llms_txt2ctx](https://github.com/AnswerDotAI/llms-txt2ctx).
- Ejemplo de uso:
  ```sh
  python llms_txt2ctx.py /ruta/a/tu/llms.txt
  ```

## Referencias
- [Especificación oficial llms.txt](https://github.com/jeremyhoward/llms-txt-spec)
- [Repositorio llms_txt2ctx](https://github.com/AnswerDotAI/llms-txt2ctx)
- [Ejemplo real de FastHTML](https://fastht.ml/llms.txt)

---

**Este archivo es una guía para implementar llms.txt en futuros proyectos web, asegurando compatibilidad y utilidad para modelos de lenguaje.**
