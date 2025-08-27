const form = document.querySelector('form');
form.addEventListener('submit', function (event) {
  event.preventDefault()  
const hight =  parseInt(document.querySelector('#height').value)
const weight =  parseInt(document.querySelector('#weight').value)
const result = document.querySelector('#result')

if(hight === '' || isNaN(hight) || hight <= 0){
    result.innerHTML = 'Please provide a valid height'
}
else if (hight === '' || isNaN(weight) || hight <= 0){
    result.innerHTML = 'Please provide a valid height'
}
else {
    const bmi = (weight / ((hight * hight)/10000)).toFixed(2)
    results.innerHTML = `<span>Your BMI is ${bmi} kg/m2</span>`
    
}

})
