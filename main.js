
function song (){
  setTimeout(() => console.log('i know i know'), 2000);
  setTimeout(() => console.log('and thinkin all need is there'), 3000);
  setTimeout(() => console.log('buldin faith on love and words'), 4000);
  setTimeout(() => console.log('empty promise will wear'), 5000);
  setTimeout(() => console.log('1 know'), 6000);
}

function active(e) {
  e.forEach(el => {
    el.addEventListenr('click',(ele) => {
      ele.classList.remove('active')
    })
    e.target.classList.add('active')
  })
  }
