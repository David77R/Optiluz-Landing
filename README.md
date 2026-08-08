# Optica OptiLuz

## Cómo abrirlo

1. Clone el repositorio
2. Abra index.html
3. No requiere instalación de dependencias, es HTML/CSS/JS puro

# Header y navegación

Header fijo con auto-ocultado al hacer scroll. Menú con submenús desplegables por categoría con botón cta degradado

# Hero

Fondo de carrusel a pantalla completa con puntos de control clickeables

# Servicio

Tarjetas con imagen de fondo completa con efecto de enfoque en hover

# Seccion de testimonios

Los testimonios de la sección correspondiente son de ejemplo, ya que el negocio no cuenta con reseñas públicas verificables al momento de esta entrega

## Imágenes

Las fotografías de la sección de Servicios son de stock usadas como ilustrativas del tipo de producto por los momentos. El fondo de la sección de servicios junto con las imágenes son temporales de stock genérico, las mismas las planeo reemplazar con fotos reales del consultorio junto con del inventario cuando las tenga disponibles

# Seccion de colores para el hero

Aunque la paleta de colores me arroja un color bonito, prefiero utilizar uno mas legible y en contraste para mayor visualizacion al ojo del usuario final

# Apoyo con la IA en el CSS

Situando los colores primarios, me asisti para ubicar cada una de las variables en sus respectivos lugares, sin embargo el asistente IA se equivoco en principio con el gradiente y los colores herederos del color primario en la etiqueta de h1. Primero la estructura principal, al llegar al JS se va modificando respectivamente

# Javascript

IntersectionObserver para animaciones de título, lógica del carrusel del hero, menú hamburguesa, submenús, header que se esconde, todo respetando prefers-reduced-motion.

## Despliegue

Sitio en vivo: https://optiluz-landing.vercel.app/

## Lighthouse (perfil móvil)

- Performance: 97
- Accessibility: 100

# Light house perfil móvil modo incógnito

- Performance: 97
- Accessibility: 100

# Optimización final

Bug del logo sobredimensionado 51 KiB → 11 KiB y de la imagen LCP con loading=lazy indebido. Performance subió de 86 a 96
