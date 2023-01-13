const elForm = document.querySelector('.js-form');
const elInput = document.querySelector('.js-input');
const itemTemplate = document.querySelector('.js-template');
const elList = document.querySelector('.js-list');

function renderFilms(array, node) {
    node.innerHTML = '';
    array.forEach((item) => {
        node.innerHTML += `
            <li class="p-2 shadow-lg" style="width: 300px; border-radius: 10px; background: rgb(32, 33, 36); color: rgb(255, 255, 255)">
                <img src="${item.Poster}" alt="Poster" class="mb-3" style="width: 100%;">
                <h2>${item.Title}</h2>
                <p>${item.Type}</p>
                <p>${item.Year}</p>
            </li>
        `
    });
}

let arr = []

elForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=fd7e17dd&s=${elInput.value}`)
        .then((res) => res.json())
        .then((data) => {
            if (data) {
                arr = data.Search
                renderFilms(arr, elList)
            }
        })
})

