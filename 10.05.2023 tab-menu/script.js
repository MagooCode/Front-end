let contentHeader1 = document.getElementsByClassName("tab_innercontent_header")[0];
let contentHeader2 = document.getElementsByClassName("tab_innercontent_header")[1];
let contentHeader3 = document.getElementsByClassName("tab_innercontent_header")[2];
let contentHeader4 = document.getElementsByClassName("tab_innercontent_header")[3];
let contentHeader5 = document.getElementsByClassName("tab_innercontent_header")[4];
let contentHeader6 = document.getElementsByClassName("tab_innercontent_header")[5];

let tabHeading1 = document.getElementsByClassName("tab_heading")[0];
let tabHeading2 = document.getElementsByClassName("tab_heading")[1];
let tabHeading3 = document.getElementsByClassName("tab_heading")[2];
let tabHeading4 = document.getElementsByClassName("tab_heading")[3];
let tabHeading5 = document.getElementsByClassName("tab_heading")[4];
let tabHeading6 = document.getElementsByClassName("tab_heading")[5];

tabHeading1.onclick = () => {
    tabHeading1.classList.add("active");
    tabHeading2.classList.remove("active");
    tabHeading3.classList.remove("active");
    tabHeading4.classList.remove("active");
    tabHeading5.classList.remove("active");
    tabHeading6.classList.remove("active");

    contentHeader1.classList.add("active");
    contentHeader2.classList.remove("active");
    contentHeader3.classList.remove("active");
    contentHeader4.classList.remove("active");
    contentHeader5.classList.remove("active");
    contentHeader6.classList.remove("active");
}

tabHeading2.onclick = () => {
    tabHeading2.classList.add("active");
    tabHeading1.classList.remove("active");
    tabHeading3.classList.remove("active");
    tabHeading4.classList.remove("active");
    tabHeading5.classList.remove("active");
    tabHeading6.classList.remove("active");

    contentHeader2.classList.add("active");
    contentHeader1.classList.remove("active");
    contentHeader3.classList.remove("active");
    contentHeader4.classList.remove("active");
    contentHeader5.classList.remove("active");
    contentHeader6.classList.remove("active");
}

tabHeading3.onclick = () => {
    tabHeading3.classList.add("active");
    tabHeading1.classList.remove("active");
    tabHeading2.classList.remove("active");
    tabHeading4.classList.remove("active");
    tabHeading5.classList.remove("active");
    tabHeading6.classList.remove("active");

    contentHeader3.classList.add("active");
    contentHeader1.classList.remove("active");
    contentHeader2.classList.remove("active");
    contentHeader4.classList.remove("active");
    contentHeader5.classList.remove("active");
    contentHeader6.classList.remove("active");
}

tabHeading4.onclick = () => {
    tabHeading4.classList.add("active");
    tabHeading1.classList.remove("active");
    tabHeading2.classList.remove("active");
    tabHeading3.classList.remove("active");
    tabHeading5.classList.remove("active");
    tabHeading6.classList.remove("active");

    contentHeader4.classList.add("active");
    contentHeader1.classList.remove("active");
    contentHeader2.classList.remove("active");
    contentHeader3.classList.remove("active");
    contentHeader5.classList.remove("active");
    contentHeader6.classList.remove("active");
}

tabHeading5.onclick = () => {
    tabHeading5.classList.add("active");
    tabHeading1.classList.remove("active");
    tabHeading2.classList.remove("active");
    tabHeading3.classList.remove("active");
    tabHeading4.classList.remove("active");
    tabHeading6.classList.remove("active");

    contentHeader5.classList.add("active");
    contentHeader1.classList.remove("active");
    contentHeader2.classList.remove("active");
    contentHeader3.classList.remove("active");
    contentHeader4.classList.remove("active");
    contentHeader6.classList.remove("active");
}

tabHeading6.onclick = () => {
    tabHeading6.classList.add("active");
    tabHeading1.classList.remove("active");
    tabHeading2.classList.remove("active");
    tabHeading3.classList.remove("active");
    tabHeading4.classList.remove("active");
    tabHeading5.classList.remove("active");

    contentHeader6.classList.add("active");
    contentHeader1.classList.remove("active");
    contentHeader2.classList.remove("active");
    contentHeader3.classList.remove("active");
    contentHeader4.classList.remove("active");
    contentHeader5.classList.remove("active");
}