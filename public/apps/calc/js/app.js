const screen = document.getElementById('calculator_screen'),
    keys = document.getElementById('calculator_keys')

let operationStatus = false,
    n1, typeOperation

screen.textContent = '0'

keys.addEventListener('click', e => {
    const t = e.target,
        d = t.dataset
    if (d.number) writeScreen(d.number)
    if (d.math) getOperation(t,d.math)
    if (d.operation) runOperation(d.operation)
})

//funcion para escribir en pantala
writeScreen = number => {
    screen.textContent === '0' || operationStatus === true
        ? screen.textContent = number 
        : number === '.' && !screen.textContent.includes('.')
            ? screen.textContent += number
            : number !== '.'
                ? screen.textContent += number
                : null

    operationStatus = false
}

//funcion para obtener operacion
getOperation = (element,operation) => {
    operationStatus = true
    n1 = Number(screen.textContent)
    typeOperation = operation
    screen.textContent = element.textContent
}

//funcion para correr operacion
runOperation = operacion => {
    getresult = (n1, typeOperation) => {
        let n2 = Number(screen.textContent),
            result
        switch (typeOperation) {
            case 'add':
                result = n1 + n2
                break
            case 'minus':
                result = n1 - n2
                break
            case 'multiply':
                result = n1 * n2
                break
            case 'divide':
                result = n1 / n2
                break
            default:
                break;
        }
        result === Infinity
            ? screen.textContent = 'Error'
            : screen.textContent = result
    }
    operacion === 'clear'
        ? screen.textContent = '0'
        : getresult(n1,typeOperation)

    operationStatus = true
}
                    