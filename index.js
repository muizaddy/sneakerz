const bars = document.querySelector(".bar");
const lists = document.querySelector(".lists");

const xMark = document.querySelector('.x-mark')

bars.addEventListener("click", function () {
  document.querySelector('.lists').style.display = 'flex'
  document.querySelector('.lists').style.opacity = 1

  bars.style.display = 'none'
  xMark.style.display = 'flex'

});

xMark.addEventListener('click', function(){
  document.querySelector('.lists').style.display = 'none'
  document.querySelector('.lists').style.opacity = 0

  bars.style.display = 'flex'
  xMark.style.display = 'none'

})