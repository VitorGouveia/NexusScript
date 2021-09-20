const cardModalButton = document.querySelector("#newCard")
const cardModal = document.querySelector(".card-modal")
const cardModalCancel = document.querySelector('.card-modal button[data-action="cancel"]')
const cardModalConfirm = document.querySelector('.card-modal button[data-action="confirm"]')
const cardModalForm = document.querySelector(".card-modal form")

const showModal = () => {
  cardModal.classList.remove("popOut")
  cardModal.classList.add("popIn")
  cardModal.classList.add("active")
}

const hideModal = () => {
  cardModal.classList.add("popOut")
  cardModal.classList.remove("popIn")
  cardModal.classList.remove("active")
}

const createCard = ({
  name,
  password
}) => {
  console.log([name, password])
}

document.addEventListener("DOMContentLoaded", () => {
  cardModalButton.addEventListener("click", () => showModal())

  cardModalCancel.addEventListener("click", () => hideModal())

  cardModalForm.addEventListener("submit", event => {
    event.preventDefault()

    const name = event.target[0].value
    const password = event.target[1].value

    createCard({ name, password })
  })

  cardModalConfirm.addEventListener("click", () => hideModal())
})