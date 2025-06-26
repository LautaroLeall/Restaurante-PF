# 🍽️ Trabajo Práctico Final - Desarrollo de Front End

Este proyecto es un Trabajo Práctico Final para la materia **Desarrollo de Front End**, donde se desarrolló una aplicación web con **ReactJS**, **Bootstrap** y **SweetAlert2**.  
Permite **gestionar los pedidos de un restaurante**, incluyendo altas, bajas, modificaciones y visualización en una tabla dinámica.

---

## 🛠️ Tecnologías utilizadas

- ⚛️ ReactJS (con Vite)
- 🎨 Bootstrap 5
- 💾 LocalStorage para persistencia
- 🍬 SweetAlert2 para alertas
- 🔤 React Icons para íconos

---

## 🎯 Funcionalidades

- ✅ Alta de pedidos (Número de mesa, Producto, Cantidad)
- ✅ Visualización en tabla con cálculos de precio y total
- ✅ Edición de pedidos cargados
- ✅ Eliminación con confirmación de seguridad
- ✅ Persistencia con **LocalStorage**
- ✅ Responsive, usable desde cualquier dispositivo
- ✅ Estilo moderno con fondo personalizado y layout centrado

---

## 📦 Instalación y ejecución

**Clonar el repositorio**

```bash
git clone https://github.com/tu-usuario/tp-restaurante.git
```

**Entrar al proyecto**
```bash
cd Restaurante-TP
npm install
npm run dev
```

📁 Estructura del proyecto
```
public/
│ ├── logo.png
│ └── restaurante.png
src/
├── assets/
│   ├── logo.png
│   └── restaurante.png
├── components/
│   ├── PedidoForm.jsx
│   └── PedidoTable.jsx
├── styles/
│   └── main.css
├── App.jsx
├── main.jsx
└── index.html
