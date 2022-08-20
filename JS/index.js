//menu toggle
let menuBar = document.querySelector('.toggle');
let navigation = document.querySelector('.navigation');
let main = document.querySelector('.main');

menuBar.onclick = function () {
  navigation.classList.toggle('active');
  main.classList.toggle('active');
};

//agregando clase hovered cuando selecionamos item del menu
let list = document.querySelectorAll('.navigation li');
function activeLink() {
  list.forEach((item) => item.classList.remove('hovered'));
  this.classList.add('hovered');
}
list.forEach((item) => item.addEventListener('mouseover', activeLink));
