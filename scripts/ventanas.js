let mini

const padre = document.querySelector(".grid1")
      calcs = document.querySelectorAll("#calc")
      blocks = document.querySelectorAll("#block")
      calends = document.querySelectorAll("#calend")
      serpis = document.querySelectorAll("#serpi")
      videos = document.querySelectorAll("#video")
      imgs = document.querySelectorAll("#img")

for (const calc of calcs){
  calc.addEventListener("click", ()=>{      
    document.querySelector("#calc").style.background = "rgba(255, 255, 255, .3)"
    document.querySelector(".menu_ini").style.display === "block"
      ? document.querySelector(".menu_ini").style.display = "none"
      : null
    padre.innerHTML += `
        <div id="ventana" class="draggable calc">
            <div class="head">
              <p class="text-center">Calculadora</p>
              <div class="botones">
                <button class="minin"><i class="fas fa-window-minimize"></i></button>
                <button class="close"><i class="far fa-window-close"></i></button>                
              </div>
            </div>
            <iframe src="apps/calc/calculadora.html" frameborder="0" width="309px" height='413px'></iframe>
        </div>
    `
    refresh()
  })
}

for (const block of blocks){
  block.addEventListener("click", ()=>{
    document.querySelector("#block").style.background = "rgba(255, 255, 255, .3)"
    document.querySelector(".menu_ini").style.display === "block"
        ? document.querySelector(".menu_ini").style.display = "none"
        : null
      padre.innerHTML += `
        <div id="ventana" class="draggable block">
            <div class="head">
              <p class="text-center">Bloc de Notas</p>
              <div class="botones">
                <button class="minin"><i class="fas fa-window-minimize"></i></button>
                <button class="close"><i class="far fa-window-close"></i></button>                
              </div>
            </div>
            <iframe src="apps/block/notepad.html" frameborder="0" width="327px" height="420px"></iframe>
        </div>
      `
      refresh()
  })
}

for (const calend of calends){
  calend.addEventListener("click", ()=>{
    document.querySelector("#calend").style.background = "rgba(255, 255, 255, .3)"
    document.querySelector(".menu_ini").style.display === "block"
        ? document.querySelector(".menu_ini").style.display = "none"
        : null  
    padre.innerHTML += `
      <div id="ventana" class="draggable calend">
          <div class="head">
            <p class="text-center">Calendario</p>
            <div class="botones">
              <button class="minin"><i class="fas fa-window-minimize"></i></button>
              <button class="close"><i class="far fa-window-close"></i></button>                
            </div>
          </div>
          <iframe src="apps/calendar/index.html" frameborder="0" width="840px" height="490px"></iframe>
      </div>
    `
    refresh()    
  })
}

for (const serpi of serpis){
  serpi.addEventListener("click", ()=>{
    document.querySelector("#serpi").style.background = "rgba(255, 255, 255, .3)"
    document.querySelector(".menu_ini").style.display === "block"
        ? document.querySelector(".menu_ini").style.display = "none"
        : null  
    padre.innerHTML += `
      <div id="ventana" class="draggable serpi">
          <div class="head">
            <p class="text-center">Serpiente</p>
            <div class="botones">
              <button class="minin"><i class="fas fa-window-minimize"></i></button>
              <button class="close"><i class="far fa-window-close"></i></button>                
            </div>
          </div>
          <iframe src="apps/snake/index.html" frameborder="0" width="566px" height="621px"></iframe>
      </div>
    `
    refresh()    
  })
}

for (const video of videos){
  video.addEventListener("click", ()=>{
    document.querySelector("#video").style.background = "rgba(255, 255, 255, .3)"
    document.querySelector(".menu_ini").style.display === "block"
        ? document.querySelector(".menu_ini").style.display = "none"
        : null  
    padre.innerHTML += `
      <div id="ventana_esp" class="draggable video">
          <div class="head">
            <p class="text-center">Video</p>
            <div class="botones">
              <button class="minin"><i class="fas fa-window-minimize"></i></button>
              <button class="close"><i class="far fa-window-close"></i></button>                
            </div>
          </div>
          <iframe src="apps/video/repro.html" frameborder="0" width="672px" height="373px"></iframe>
      </div>
    `
    refresh()    
  })
}

for (const img of imgs){
  img.addEventListener("click", ()=>{
    document.querySelector("#img").style.background = "rgba(255, 255, 255, .3)"
    document.querySelector(".menu_ini").style.display === "block"
        ? document.querySelector(".menu_ini").style.display = "none"
        : null
    padre.innerHTML += `
        <div id="ventana" class="draggable img">
            <div class="head">
              <p class="text-center">Imágenes</p>
              <div class="botones">
                <button class="minin"><i class="fas fa-window-minimize"></i></button>
                <button class="close"><i class="far fa-window-close"></i></button>                
              </div>
            </div>
            <iframe src="apps/visor_img/f.html" frameborder="0" width="840px" height='490px'></iframe>
        </div>
    `
    refresh()
  })
}

padre.addEventListener("click", ()=>{
  document.querySelector(".menu_ini").style.display === "block"
  ? document.querySelector(".menu_ini").style.display = "none"
  : null
})
document.querySelector("#inicio").addEventListener("click", ()=>{
    document.querySelector(".menu_ini").style.display === "block"
      ? document.querySelector(".menu_ini").style.display = "none"
      : document.querySelector(".menu_ini").style.display = "block"
})

//_________________________________________________Arrastrar ventanas
// target elements with the "draggable" class
interact('.draggable')
  .draggable({
    // enable inertial throwing
    inertia: true,
    // keep the element within the area of it's parent
    modifiers: [
      interact.modifiers.restrictRect({
        restriction: 'parent',
        endOnly: true
      })
    ],
    // enable autoScroll
    autoScroll: false,

    // call this function on every dragmove event
    onmove: dragMoveListener,
    // call this function on every dragend event
    
  })

function dragMoveListener (event) {
  var target = event.target
  // keep the dragged position in the data-x/data-y attributes
  var x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx
  var y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy

  // translate the element
  target.style.webkitTransform =
    target.style.transform =
      'translate(' + x + 'px, ' + y + 'px)'

  // update the posiion attributes
  target.setAttribute('data-x', x)
  target.setAttribute('data-y', y)
}

// this is used later in the resizing and gesture demos
window.dragMoveListener = dragMoveListener


