// isNaN = is not a number
const prompt = require ('prompt-sync')()

const digitou = prompt('informe algo: ')

if (digitou == 'true' || digitou == 'false') {
    console.log(typeof(Boolean(digitou)))
} else if (isNaN(digitou)) {
    console.log (typeof (digitou))
} else if (!isNaN (digitou)) {
    console.log (typeof (Number(digitou)))
} else {
    console.log('impossivel de identificar')
}