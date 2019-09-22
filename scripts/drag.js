window.addEventListener('load', refresh())

let apps = {
  "calc" : {
      "id" : "#calc",
      "class" : "calc",
      "titulo" : "Calculadora",
      "location" : "apps/calc/calculadora.html",
      "ancho" : "309px",
      "alto" : "413px",
      "tipo" : "ventana"
  },
  "block" : {
      "id" : "#block",
      "class" : "block",
      "titulo" : "Block de Notas",
      "location" : "apps/block/notepad.html",
      "ancho" : "327px",
      "alto" : "420px",
      "tipo" : "ventana"
  },
  "calend" : {
      "id" : "#calend",
      "class" : "calend",
      "titulo" : "Calendario",
      "location" : "apps/calendar/index.html",
      "ancho" : "840px",
      "alto" : "490px",
      "tipo" : "ventana"
  },
  "serpi" : {
      "id" : "#serpi",
      "class" : "serpi",
      "titulo" : "Sepiente",
      "location" : "apps/snake/index.html",
      "ancho" : "566px",
      "alto" : "621px",
      "tipo" : "ventana"
  },
  "video" : {
      "id" : "#video",
      "class" : "video",
      "titulo" : "Video",
      "location" : "apps/video/video.html",
      "ancho" : "672px",
      "alto" : "373px",
      "tipo" : "ventana_esp"
  },
  "img" : {
      "id" : "#img",
      "class" : "img",
      "titulo" : "Imágenes",
      "location" : "apps/visor_img/v_img.html",
      "ancho" : "600px",
      "alto" : "475px",
      "tipo" : "ventana_esp"
  },
  "map" : {
      "id" : "#map",
      "class" : "map",
      "titulo" : "Mapas",
      "location" : "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d123638.74745629544!2d-87.73405126083897!3d14.443819659197239!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f65858c03782075%3A0xccf55efc5483df81!2sComayagua!5e0!3m2!1ses-419!2shn!4v1567317018828!5m2!1ses-419!2shn",
      "ancho" : "600",
      "alto" : "450",
      "tipo" : "ventana_esp"
  },
  "paint" : {
      "id" : "#paint",
      "class" : "paint",
      "titulo" : "Paint",
      "location" : "apps/paint/",
      "ancho" : "620px",
      "alto" : "530px",
      "tipo" : "ventana"
  },
  "word" : {
      "id" : "#word",
      "class" : "word",
      "titulo" : "Wordpad",
      "location" : "apps/worpad/editor.html",
      "ancho" : "750px",
      "alto" : "530px",
      "tipo" : "ventana_esp"
  },
  "pdf" : {
      "id" : "#pdf",
      "class" : "pdf",
      "titulo" : "Visor PDF",
      "location" : "apps/pdf/v_pdf.html",
      "ancho" : "600px",
      "alto" : "475px",
      "tipo" : "ventana_esp"
  },
  "files" : {
      "id" : "#files",
      "class" : "files",
      "titulo" : "Archivos",
      "location" : "apps/files/files2.php?nomdir=",
      "ancho" : "840px",
      "alto" : "484px",
      "tipo" : "ventana_esp"
  },
  "music" : {
      "id" : "#music",
      "class" : "music",
      "titulo" : "Música",
      "location" : "http://localhost:8080/",
      "ancho" : "750px",
      "alto" : "530px",
      "tipo" : "ventana_esp"
  },
  "config" : {
      "id" : "#config",
      "class" : "config",
      "titulo" : "Configuración",
      "location" : "apps/config/config.html",
      "ancho" : "566px",
      "alto" : "621px",
      "tipo" : "ventana"
  }
}
var dad

