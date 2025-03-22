// generate a random hexcode for randomised background
const randomColor = function () {
  const hex = '0123456789ABCDEF';
  let res = ['#'];
  for (let i = 0; i < 6; i++) {
    let idx = Math.floor(Math.random() * hex.length);
    res.push(hex[idx]);
  }
  return res.join('');
};

let intervalId = null;

// changing the background color when start is pressed
document.getElementById('start').addEventListener('click', () => {
  if (!intervalId) {
    intervalId = setInterval(() => {
      document.querySelector('body').style.backgroundColor = randomColor();
    }, 1000);
  }
});

// stoppinf the process of changing color
document.getElementById('stop').addEventListener('click',() => {
  if(intervalId){
    clearInterval(intervalId);
    intervalId = null;
  }
})