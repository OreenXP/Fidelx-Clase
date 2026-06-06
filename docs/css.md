# Documentación del Módulo: `css`

Este módulo encapsula todos los estilos y componentes de diseño para la interfaz de usuario (UI) del proyecto. Contiene variables CSS personalizadas (Custom Properties) y clases de utilidad (Utility Classes) que estructuran la presentación visual de los diferentes componentes de la aplicación, asegurando coherencia y mantenibilidad del diseño.

**Ubicación del Módulo:** `/home/tadeofed/Escritorio/Fidelx-Clase/frontend/css`

---

## 📚 Estructura de Archivos

El módulo se compone de un único archivo principal que gestiona todos los estilos.

| Archivo | Propósito | Descripción |
| :--- | :--- | :--- |
| `style.css` | Estilos CSS globales | Contiene la definición de todas las variables CSS, clases de utilidad y estilos base necesarios para la aplicación completa. |

---

## ✨ Variables CSS (Custom Properties)

Este conjunto de variables define parámetros de diseño reutilizables (como colores, radios y sombras), lo que facilita la tematización y el mantenimiento de la paleta de colores y la tipografía.

| Nombre de la Variable | Tipo | Uso | Descripción Detallada |
| :--- | :--- | :--- | :--- |
| `primary-50` a `primary-900` | `css-variable` | Color Primario | Variables que definen los tonos de la paleta primaria (rojo/rosa, típicamente). |
| `indigo-500` | `css-variable` | Color de Marca | Definición del tono principal de color índigo. |
| `cyan-500` | `css-variable` | Color Complementario | Definición del tono principal de color cian. |
| `violet-500` | `css-variable` | Color Secundario | Definición del tono principal de color violeta. |
| `gray-50` a `gray-900` | `css-variable` | Escala de Grises | Mapeo completo de la escala de grises, útil para fondos, bordes y texto secundario. |
| `radius` | `css-variable` | Bordes Redondeados | Define el radio de borde base para los componentes. |
| `radius-sm` | `css-variable` | Bordes Redondeados Pequeños | Radio de borde más reducido. |
| `radius-lg` | `css-variable` | Bordes Redondeados Grandes | Radio de borde más pronunciado. |
| `shadow-sm` | `css-variable` | Sombra Pequeña | Define la capa de sombra para efectos sutiles. |
| `shadow` | `css-variable` | Sombra Estándar | Sombra predeterminada para componentes elevados. |
| `shadow-md` | `css-variable` | Sombra Media | Define la capa de sombra para componentes con presencia media. |
| `shadow-lg` | `css-variable` | Sombra Grande | Define la capa de sombra para elementos destacados. |
| `shadow-xl` | `css-variable` | Sombra Extra Grande | Sombra máxima para componentes de gran importancia visual. |
| `transition` | `css-variable` | Transiciones | Controla la duración y la curva de las transiciones de estado (hovers, foco). |

---

## 🚀 Clases CSS Exportadas (Componentes)

Estas clases representan componentes reutilizables que deben aplicarse al HTML para renderizar la estructura y el estilo deseados.