function refresh(){
  const calc = document.querySelector("#calc"),
        block = document.querySelector("#block"),
        calend = document.querySelector("#calend"),
        serpi = document.querySelector("#serpi"),
        video = document.querySelector("#video"),
        img = document.querySelector("#img"),
        map = document.querySelector("#map"),
        paint = document.querySelector("#paint"),
        word = document.querySelector("#word"),
        pdf = document.querySelector("#pdf"),
        files = document.querySelector("#files"),
        carpetas = document.querySelector(".carpetas"),
        music = document.querySelector("#music"),
        config = document.querySelector("#config")
  
  calc.addEventListener("click", generarVentana)

  block.addEventListener("click", generarVentana)
 
  calend.addEventListener("click", generarVentana)

  serpi.addEventListener("click", generarVentana)

  video.addEventListener("click", generarVentana)

  img.addEventListener("click", generarVentana)

  map.addEventListener("click", generarVentana)

  paint.addEventListener("click", generarVentana)

  word.addEventListener("click", generarVentana)

  pdf.addEventListener("click", generarVentana)

  files.addEventListener("click", generarVentana)

  carpetas.addEventListener("click", abrirCarpeta)

  music.addEventListener("click", generarVentana)

  config.addEventListener("click", generarVentana)

  //___________________________________________________iconos________________________________
  const filles = document.querySelectorAll('.fill')
  const empties = document.querySelectorAll('.empty')
  
  // todos los objetos arrastrables (iconos)
  for (const fill of filles) {
    fill.addEventListener('dragstart', dragStart)
    fill.addEventListener('dragend', dragEnd)
  }
  // todas las casillas vacias
  for (const empty of empties) {
    empty.addEventListener('dragover', dragOver)
    empty.addEventListener('dragenter', dragEnter)
    empty.addEventListener('dragleave', dragLeave)
    empty.addEventListener('drop', dragDrop)
  }

  //______Botones de ventanas________________________________________________________________
  const minins = document.querySelectorAll(".minin")
  const closes = document.querySelectorAll(".close")

  for (minin of minins){
    minin.addEventListener("click", minifi)
  }
  for (close of closes){
    close.addEventListener("click", ()=>{
      switch (close.parentElement.parentElement.parentElement.className) {
        case "draggable calc":
          calc.style.background = "none"
          break;
        case "draggable block":
          block.style.background = "none"
          break;
        case "draggable calend":
          calend.style.background = "none"
          break;
        case "draggable serpi":
          serpi.style.background = "none"
          break;
        case "draggable video":
          video.style.background = "none"
          break;
        case "draggable img":
          img.style.background = "none"
          break;
        case "draggable map":
          map.style.background = "none"
          break;
        case "draggable paint":
          paint.style.background = "none"
        case "draggable word":
          word.style.background = "none"
        case "draggable pdf":
          pdf.style.background = "none"
          break;
        case "draggable files":
          files.style.background = "none"        
          break;
        case "draggable music":
          music.style.background = "none"        
          break;
        case "draggable config":
          music.style.background = "none"        
          break;
        default:
        break;
      }      
      close.parentElement.parentElement.parentElement.remove()
      refresh()
    })
  }
}
//__________________________________________________________________________FUNCIONES XD
function abrirCarpeta(e){
  const t = e.target,
        d = t.dataset
  document.querySelector(`${apps.files.id}`).style.background = "rgba(255, 255, 255, .3)"
  document.querySelector(".menu_ini").style.display === "block"
    ? document.querySelector(".menu_ini").style.display = "none"
    : null
  padre.innerHTML += `
    <div id="${apps.files.tipo}" class="draggable ${apps.files.class}">
      <div class="head">
        <p class="text-center">${apps.files.titulo}</p>
        <div class="botones">
        <button class="minin"><i class="fas fa-window-minimize"></i></button>
        <button class="close"><i class="far fa-window-close"></i></button>            
        </div>
      </div>
      <iframe src="${apps.files.location}.%2F..%2F..%2F..%2F..%2F..%2F..%2FUsers%2FJosu%C3%A8+C%C3%A0ceres%2F${d.link}" frameborder="0" width="${apps.files.ancho}" height='${apps.files.alto}'></iframe>
    </div>
  `
  refresh()
}

function generarVentana(e){
  const appli = e.target.id
  //console.log(apps[appli].id)
  console.log(e.target)
  console.log(this.parentElement.parentElement.className)
  apps[appli].id === '#config'
    ? null
    : document.querySelector(`${apps[appli].id}`).style.background = "rgba(255, 255, 255, .3)"  
  document.querySelector(".menu_ini").style.display === "block"
    ? document.querySelector(".menu_ini").style.display = "none"
    : null
  padre.innerHTML += `
    <div id="${apps[appli].tipo}" class="draggable ${apps[appli].class}">
      <div class="head">
        <p class="text-center">${apps[appli].titulo}</p>
        <div class="botones">
        <button class="minin"><i class="fas fa-window-minimize"></i></button>
        <button class="close"><i class="far fa-window-close"></i></button>            
        </div>
      </div>
      <iframe src="${apps[appli].location}" frameborder="0" width="${apps[appli].ancho}" height='${apps[appli].alto}'></iframe>
    </div>
  `
  refresh()
}

function minifi(){
  this.parentElement.parentElement.parentElement.style.display = "none"
  refresh()
}
// Drag Functions____________________________________________________________
function dragStart() {
  this.style.background = ''
  this.parentElement.parentElement.className === 'prg-s'
    ? dad = this.cloneNode(true)
    : dad = this
}

function dragEnd() {
  this.className = 'fill'
}

function dragOver(e) {
  e.preventDefault()
}

function dragEnter(e) {
  e.preventDefault()
  this.className += ' hovered'
}

function dragLeave() {
  this.className = 'empty'
}

function dragDrop() {
  this.className = 'empty'
  this.append(dad)
  refresh()
}

