import './styles.css';
import imageList from './template/list-template.hbs'


const key = '20047355-da905bf6b5b4eafba1dad144b';
const listImage = document.querySelector('.image-list');
const input = document.querySelector('.input');
const btnLoadMore = document.querySelector('.btn-more');
const form = document.querySelector('.www');
let inputValue ;
let page = 1;



input.addEventListener('change', loadImages);


function loadImages (event) {    
    inputValue = event.target.value
    event.preventDefault()
    console.log(inputValue);
    fetch(
        `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${inputValue}&page=${page}&per_page=12&key=${key}`
        )
        .then(response => response.json())
        .then(data => {
            // const r = data.hits
            // listImage.innerHTML = ''
            const markup = imageList(data.hits)
            listImage.insertAdjacentHTML('beforeend', markup)
            // event.target.value = ''
            console.log(event.target.value);
            }
        )

}

function loadImagesMore () {
    page +=1;
    fetch(
        `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${inputValue}&page=${page}&per_page=12&key=${key}`
        )
        .then(response => response.json())
        .then(data => {
            // const r = data.hits
            // listImage.innerHTML = ''
            const markup = imageList(data.hits)
            listImage.insertAdjacentHTML('beforeend', markup)
            // event.target.value = ''
            autoDownScroll()
            
            }
        )


}

btnLoadMore.addEventListener('click', loadImagesMore);

function autoDownScroll (){
    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth"
    });
} 

    