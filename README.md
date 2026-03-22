### Descripción del Proyecto

Este proyecto consiste en el desarrollo de un Marketplace especializado para **EnredaArte**, un emprendimiento de joyería artesanal en alambrismo de cobre y cristales. La aplicación permite a los usuarios navegar por un catálogo de piezas únicas, gestionar un carrito de compras y, para la administración, controlar el inventario de la tienda.

# Requerimiento 1
### 🖥️ Vistas del proyecto
Visitar el siguiente link para visualizar las diferentes vistas https://www.figma.com/design/gokS8qpRhqHXL3dknH3Dsp/Ecommerce-Website-Wireframe--Community-?node-id=102-379&p=f&t=2jgSpXeO4omyPrHD-0

Se ha diseñado el prototipo funcional de la aplicación, definiendo la estructura y los elementos clave de cada pantalla para asegurar una navegación fluida entre el catálogo y el proceso de compra.

Componentes Prototipados:

- **Página Principal**: Vista de bienvenida con la identidad de marca, destacando las colecciones de joyería artesanal y el acceso a la tienda.

- **Registro de Usuarios**: Formulario para capturar los datos de nuevos clientes (nombre, email, teléfono).

- **Inicio de Sesión**: Interfaz de acceso para usuarios registrados y validación de administrador.

- **Mi Perfil**: Espacio personal donde el cliente puede ver sus datos y su lista de joyas favoritas.

- **Galería de Publicaciones (Tienda)**: Catálogo dinámico donde se muestran todas las piezas de alambrismo disponibles.

- **Vista de Detalle de una Publicación**: Pantalla específica con la descripción técnica de la joya (piedra, color, stock) y botones de acción.

- **Carrito de Compras**: Interfaz de revisión donde el usuario gestiona las cantidades de los productos seleccionados.

- **Confirmación de Compra**: Paso final para procesar el pedido y generar el registro en la base de datos.

- **Formulario para crear una publicación (Privado)**: Panel exclusivo para la administración, diseñado para subir nuevas piezas al catálogo con sus especificaciones técnicas.

# Requerimiento 2

### 🚪 Navegación y Roles de Acceso
(Archivo Diagrama de Vistas en la carpeta ***/documentation***)

El sistema implementa una lógica de rutas protegidas para diferenciar las capacidades de los usuarios:

1. **Vistas Públicas:** Acceso libre a la Página Principal, Galería de productos, Registro y Login.

2. **Vistas Privadas (Cliente):** Requieren inicio de sesión para acceder a "Mi Perfil", "Mis Favoritos", "Carrito de compras" y "Confirmación de compras".

3. **Vistas Privadas (Administrador):** Acceso exclusivo a la Gestión de inventario, Lista de usuarios registrados y Gestión de ventas.

# Requerimiento 3
### 🛠️ Tecnologías y Dependencias
(Archivo Dependencias.md en la carpeta ***/documentation***)

Para asegurar un desarrollo sólido en las tres capas del proyecto, se han definido las siguientes librerías:

## Frontend:
- **React & React Router DOM**: Para la creación de una interfaz dinámica y la navegación entre las vistas públicas y privadas.
- **Context API**: Para la gestión global del **Carrito de Compras**, permitiendo que los productos persistan durante la navegación.
- **Axios**: Para el consumo de la API del servidor.
- **SweetAlert2**: Para notificaciones de confirmación de compra y alertas de usuario.
- **Bootstrap**: Para un diseño responsivo y elegante acorde a la marca.

## Backend:
- **Express.js**: Framework principal para la creación de la API REST.
- **JSON Web Token (JWT)**: Para la autenticación y diferenciación de accesos entre *Administrador* y *Cliente*.
- **Bcryptjs**: Para la seguridad y encriptación de contraseñas de los usuarios.
- **Dotenv & CORS**: Para la configuración de variables de entorno y permisos de conexión entre capas.

## Database:
- **PostgreSQL**: Sistema de gestión de base de datos relacional para el almacenamiento de joyas y pedidos.
- **PG**: Driver para conectar Node.js con la base de datos.

# Requerimiento 4
### 🗄️ Modelo de Datos 
(Archivo Esquema de base de datos en la carpeta ***/documentation***)

Se han diseñado tablas relacionadas para soportar el flujo comercial:

- **Users**: Incluye el campo `role` para definir permisos.
- **Products**: Detalla las joyas (material, piedra, precio, stock).
- **Orders**: Registra las compras confirmadas desde el carrito.
- **Favorites**: Permite a los clientes guardar sus piezas preferidas.

# Requerimiento 5
### 📄 Contrato de Datos de la API REST
(Archivo API_REFERENCES.md en la carpeta ***/documentation***)

Se ha definido un contrato de datos detallado que establece la estructura de los objetos JSON para la comunicación entre el Frontend y el Backend. Este contrato asegura que las peticiones coincidan con el Esquema de Base de Datos de EnredaArte:


- **Autenticación** Estructura para el registro y login, incluyendo el manejo de Tokens JWT y la devolución del rol de usuario (admin/user).

- **Gestión de Productos**: Formatos para listar el catálogo y permitir que la administradora agregue nuevas joyas (incluyendo campos de material, piedra y stock).

- **Flujo del Carrito**: Definición del objeto para la Confirmación de Compra, vinculando el ID del usuario con el total y la fecha de la orden.