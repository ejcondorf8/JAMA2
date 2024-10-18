# Proyecto de JAMA

Este proyecto está orientado a crear un sistema para **La Jama**, una cadena de restaurantes en expansión, con requisitos tanto para el **sistema interno** como para la **landing page** de la empresa.

---

## **Requerimientos del Sistema (Back-end y Front-end)**

### **Tecnologías Requeridas**:
1. **Framework Backend**: FastAPI  
   - Para el manejo de la lógica del negocio y la creación de una API REST.
   
2. **ORM (Mapeo Objeto-Relacional)**: Peewee  
   - Para la interacción con la base de datos y la manipulación de datos de forma eficiente y sencilla.

3. **Base de Datos**: MySQL o PostgreSQL  
   - Soporte para almacenar información de empleados, inventario, sucursales, proveedores, etc.

4. **Front-end**: React.js / Vanilla HTML, CSS y JavaScript  
   - React.js para crear una interfaz dinámica e interactiva para los usuarios.
   - Vanilla HTML, CSS y JS para casos donde se necesite algo más ligero y directo, sin usar bibliotecas adicionales.

5. **Infraestructura en la Nube**: Digital Ocean  
   - El despliegue de la aplicación se realizará en Digital Ocean, aprovechando su rendimiento y escalabilidad.

---

### **Estructura de Componentes (Sistema Interno)**

#### **Back-end (API REST)**:
- **FastAPI**:
  - Creación de endpoints para CRUD de empleados, sucursales, proveedores, inventario, etc.
  - Gestión de autenticación y autorización para usuarios empleados (admin, gerentes).
  - Manejo de reportes y visualización de métricas de negocio.

- **Peewee (ORM)**:
  - Gestión de la base de datos.
  - Manejo de relaciones entre empleados, sucursales, inventarios y proveedores.
  - Control de transacciones y acceso seguro a datos.

#### **Front-end (Sistema de Gestión para Empleados)**:
- **React.js**:
  - **Componentes** reutilizables para la interfaz del sistema.
  - **Rutas** y **estado** para gestionar el flujo de la aplicación.
  - **Tablas y gráficas** para mostrar datos relevantes como inventario y reportes de desempeño.
  
- **Vanilla JS, HTML y CSS**:
  - Para páginas más simples como formularios, informes estáticos o dashboards menos dinámicos.

---

## **Requerimientos de la Landing Page (Página de Presentación)**

### **Tecnología**: WordPress

- **Plataforma**: WordPress  
  - Fácil de mantener y actualizar contenido sin conocimientos técnicos avanzados.
  - Perfecto para construir páginas web atractivas rápidamente, con temas y plugins.
  
- **Objetivo**: Crear una **landing page atractiva** para los clientes e inversionistas potenciales, que transmita la **propuesta de valor de La Jama** como una experiencia gastronómica.

### **Aspectos Visuales Clave**:
1. **Diseño Visual Atractivo**:
   - Uso de imágenes de alta calidad de los platos y experiencias gastronómicas.
   - Uso de colores que refuercen la identidad de la marca (paleta de colores cálidos y acogedores).

2. **Contenido Estructurado**:
   - Secciones dedicadas a:
     - **Nuestra Historia**: Contar la historia de La Jama y su enfoque en la experiencia culinaria.
     - **Nuestros Platos**: Presentar los platos estrella del restaurante con imágenes.
     - **Ubicaciones**: Mostrar las ubicaciones actuales y las próximas aperturas.
     - **Inversión en Franquicias**: Un espacio dedicado a atraer inversionistas para la expansión de franquicias.

3. **Responsividad**:
   - El diseño debe adaptarse a dispositivos móviles y pantallas grandes.
   - Utilizar temas responsivos que mantengan la navegación fluida y accesible desde cualquier dispositivo.

