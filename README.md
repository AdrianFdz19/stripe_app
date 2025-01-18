# Simulador de Pagos con Stripe

## Descripción
Este es un simulador de pagos utilizando la plataforma Stripe. Permite realizar transacciones simuladas entre usuarios y la plataforma de pagos en un entorno de prueba controlado. El proyecto utiliza la pila **PERN** (PostgreSQL, Express, React, Node.js) y tiene una interfaz de usuario sencilla para realizar y visualizar pagos.

Este proyecto está abierto a contribuciones de la comunidad (open source) y mejoras, ya que es parte de un portafolio de aprendizaje.

---

## Características Principales
- Simulación de pagos con Stripe.
- Interfaz amigable para realizar transacciones.
- Backend seguro con autenticación JWT.
- Base de datos PostgreSQL para almacenar datos de usuarios y transacciones.

---

## Tecnologías Utilizadas
- **Frontend**: React (con Vite y TypeScript usando SWC).
- **Backend**: Node.js con Express.
- **Base de datos**: PostgreSQL.
- **Integraciones**: Stripe API (para simular los pagos).

---

## Requisitos Previos
- **Node.js** v16+ instalado.
- **PostgreSQL** configurado.
- Cuenta de Stripe para obtener claves de API.
- Yarn o npm como gestor de paquetes.

---

## Instrucciones de Instalación

### 1. Clonar el repositorio
Abre tu terminal y ejecuta los siguientes comandos:
```bash
git clone https://github.com/tu-usuario/simulador-pagos-stripe.git
cd simulador-pagos-stripe
```

### 2. Configurar el backend
1. Ve a la carpeta del servidor:
   ```bash
   cd server
   ```
2. Instala las dependencias:
   ```bash
   npm install
   ```
3. Crea un archivo `.env` basado en el archivo de ejemplo:
   ```bash
   cp .env.example .env
   ```
4. Completa las variables de entorno en el archivo `.env`:
   ```
   PORT=5000
   DATABASE_URL=postgresql://usuario:contraseña@localhost:5432/tu_base_datos
   STRIPE_SECRET_KEY=tu_clave_secreta_de_stripe
   ```
5. Inicia el servidor en modo desarrollo:
   ```bash
   npm run dev
   ```

### 3. Configurar el frontend
1. Ve a la carpeta del cliente:
   ```bash
   cd ../client
   ```
2. Instala las dependencias:
   ```bash
   npm install
   ```
3. Inicia la aplicación en modo desarrollo:
   ```bash
   npm run dev
   ```

---

## Guía de Uso
1. Abre el frontend en tu navegador.
2. Completa los campos del formulario de pago.
3. Envía el formulario para simular un pago.
4. Visualiza los resultados en la interfaz o en la consola del servidor.

---

## Estructura del Proyecto
```
/client  - Contiene el código del frontend.
/server  - Contiene el código del backend.
```
- **Archivos clave**:
  - `server/src/routes/payment.js`: Lógica para manejar pagos con Stripe.
  - `client/src/components/CheckoutForm.tsx`: Formulario de pago.

---

## Capturas de Pantalla
Puedes incluir capturas de pantalla de la interfaz o flujos clave para ilustrar mejor el funcionamiento del proyecto:

![Formulario de Pago](https://res.cloudinary.com/dlnapytj1/image/upload/v1737219636/checkoutform_ozelae.png)
![Historial de Transacciones](https://res.cloudinary.com/dlnapytj1/image/upload/v1737219853/Captura_de_pantalla_2025-01-18_110333_frlrms.png)

---

## Consideraciones Técnicas
- Las claves de la API de Stripe se gestionan mediante variables de entorno para mantener la seguridad.
- Middlewares en Express aseguran que las solicitudes al backend estén correctamente validadas.

---

## Futuras Mejoras
- Agregar un historial de transacciones accesible desde el frontend.
- Implementar autenticación completa de usuarios.
- Mejorar el diseño del frontend con una experiencia de usuario más refinada.

---

## Licencia
Este proyecto está bajo la licencia MIT. Puedes usarlo, modificarlo y distribuirlo libremente.

---

## Contribuciones
Las contribuciones son bienvenidas. Si deseas colaborar:
1. Haz un fork del proyecto.
2. Crea una rama para tus cambios:
   ```bash
   git checkout -b feature/nueva-funcionalidad
   ```
3. Envía un Pull Request describiendo tus cambios.

