const fruitInput = document.getElementById('fruit-input');
const addBtn = document.getElementById('add-btn');
const cardsContainer = document.getElementById('cards-container');
const countBtn = document.getElementById('count-btn');
const toggleBtn = document.getElementById('toggle-btn');
let fruits = [];

addBtn.addEventListener('click', () => {
    const fruitName = fruitInput.value.trim();
    if (fruitName !== '') {
        fruits.push(fruitName);
        fruitInput.value = '';
        addFruitCard(fruitName);
    }
});

countBtn.addEventListener('click', () => {
    alert(`Total fruits: ${fruits.length}`);
});

toggleBtn.addEventListener('click', () => {
    if (cardsContainer.style.display === 'none') {
        showFruitCards();
    } else {
        hideFruitCards();
    }
});

function addFruitCard(fruitName) {
    const card = document.createElement('div');
    card.className = 'fruit-card';
    card.textContent = fruitName;
    cardsContainer.appendChild(card);
}

function showFruitCards() {
    cardsContainer.style.display = 'block';
}

function hideFruitCards() {
    cardsContainer.style.display = 'none';
}
// let content = document.getElementsByClassName("card_list")[0];
// let visibleBtn = document.getElementsByClassName("visible")[0];
// let unvisibleBtn = document.getElementsByClassName("unvisible")[0];
// let addBtn = document.getElementsByClassName("add_btn")[0];
// const fruitInput = document.getElementById('fruit_input');

// let arr = [];
// let currentItemArr = [];
// // let checkcount = arr.length;
// let checkcount = 0;

// let emptyDiv = document.createElement("li");
// emptyDiv.setAttribute("class","emptycontent");
// emptyDiv.innerHTML = "list is empty";

// if (content.children.length === 0 && currentItemArr.length === 0) {
    
//     setTimeout(() => {
//         content.appendChild(emptyDiv);
//     }, 1000);
// }

// addBtn.addEventListener("click", () => {
//     const fruitName = fruitInput.value.trim();
//     if (fruitName !== '') {
//         arr.push(fruitName);
//         fruitInput.value = '';
//         let temp = arr.shift(arr.length - 1);
//         currentItemArr.push(temp);
//         console.log(currentItemArr);
//         // addFruitCard(fruitName);
//     }
// })

// addBtn.addEventListener("click", () => {
//     if (checkcount.length === 0) {
//         content.appendChild(emptyDiv);
//     }
//     else if (currentItemArr.length >= 0) {
//         // let temp = arr.shift(arr.length - 1);
//         // currentItemArr.push(temp);

//         setTimeout(() => {
//             content.removeChild(emptyDiv);
//         }, 1);
//         console.log(currentItemArr);

//         let contentInner = document.createElement("li");
//         contentInner.setAttribute("class","contentInner");
//         content.appendChild(contentInner);
//         currentItemArr.map((item) => {
//             contentInner.innerHTML = `
//             <div>
//                 ${item}
//             </div>
//             <div class="TickEx">
//                 <p class="tick"></p>
//                 <p class="ex"></p>
//             </div>
//             `;
//         });
//         checkcount--;
//     }
//     else if (currentItemArr.length === 7) {
//         alert("fruit list is full");
//     }
//     else {
//         console.log("invalid input");
//     }
    
    
// });

// let exBtn = document.getElementsByClassName("ex")[0];

// exBtn.addEventListener("click", () => {
//     if (currentItemArr.length === 0)
//     {
//         content.appendChild(emptyDiv);
//         alert("fruit list is empty");
//     }
//     else if (currentItemArr.length > 0) {
//         let removedItem = currentItemArr[currentItemArr.length - 1];
//         currentItemArr.pop();
//         arr.push(removedItem);
//         checkcount++;
//         console.log(currentItemArr);
//         setTimeout(() => {
//             content.removeChild(document.getElementsByClassName("contentInner")[0]);
//         }, 1);
//         console.log(currentItemArr);
//     }
// });