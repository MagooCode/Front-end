let section = document.createElement("section");
section.setAttribute("class","section")
let container = document.createElement("div");
container.setAttribute("class","container");
let body = document.getElementsByTagName("body")[0];
let content = document.createElement("div");
content.setAttribute("class","content");



let buttonsBlock = document.createElement("div","buttonsblock");
let addButton = document.createElement("button");
addButton.setAttribute("class","add");
addButton.innerHTML = `Add`;
let removeButton = document.createElement("button");
removeButton.setAttribute("class","remove");
removeButton.innerHTML = `Remove`;
let clearAllButton = document.createElement("button");
clearAllButton.setAttribute("class","clear");
clearAllButton.innerHTML = `Clear all`;


buttonsBlock.appendChild(addButton);
buttonsBlock.appendChild(removeButton);
buttonsBlock.appendChild(clearAllButton);




body.appendChild(section);
section.appendChild(container);
container.appendChild(buttonsBlock);
container.appendChild(content);




let arr = ["Bread", "Milk", "Apples", "Grapefruit", "Cat food", "Cheese", "Wine"];

let currentItemArr = [];
let checkCount=arr.length;

let emptyDiv = document.createElement("div");
emptyDiv.setAttribute("class","emptycontent");
emptyDiv.innerHTML = "List is empty";

if (content.children.length === 0 && currentItemArr.length === 0) {
    // content.appendChild(emptyDiv);

    setTimeout(function(){ 
        content.appendChild(emptyDiv);
    }, 1000);
}

addButton.addEventListener("click", () => {
    if(checkCount.length === 0) {
        content.appendChild(emptyDiv);
    }
    else if (checkCount > 0) {
        let temp=arr.shift(arr.length-1)
        currentItemArr.push(temp);

        setTimeout(function(){ 
            content.removeChild(emptyDiv);
        }, 1);
        console.log(currentItemArr);
       
        let contentInner = document.createElement("div");
        contentInner.setAttribute("class","contentInner");
        content.appendChild(contentInner);
        currentItemArr.map((item) => {
            contentInner.innerHTML = `
            <div>
                ${item}
            </div>
            <div class="TickEx">
                <p class="tick">✓</p>
                <p class="ex">×</p>
            </div>
            `;
        });
        checkCount--;
    }
    else if(currentItemArr.includes("Bread", "Milk", "Apples", "Grapefruit", "Cat food", "Cheese", "Wine")){
        alert("shopping list is full");
    }
    else {
        console.log("invalid inputs");
    }
});

removeButton.addEventListener("click", () => {
    if (currentItemArr.length === 0){
        content.appendChild(emptyDiv);
        alert("list is empty");
    }
    else if (currentItemArr.length > 0) {
        let removedItem = currentItemArr[currentItemArr.length - 1];
        currentItemArr.pop();
        arr.push(removedItem);
        checkCount++;
        console.log(currentItemArr);
        setTimeout(function(){ 
            content.removeChild(document.getElementsByClassName("contentInner")[0]);
        }, 1);
        console.log(currentItemArr);
    }
});

// clearAllButton.addEventListener("click", () => {

//     currentItemArr = [];
//     arr = ["Bread", "Milk", "Apples", "Grapefruit", "Cat food", "Cheese", "Wine"];
//     content.replaceChildren();
//     content.appendChild(emptyDiv);
//     console.log(currentItemArr);
//     checkCount=arr.length;

// });

clearAllButton.addEventListener("click", () => {

    if (currentItemArr.length > 0) {
        currentItemArr = [];
        arr = ["Bread", "Milk", "Apples", "Grapefruit", "Cat food", "Cheese", "Wine"];
        content.replaceChildren();
        content.appendChild(emptyDiv);
        console.log(currentItemArr);
        checkCount=arr.length;
    }
    else if (arr.length === 7) {
        alert("list is empty");
    }
    
});