| Clase | Propósito General | Estructura/Componente |
| :--- | :--- | :--- |
| **Contenedores y Estructura** | | |
| `container` | Contenedor de ancho fijo. | Envuelve el contenido principal limitando su ancho máximo y centrándolo. |
| `section` | Sección de contenido general. | Define la delimitación estructural de una sección completa de la página. |
| `section-alt` | Variación de sección. | Estilo de sección alternativo, usado para romper la monotonía visual. |
| `section-header` | Encabezado de sección. | Estilos específicos para títulos o encabezados de sección. |
| `card` | Tarjeta de contenido. | Estructura base para mostrar bloques de información contenidos. |
| `card-icon` | Icono de tarjeta. | Estiliza un icono dentro de una tarjeta. |
| `roles-grid` | Grid de roles. | Diseña una cuadrícula para la presentación de roles o categorías. |
| `role-card` | Tarjeta de rol. | Estilo específico para una tarjeta individual dentro de un grid de roles. |
| `role-header` | Encabezado de rol. | Título o encabezado dentro de la tarjeta de rol. |
| `role-icon` | Icono de rol. | Icono asociado a la tarjeta de rol. |
| `role-list` | Lista de roles. | Estilos para una lista ordenada o desordenada de roles. |
| **Encabezados y Navegación (Header & Nav)** | | |
| `navbar` | Barra de navegación principal. | Contenedor principal del menú de navegación. |
| `nav-container` | Contenedor de navegación. | Limita el ancho del contenido dentro de la barra de navegación. |
| `nav-logo` | Logo en navegación. | Estiliza el logotipo de la marca en el menú. |
| `nav-menu` | Menú de enlaces. | Contenedor para la colección de enlaces de navegación. |
| `nav-link` | Enlace de menú. | Estiliza un elemento de enlace individual dentro del menú. |
| `active` | Estado activo (Navegación). | Clase utilizada para destacar el enlace o elemento de navegación actualmente activo. |
| `nav-btn` | Botón de navegación. | Estilo específico para un botón dentro de la barra de navegación. |
| `nav-toggle` | Botón de Toggle. | Botón utilizado para mostrar/ocultar el menú en dispositivos móviles. |
| `logo-icon` | Icono de logo. | Clase reutilizable para iconos de logotipos en diferentes secciones. |
| **Sección Hero y CTA** | | |
| `hero` | Sección de bienvenida/destaque. | Contenedor principal para la sección de presentación de alto impacto. |
| `hero-bg` | Fondo de Hero. | Aplica el fondo específico y estilos de la sección Hero. |
| `hero-content` | Contenido de Hero. | Contiene el texto y elementos principales de la sección Hero. |
| `hero-badge` | Etiqueta de Hero. | Badge o etiqueta de información dentro de la sección Hero. |
| `hero-subtitle` | Subtítulo de Hero. | Estiliza el subtítulo en la sección Hero. |
| `hero-actions` | Acciones en Hero. | Contenedor para los botones de llamado a la acción en Hero. |
| `cta-section` | Sección de llamado a la acción. | Contenedor general para cualquier llamada a la acción. |
| `cta-box` | Caja de CTA. | Estiliza un bloque específico dentro de la sección de CTA. |
| `cta-actions` | Acciones de CTA. | Contenedor para los botones de llamado a la acción. |
| `highlight` | Elemento destacado. | Clase de utilidad para resaltar visualmente contenido específico. |
| `hero-actions` | Acciones en Hero. | (Duplicado) Contenedor para los botones de llamado a la acción en Hero. |
| **Botones (Buttons)** | | |
| `btn` | Botón base. | Estilo base genérico para todos los botones. |
| `btn-primary` | Botón principal. | Botón con el color primario de la aplicación (acción principal). |
| `btn-secondary` | Botón secundario. | Botón con un color complementario o secundario. |
| `btn-outline` | Botón delineado. | Botón que solo aplica un borde visible, sin relleno de color. |
| `btn-sm` | Botón pequeño. | Reduce el tamaño de la fuente y el padding del botón. |
| `btn-block` | Bloque de botón. | Hace que el botón ocupe el ancho completo de su contenedor. |
| **Tarjetas y Listados (Cards & Layout)** | | |
| `cards-grid` | Grid de tarjetas. | Estructura de cuadrícula para múltiples tarjetas. |
| `form-page` | Página de formulario. | Contenedor principal que estructura la página que contiene el formulario. |
| `form-container` | Contenedor de formulario. | Envuelve el formulario limitando su ancho. |
| `form-box` | Caja de formulario. | Estilo de caja o contenedor visual para el formulario en sí. |
| `form-header` | Encabezado de formulario. | Estiliza el título y el encabezado dentro del formulario. |
| `form-group` | Grupo de formulario. | Contenedor que agrupa un elemento de formulario (label, input, error). |
| `error` | Mensaje de error (Generico). | Estiliza mensajes o elementos que indican un error. |
| `logo` | (Implícito) | Clase genérica para el logo o marca. |
| **Formulario y Input** | | |
| `form` | (Implícito) | Clase genérica para el formulario HTML. |
| `input` | (Implícito) | Clase genérica para los campos de entrada. |
| **Footer y Utilidades** | | |
| `footer` | (Implícito) | Clase genérica para el pie de página del sitio. |

***

### Resumen de Implementación

La estructura CSS está diseñada para ser modular y escalable, separando las responsabilidades de los componentes:

1.  **Estilos Globales (`body`, `html`):** Se encargan del reset básico y la tipografía base.
2.  **Layout:** Clases de estructura (e.g., contenedores, márgenes).
3.  **Componentes:** Clases específicas para elementos reutilizables (botones, tarjetas, modales).
4.  **Tokens/Utilidades:** Variables y utilidades de espaciado/color.

El mapeo de clases es la clave para su uso en HTML, permitiendo una arquitectura **BEM-like (Block Element Modifier)**, asegurando que los estilos sean predecibles y fáciles de sobreescribir.