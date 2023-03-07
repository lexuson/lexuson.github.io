const passwordInput = document.querySelector("#password")
const eye = document.querySelector("#eye")

eye.addEventListener("click", function(){
    this.classList.toggle("fa-eye-slash")
    const type = passwordInput.getAttribute("type") === "password" ? "text" : "password"
    passwordInput.setAttribute("type", type)
  })

const passwordInput2 = document.querySelector("#password2")
const eye2 = document.querySelector("#eye2")

eye2.addEventListener("click", function(){
    this.classList.toggle("fa-eye-slash")
    const type = passwordInput2.getAttribute("type") === "password" ? "text" : "password"
    passwordInput2.setAttribute("type", type)
  })