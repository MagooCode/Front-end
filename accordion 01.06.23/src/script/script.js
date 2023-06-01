btn1 = document.getElementById('btn1');
btn2 = document.getElementById('btn2');
btn3 = document.getElementById('btn3');
btn4 = document.getElementById('btn4');
btn5 = document.getElementById('btn5');

item_content1 = document.getElementsByClassName("item_content")[0];
item_content2 = document.getElementsByClassName("item_content")[1];
item_content3 = document.getElementsByClassName("item_content")[2];
item_content4 = document.getElementsByClassName("item_content")[3];
item_content5 = document.getElementsByClassName("item_content")[4];

btn1.onclick = function () {
    item_content1.classList.toggle('active');
};

btn2.onclick = function () {
    item_content2.classList.toggle('active');
};

btn3.onclick = function () {
    item_content3.classList.toggle('active');
};

btn4.onclick = function () {
    item_content4.classList.toggle('active');
};
btn5.onclick = function () {
    item_content5.classList.toggle('active');
};





// sidebar = document.getElementsByClassName("sidebar")[0];
// btn = document.getElementById("btn");

// btn.onclick = function () {
//     sidebar.classList.toggle('active');
// };