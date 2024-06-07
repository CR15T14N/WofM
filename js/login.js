const formLogin = document.getElementById("login");
const email = document.getElementById("email");
const pass = document.getElementById("password");
const parrafo = document.getElementById("warnings");


formLogin.addEventListener("submit", (e)=>{

  e.preventDefault()
    let warnings = "";
    let entrar = false;
    let regexEmail = /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gim;
    //let regexPassword = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
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


// estilos para los divs, con el efecto blur

const imgDivBox = document.getElementById("imgDivBox");
const formBox = document.getElementsById("formBox");

function handleHover(id) {
  let otherId = id === 'imgDivBox' ? 'formBox' : 'imgDivBox';
  document.getElementById(otherId).classList.add('blur');
}

function handleMouseOut(id) {
  let otherId = id === 'imgDivBox' ? 'formBox' : 'imgDivBox';
  document.getElementById(otherId).classList.remove('blur');
}
