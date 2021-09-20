const $ = document.querySelector.bind(document)

const settingsButton = document.querySelector("#settings")
const settingsModal = document.querySelector(".settings-modal")
const settingsModalCancel = document.querySelector('.settings-modal button[data-action="cancel"]')
const settingsModalConfirm = document.querySelector('.settings-modal button[data-action="confirm"]')

document.addEventListener("DOMContentLoaded", () => {
  settingsButton.addEventListener("click", () => {
    console.log("open settings!")

    settingsModal.classList.remove("popOut")
    settingsModal.classList.add("popIn")
    settingsModal.classList.add("active")
  })

  settingsModalCancel.addEventListener("click", () => {
    settingsModal.classList.add("popOut")
    settingsModal.classList.remove("popIn")
    settingsModal.classList.remove("active")
  })
})