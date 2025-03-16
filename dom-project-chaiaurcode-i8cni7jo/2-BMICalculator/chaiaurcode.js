const form = document.querySelector('form')
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const height = parseFloat(document.querySelector('#height').value)
  const weight = parseFloat(document.querySelector('#weight').value)
  const results = document.querySelector('#results');
  if(height === '' || height < 0 || isNaN(height)){
    results.innerHTML = `Please give a valid Height ${height}`
  }else if(weight === '' || weight < 0 || isNaN(weight)){
    results.innerHTML = `Please give a valid Weight ${weight}`
  }else{
    const bmi = (weight / ((height * height)/10000)).toFixed(2)
    // show the result
    results.innerHTML = `<span>${bmi}</span>`
    const message = document.createElement('p');
    if(bmi < 18.6){
      message.innerHTML = `you are underweight`;
    }else if(bmi > 24.9){
      message.innerHTML = `you are overweight`;
    }else{
      message.innerHTML = `you are in great shape`;
    }
    results.appendChild(message)
  }
  
})