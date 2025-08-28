const form = document.querySelector('form');
form.addEventListener('submit', function (event) {
  event.preventDefault()  
const hight =  parseInt(document.querySelector('#height').value)
const weight =  parseInt(document.querySelector('#weight').value)
const result = document.querySelector('#result')

if(hight === '' || isNaN(hight) || hight <= 0){
    results.innerHTML = 'Please provide a valid height'
}
else if (weight === '' || isNaN(weight) || weight <= 0){
    results.innerHTML = 'Please provide a valid height'
}
else {
    const bmi = (weight / ((hight * hight)/10000)).toFixed(2)
    results.innerHTML = `<span>Your BMI is ${bmi} kg/m2</span>`
    
}

})
