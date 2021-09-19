const $ = document.querySelector.bind(document)

const arrowDown = document.querySelector(".arrowDown")

document.addEventListener("DOMContentLoaded", () => {
  if("serviceWorker" in navigator) {
    navigator.serviceWorker.register("../pwa/sw.js")
    console.log("Service Worker registrado com sucesso")
  } else {
    console.log("Registro de Service Worker falhou")
  }

  setInterval(() => {
    arrowDown.classList.toggle("go-down")
  }, 1200)
})