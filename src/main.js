import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const inputElem = document.querySelector('.search-input');
const formElem = document.querySelector('.search-form');
const imagesContainer = document.querySelector('.gallery');
const divElem = document.querySelector('div');

const showLoader = () => {
  const loader = document.createElement('span');
  loader.classList.add('loader');
  divElem.append(loader);
}

const hideLoader = () => {
  const loader = document.querySelector('.loader');
  if (loader) {
    loader.remove();
  }
}

formElem.addEventListener('submit', (e) => {
  showLoader();
  imagesContainer.innerHTML = "";
  e.preventDefault();
  const userSearch = inputElem.value;
  searchImages(userSearch);
  
})

function searchImages(userSearch) {
  const API_KEY = '42127236-8bfdbbfbeed8a2dadaca720e8';
  const url = `https://pixabay.com/api/?key=${API_KEY}&q=${userSearch}&image_type=photo&orientation=horizontal&safesearch=true`;
  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      } return response.json();

    })
    .then(data => {
      if (data.hits.length === 0) {
        iziToast.error({
          message: 'Sorry, there are no images matching your search query. Please try again!',
          position: 'topLeft',
          transitionIn: "fadeInLeft",
        });
        hideLoader()
      }
      const generateGalleryMarkup = data.hits.map(data => {
        return `
            <li class="gallery-item"><a href="${data.largeImageURL}">
          <img class="gallery-image" src="${data.webformatURL}" alt="${data.tags}"></a>
          <p>Likes: ${data.likes}</p>
          <p>Views: ${data.views}</p>
          <p>Comments: ${data.comments}</p>
          <p>Downloads: ${data.downloads}</p>
          </li>`;
      }).join('');
    
      imagesContainer.insertAdjacentHTML('beforeend', generateGalleryMarkup);

      const lightbox = new SimpleLightbox('.gallery a', options);
      lightbox.on('show.simplelightbox');
      lightbox.refresh();
      formElem.reset();
      
    }).catch((error) => {
      console.log(error);
    }).finally(() => {
      hideLoader();
    });
}

const options = {
  captions: true,
  captionType: 'attr',
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionSelector: "img",
  captionDelay: 250,
};



