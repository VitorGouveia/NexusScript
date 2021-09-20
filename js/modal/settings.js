import { Theme } from "../theme/theme.js"

const theme = new Theme("dark")

const settingsButton = document.querySelector("#settings")
const settingsModal = document.querySelector(".settings-modal")
const settingsModalCancel = document.querySelector('.settings-modal button[data-action="cancel"]')
const settingsModalConfirm = document.querySelector('.settings-modal button[data-action="confirm"]')
const settingsModalSelect = document.querySelector('.settings-modal select')

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