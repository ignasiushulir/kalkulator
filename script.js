const calculatorScreen = document.querySelector('.calculator-screen')

const updateScreen = (number) =>{
    calculatorScreen.value=number
    
}

const numbers = document.querySelectorAll(".number")

numbers.forEach((number)=>{
    number.addEventListener("click", (event)=>{
        inputNumber(event.target.value)
        updateScreen(currentNumber)
       
    })
   
})

let prevNumber = ''
let calculatorOperator =''
let currentNumber ='0'

const inputNumber = (number)=>{
    if (currentNumber === '0'){
        currentNumber = number
    }else{
        currentNumber += number
    }
}

const operators = document.querySelectorAll(".operator")

operators.forEach((operator)=>{
    operator.addEventListener("click" , (event)=>{
        inputOperator(event.target.value)
    })
})

const inputOperator = (operator)=>{
    if (calculatorOperator === ''){
        prevNumber = currentNumber
    }
    calculatorOperator = operator
    currentNumber = ''
}

const equalSign = document.querySelector('.equal-sign')

equalSign.addEventListener('click' , ()=>{
    calculate()
    updateScreen(currentNumber)
})

const calculate = ()=>{
let result=''
switch(calculatorOperator){
    case "+":
        result = parseFloat(prevNumber) + parseFloat(currentNumber)
        break
    case "-":
        result = prevNumber - currentNumber
        break
    case "*":
        result = prevNumber * currentNumber
        break
    case "/":
        result = prevNumber / currentNumber
        break
    default:
        break
}
currentNumber = result
calculatorOperator = ''
}

const clearBtn = document.querySelector('.all-clear')

clearBtn.addEventListener('click', ()=>{
    clearAll()
    updateScreen(currentNumber)
})

const clearAll = ()=>{
    prevNumber = ''
    calculatorOperator = ''
    currentNumber = '0'
}

const decimal = document.querySelector('.decimal')

decimal.addEventListener('click', (event)=>{
    inputDecimal(event.target.value)
    updateScreen(currentNumber)
})

const inputDecimal = (dot)=>{
    if(currentNumber.includes('.')){
        return
    }
    currentNumber += dot
}

const percentBtn = document.querySelector('.percentage')

percentBtn.addEventListener('click' , ()=>{
    percentage()
    updateScreen(currentNumber)
    
})

const percentage =()=>{
   let persen =''
    persen = currentNumber / '100'

    currentNumber = persen
}
