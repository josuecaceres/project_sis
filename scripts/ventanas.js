
const padre = document.querySelector(".grid1")


document.querySelector("#calc").addEventListener("click", ()=>{
    //let dest = document.getElementsByClassName("empty")[Math.floor(Math.random()*90)]
    //dest.style.background = "rgba(147, 71, 177, 0.445)"
    document.querySelector("#calc").style.background = "rgba(255, 255, 255, .3)"
    padre.innerHTML += `
        <div id="ventana" class="draggable">
            <div class="head">
              <p class="text-center">Calculadora</p>
              <div class="botones">
                <button data-operation="minin"><i class="fas fa-window-minimize"></i></button>
                <button data-operation="close"><i class="far fa-window-close"></i></button>                
              </div>
            </div>
            <iframe src="apps/calc/calculadora.html" frameborder="0" width="309px" height='413px'></iframe>
        </div>
    `
    refresh()
})

document.querySelector("#block").addEventListener("click", ()=>{
  document.querySelector("#block").style.background = "rgba(255, 255, 255, .3)"
    padre.innerHTML += `
      <div id="ventana" class="draggable">
          <div class="head">
            <p class="text-center">Bloc de Notas</p>
            <div class="botones">
              <button data-operation="minin"><i class="fas fa-window-minimize"></i></button>
              <button data-operation="close"><i class="far fa-window-close"></i></button>                
            </div>
          </div>
          <iframe src="apps/block/notepad.html" frameborder="0" width="327px" height="420px"></iframe>
      </div>
    `
    refresh()
})

document.querySelector("#calend").addEventListener("click", ()=>{
  document.querySelector("#calend").style.background = "rgba(255, 255, 255, .3)"  
  padre.innerHTML += `
    <div id="ventana" class="draggable">
        <div class="head">
          <p class="text-center">Calendario</p>
          <div class="botones">
            <button data-operation="minin"><i class="fas fa-window-minimize"></i></button>
            <button data-operation="close"><i class="far fa-window-close"></i></button>                
          </div>
        </div>
        <iframe src="apps/calendar/index.html" frameborder="0" width="840px" height="490px"></iframe>
    </div>
  `
  refresh()    
})

document.querySelector("#serpi").addEventListener("click", ()=>{
  document.querySelector("#serpi").style.background = "rgba(255, 255, 255, .3)"  
  padre.innerHTML += `
    <div id="ventana" class="draggable">
        <div class="head">
          <p class="text-center">Serpiente</p>
          <div class="botones">
            <button data-operation="minin"><i class="fas fa-window-minimize"></i></button>
            <button data-operation="close"><i class="far fa-window-close"></i></button>                
          </div>
        </div>
        <iframe src="apps/snake/index.html" frameborder="0" width="566px" height="621px"></iframe>
    </div>
  `
  refresh()    
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


//_________________________________________________Botones de ventanas
