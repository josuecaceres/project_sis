window.addEventListener('load', () => {
    const xhttp = new XMLHttpRequest()
    xhttp.open("GET", "../info/info.json", true)
    xhttp.send()
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            const rootStyles = document.documentElement.style
            let dato = JSON.parse(this.responseText),
                name = document.querySelector('#name'),
                user = document.querySelector(".user")

            name.textContent = dato.usuario_1.nombre_usuario
            user.style.background = `url(${dato.usuario_1.avatar})`
            //rootStyles.setProperty('--user-img', `url(${dato.usuario_1.avatar})`)
            user.style.backgroundSize = "cover"

            rootStyles.setProperty('--fondo', `url(${dato.usuario_1.fondo})`)
            
        }
    }
});

document.getElementById('apagar').addEventListener('click', ()=>{
    location.href = "../";
})

document.getElementById('reiniciar').addEventListener('click', ()=>{
    location.href = "../Deephe_OS.html";
})

document.getElementById('c_sesion').addEventListener('click', ()=>{
    location.href = "./login.html";
})


