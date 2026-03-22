**EnredaArte - E-commerce de Joyería Artesanal**
**Hito 2:** Estado Global con Context API y Panel de Administración
Este proyecto es una plataforma de comercio electrónico desarrollada con React, diseñada para gestionar la venta de joyas hechas a mano. En este segundo hito, nos enfocamos en la implementación de un estado global para manejar el carrito, los favoritos y un panel administrativo funcional.

**Funcionalidades Implementadas**
### 1. Gestión de Estado Global (Context API)
Se implementó ProductContext para centralizar la información de la tienda, permitiendo que cualquier componente acceda a:

Catálogo de productos: Lista dinámica de joyas con sus detalles.

Carrito de compras: Funciones para añadir, actualizar cantidades y calcular totales.

Sistema de Favoritos: Posibilidad de marcar joyas deseadas desde cualquier vista.

### 2. Panel de Administración (Admin Panel) 🛠️
Una sección exclusiva para la gestión del negocio que incluye:

Inventario: Visualización de stock y precios en tiempo real.

Agregar Productos: Formulario integrado para dar de alta nuevas creaciones.

Gestión de Usuarios: Visualización de la comunidad registrada.

Reporte de Ventas: Resumen de ingresos y pedidos realizados.

### 3. Experiencia de Usuario (UX)
Navegación Intuitiva: Uso de react-router-dom para transiciones fluidas.

Feedback Visual: Integración de SweetAlert2 para confirmar acciones (agregar al carrito, guardar producto, etc.).

Diseño Responsivo: Interfaz adaptada para escritorio y dispositivos móviles usando Bootstrap.

## Tecnologías Utilizadas
React.js: Biblioteca principal para la interfaz.

Context API: Manejo del estado global sin prop-drilling.

Bootstrap 5: Framework de estilos para un diseño limpio y rápido.

SweetAlert2: Alertas interactivas y estéticas.

React Router Dom: Manejo de rutas y navegación.

## Instalación y Uso

Clonar el repositorio:
git clone https://github.com/tu-usuario/enredaarte-hito2.git

Instalar dependencias:
npm install

Ejecutar el proyecto:
npm run dev
