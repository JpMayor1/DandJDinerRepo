let left = document.getElementsByClassName("bx bxs-left-arrow")[0];
let right = document.getElementsByClassName("bx bxs-right-arrow")[0];
let downContainer = document.getElementsByClassName("down-container")[0];
let poster = document.getElementById("poster");
let title = document.getElementById("title");


left.addEventListener('click', () => {
    downContainer.scrollTop -= 100;
});
right.addEventListener('click', () => {
    downContainer.scrollTop += 100;
});

Array.from(document.getElementsByClassName('card')).forEach((ele, i) => {
    ele.addEventListener('click', () => {
        poster.src = ele.getElementsByTagName('img')[0].src;
        title.innerText = ele.getElementsByTagName('h1')[0].innerText;
    })
})

let select = document.getElementById("table");
let cards = Array.from(document.getElementsByClassName('card'));

select.addEventListener('change', (event) => {
    let selectedValue = event.target.value;
    let selectedCard = cards[selectedValue - 1];
    poster.src = selectedCard.getElementsByTagName('img')[0].src;
    title.innerText = selectedCard.getElementsByTagName('h1')[0].innerText;
});