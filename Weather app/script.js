let text = document.getElementById('text');
let leaf = document.getElementById('leaf');
let hill1 = document.getElementById('hill1');
let hill4 = document.getElementById('hill4');
let hill5 = document.getElementById('hill5');

window.addEventListener('scroll', () => {
    let value = window.scrollY;

    text.style.marginTop = value  * 2.5 + 'px';
    leaf.style.top = value * -1.5 + 'px';
    leaf.style.left = value * 1.5 + 'px';
    hill5.style.left = value * 1.5 + 'px';
    hill4.style.left = value * -1.5 + 'px';
    hill1.style.top = value * 1 + 'px';
});

// navitems = document.getElementsByClassName('navitem');

// for (let index = 0; index < navitems.length; index++) {
//     navitem = document.getElementsByClassName('navitem')[i];
// }

// navitem.onclick = function () {
//     navitem.classList.toggle('acvtive');
// };

// navitem.onclick = function () {
//     navitem.classList.toggle('active');
// };



// sidebar = document.getElementsByClassName("sidebar")[0];
// btn = document.getElementById("btn");

// btn.onclick = function () {
//     sidebar.classList.toggle('active');
// };