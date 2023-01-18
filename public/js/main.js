const toggle = document.querySelector(".toggle");
const sidebar = document.querySelector(".sidebar");
let left = document.getElementsByClassName("bx bxs-left-arrow")[0];
let right = document.getElementsByClassName("bx bxs-right-arrow")[0];
let downContainer = document.getElementsByClassName("down-container")[0];
let poster = document.getElementById("poster");
let title = document.getElementById("title");
let price_cont = document.getElementById("price");

toggle.addEventListener("click", () => {
    sidebar.classList.toggle("close");
});

left.addEventListener('click', () => {
    downContainer.scrollLeft -= 140;
});
right.addEventListener('click', () => {
    downContainer.scrollLeft += 140;
});

Array.from(document.getElementsByClassName('card')).forEach((ele, i) => {
    ele.addEventListener('click', () => {
        poster.src = ele.getElementsByTagName('img')[0].src;
        title.innerText = ele.getElementsByTagName('h5')[0].innerText;
        price_cont.innerText = ele.getElementsByTagName('h4')[0].innerText;
    })
})