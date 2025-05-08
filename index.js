/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
const inputel = document.getElementById("input")
const convertBtn = document.getElementById("convert-btn")
let inputValue = null
let feet = null
let meters = null
let gallons = null
let liters = null
let pounds = null
let kilos = null
const lengthP = document.getElementById("length-p")
const volumeP = document.getElementById("volume-p")
const massP = document.getElementById("mass-p")


convertBtn.addEventListener("click", function(){
    inputValue= Number(inputel.value)
    feet= feetCalc(inputValue).toFixed(3)
    meters= meterCalc(inputValue).toFixed(3)

    gallons= gallonsCalc(inputValue).toFixed(3)
    liters= litersCalc(inputValue).toFixed(3)

    pounds= poundsCalc(inputValue).toFixed(3)
    kilos = kilosCalc(inputValue).toFixed(3)
    lengthP.textContent =
    `${inputValue} meters = ${feet} feet | ${inputValue} feet = ${meters} meters`
    volumeP.textContent =
    `${inputValue} liters = ${gallons} gallons | ${inputValue} gallons = ${liters} liters`
    massP.textContent =
    `${inputValue} kilos = ${pounds} pounds | ${inputValue} pounds = ${kilos} kilos`
})

function feetCalc(meter){
    return meter*3.281
}
function meterCalc(feet){
    return feet/3.281
}


function gallonsCalc(liters){
    return liters* 0.264
}
function litersCalc(gallons){
    return gallons/ 0.264
}


function poundsCalc(kilos){
    return kilos* 2.204
}
function kilosCalc(pounds){
    return pounds/ 2.204
}
