const formLogin = document.getElementById("login");
const email = document.getElementById("email");
const pass = document.getElementById("password");
const parrafo = document.getElementById("warnings");


formLogin.addEventListener("submit", (e)=>{

  e.preventDefault()
    let warnings = "";
    let entrar = false;
    let regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    parrafo.innerHTML = "";
   if (!regexEmail.test(email.value)) {
    warnings += `El email no es valido <br>`
    entrar = true;
   }
   if (pass.value.length < 8) {
    warnings += `La contraseña no es valida <br>`;
    entrar = true;
   }
   if (entrar) {
    parrafo.innerHTML = warnings;
} else {

  window.location.href = "../index.html";
}

})


