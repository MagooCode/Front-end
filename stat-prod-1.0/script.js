let btn = document.getElementById("btn");
let sidebar = document.getElementsByClassName("sidebar")[0];

// btn.addEventListener("onclick",() => {
//     sidebar.classList.toggle('active');
// });

btn.onclick = function () {
    sidebar.classList.toggle('active');
};