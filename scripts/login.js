const rootStyles = document.documentElement.style

window.addEventListener('load', () => {
    const xhttp = new XMLHttpRequest()
    xhttp.open("GET", "../info/info.json", true)
    xhttp.send()
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let dato = JSON.parse(this.responseText)
            let res = document.querySelector('#nom'),
                user = document.querySelector(".user")
            res.innerHTML = ''
            res.innerHTML = dato.usuario_1.nombre_usuario
            contra = dato.usuario_1.password
            indocador = dato.usuario_1.password_indi
            user.src = `${dato.usuario_1.avatar}`
            rootStyles.setProperty('--fondo-block', `url(${dato.usuario_1.fondo_block})`)
        }
    }
});

//_________________________________________________________
function redireccionar() {
    location.href = "escritorio.html";
}

//________________________________________________________
let co = document.querySelector("#contra")
let ojo = document.querySelector("#unlock")
let bien = document.querySelector("#bien")
let mal = document.querySelector("#mal")
let paso = document.querySelector("#paso")
let indi = document.querySelector("span")
let blur = document.querySelector(".glass")

co.addEventListener("keypress", login)
ojo.addEventListener("click", unlock)

//_________________________________________________________
function unlock() {
    if (this.id == "unlock") {
        co.type = "text"
        this.id = 'lock'
        this.innerHTML = ''
        this.innerHTML = '<i class="fas fa-eye-slash"></i>'
    } else {
        co.type = "password"
        this.id = 'unlock'
        this.innerHTML = ''
        this.innerHTML = '<i class="fas fa-eye"></i>'
    }
}

function login(event) {
    if (event.keyCode == 13) {
        if (co.value == contra) {
            bien.style.display = "none"
            paso.style.display = "block"
            document.getElementById('apaga').style.display = "none"
            rootStyles.setProperty('--filtro', 'blur(0px)')
            setTimeout("redireccionar()", 3000);            
        }else{
            bien.style.display = "none"
            mal.style.display = "block"
            co.value = ''
        }
    }

    /*event.keyCode === 13 
        ? console.log(this.value)
        : null
    */
}

document.querySelector("#volver").addEventListener("click", ()=>{
    bien.style.display = "block"
    mal.style.display = "none"
    co.focus()
    indi.innerHTML = ''
    indi.innerHTML = indocador
    indi.parentElement.style.display = "block"
})