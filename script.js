const calculatorScreen = document.querySelector('.calculator-screen')

const updateScreen = (number) => {
    calculatorScreen.value = number
}

const numbers = document.querySelectorAll(".number") //--------------------------------mengambil element button pada HTML
    //console.log(numbers)

numbers.forEach((number) => {
    //console.log(number)
    number.addEventListener("click", () => {
        updateScreen(event.target.value) //--------------------------lalu update screen akan dijalankan ketika tombol di click
    })
})

//---------------------------------------menyimpan angka untuk melakukan kalkulasi

let prevNumber = ''
let calculationOperator = ''
let currentNumber = '0'

const inputNumber = (number) => {
    if (currentNumber === '0') {
        currentNumber = number
    } else {
        currentNumber += number //-------------------------------------agar number yang ditampilkan bisa lebih dari 1
    }
}

numbers.forEach((number) => {
    number.addEventListener("click", (event) => {
        inputNumber(event.target.value)
        updateScreen(currentNumber)
    })
})

//-------------------------untuk operator
const operators = document.querySelectorAll(".operator")

operators.forEach((operator) => {
    operator.addEventListener("click", (event) => {
        inputOperator(event.target.value)
    })
})

const inputOperator = (operator) => {
        if (calculationOperator === '') {
            prevNumber = currentNumber
        }
        calculationOperator = operator
        currentNumber = '0'
    }
    //-------------------------equal sign
const equalSign = document.querySelector('.equal-sign')

equalSign.addEventListener('click', () => {
    calculate()
        //console.log('equal button is pressed')
    updateScreen(currentNumber)
})

const calculate = () => {
    let result = ''
    switch (calculationOperator) {
        case '+':
            result = parseFloat(prevNumber) + parseFloat(currentNumber)
            break
        case '-':
            result = parseFloat(prevNumber) - parseFloat(currentNumber)
            break
        case '*':
            result = parseFloat(prevNumber) * parseFloat(currentNumber)
            break
        case '/':
            result = parseFloat(prevNumber) / parseFloat(currentNumber)
            break
        default:
            break
    }
    currentNumber = result
    calculationOperator = ''
}

//----------------------------------clear button
const clearBtn = document.querySelector('.all-clear')

clearBtn.addEventListener('click', () => {
    clearAll()
        //console.log('AC button is pressed')
    updateScreen(currentNumber)
})

const clearAll = () => {
    prevNumber = ''
    calculationOperator = ''
    currentNumber = '0'
}

//--------------------------------untuk operasi angka decimal
const decimal = document.querySelector(".decimal")

decimal.addEventListener("click", (event) => {
    //console.log("button pressed")
    inputDecimal(event.target.value)
    updateScreen(currentNumber)
})

inputDecimal = (dot) => {
    if (currentNumber.includes('.')) {
        return
    }
    currentNumber += dot
}

//----------------------------------------------untuk operasi percentage
inputPercentage = () => {
    if (currentNumber.includes('%')) {
        return
    }
    currentNumber = currentNumber / 100
}
const percentage = document.querySelector('.percentage')

percentage.addEventListener('click', (event) => {
    inputPercentage(event.target.value)
    updateScreen(currentNumber)
})
