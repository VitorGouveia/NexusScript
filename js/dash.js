import { Theme } from "./theme.js"

const theme = new Theme("dark")
console.log(theme)
const $ = document.querySelector.bind(document)

const settingsButton = $("#settings")
const settingsModal = $(".settings-modal")
const settingsModalCancel = $('.settings-modal button[data-action="cancel"]')
const settingsModalConfirm = $('.settings-modal button[data-action="confirm"]')
const settingsModalSelect = $('.settings-modal select')

const showModal = () => {
  settingsModal.classList.remove("popOut")
  settingsModal.classList.add("popIn")
  settingsModal.classList.add("active")
}

const hideModal = () => {
  settingsModal.classList.add("popOut")
  settingsModal.classList.remove("popIn")
  settingsModal.classList.remove("active")
}

document.addEventListener("DOMContentLoaded", () => {
  settingsButton.addEventListener("click", () => showModal())
  
  settingsModalCancel.addEventListener("click", () => hideModal())
  
  settingsModalConfirm.addEventListener("click", () => {
    /* get the selected theme */
    const selectedTheme = settingsModalSelect.selectedIndex

    const themes = ["light", "dark", "contrast"]

    theme.setTheme(themes[selectedTheme])
    
    hideModal()
  })
})