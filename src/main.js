import "./styles/estilos.less";

document.addEventListener("DOMContentLoaded", () => {
  const btnContacto = document.getElementById("btnContacto");

  if (btnContacto) {
    btnContacto.addEventListener("click", () => {
      alert("Gracias por contactarme. Te responderé pronto.");
      document.body.style.backgroundColor = "#eef4ff";
    });
  }
}); 