const $ = document.querySelector.bind(document)

const settingsButton = document.querySelector("#settings")

document.addEventListener("DOMContentLoaded", () => {
  settingsButton.addEventListener("click", () => {
    console.log("open settings!")
  })
})