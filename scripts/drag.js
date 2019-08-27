refresh()

function refresh(){
  const filles = document.querySelectorAll('.fill')
  const empties = document.querySelectorAll('.empty')
  const ventanas = document.querySelectorAll('.ventana')
  

  let dad
  // todos los objetos arrastrables (iconos)
  for (const fill of filles) {
    fill.addEventListener('dragstart', dragStart)
    fill.addEventListener('dragend', dragEnd)

    if (fill.parentElement.parentElement.className == 'content'){
      fill.setAttribute("data-toggle", "tooltip");
    }else{
      fill.setAttribute("data-toggle", "tooltipe");
    }
  }
  // todos los objetos arrastrables (ventanas)
  for (const ventana of ventanas) {
    ventana.addEventListener('dragstart', dragStart)
    ventana.addEventListener('dragend', dragEnd)
  }
    
  // todas las casillas vacias
  for (const empty of empties) {
    empty.addEventListener('dragover', dragOver)
    empty.addEventListener('dragenter', dragEnter)
    empty.addEventListener('dragleave', dragLeave)
    empty.addEventListener('drop', dragDrop)
  }

}


// Drag Functions

function dragStart() {
  //setTimeout(() => (this.className = 'invisible'), 0)
  this.style.background = ''
  dad = this
  console.log(dad.parentElement.parentElement.className)
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
  if (dad.parentElement.parentElement.className == 'content'){
    dad.setAttribute("data-toggle", "tooltipe");
    this.append(dad)
    refresh()
  }else{
    dad.setAttribute("data-toggle", "tooltip");
    this.append(dad)
    refresh()
  }
}