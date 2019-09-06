refresh()

let dad
function refresh(){
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

  //______Botones de ventanas
  const minins = document.querySelectorAll(".minin")
  const closes = document.querySelectorAll(".close")

  for (minin of minins){
    minin.addEventListener("click", ()=>{
      minin.parentElement.parentElement.parentElement.style.display = "none"
    })
  }
  
  for (close of closes){
    close.addEventListener("click", ()=>{
      switch (close.parentElement.parentElement.parentElement.className) {
        case "draggable calc":
          document.querySelector("#calc").style.background = "none"
          break;
        case "draggable block":
          document.querySelector("#block").style.background = "none"
          break;
        case "draggable calend":
          document.querySelector("#calend").style.background = "none"
          break;
        case "draggable serpi":
          document.querySelector("#serpi").style.background = "none"
          break;
        case "draggable video":
          document.querySelector("#video").style.background = "none"
          break;
        case "draggable img":
          document.querySelector("#img").style.background = "none"
          break;
        default:
          break;
      }
      close.parentElement.parentElement.parentElement.remove()
    })
  }
}


// Drag Functions

function dragStart() {
  //setTimeout(() => (this.className = 'invisible'), 0)
  this.style.background = ''
  dad = this
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
  if(dad.parentElement.parentElement.className == "prg-s"){
    this.className = 'empty'
    
    this.append(dad)
    refresh()
  }else{
    this.className = 'empty'
    this.append(dad)
    refresh()
  }
}
