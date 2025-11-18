// Referencias a elementos del DOM
const title = document.getElementById("card-title");
const text = document.getElementById("card-text");
const changeTextBtn = document.getElementById("change-text-btn");
const toggleThemeBtn = document.getElementById("toggle-theme-btn");

// Mensajes de ejemplo
const messages = [
  "Hola 👋",
  "Bienvenido a mi página ✨",
  "JavaScript está funcionando ✅",
  "CSS y JS conectados al HTML 😎"
];

let currentIndex = 0;

// Cambiar texto al pulsar el botón
changeTextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % messages.length;
  title.textContent = messages[currentIndex];
  text.textContent = `Mensaje número ${currentIndex + 1}. Pulsa de nuevo para cambiarlo.`;
});

// Alternar modo oscuro
toggleThemeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    toggleThemeBtn.textContent = "Modo claro";
  } else {
    toggleThemeBtn.textContent = "Modo oscuro";
  }
});
