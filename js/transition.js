const links = document.querySelectorAll("a")

document.body.classList.add("fadeIn")
links.forEach(link => {
  link.addEventListener("click", event => {
    event.preventDefault()
    
    document.body.classList.remove("fadeIn")
    document.body.classList.add("fadeOut")
    window.location.href = link.href 
  })
})