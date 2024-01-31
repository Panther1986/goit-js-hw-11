//import iziToast from "izitoast";
//import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const inputElem = document.querySelector('.search-input');
const formElem = document.querySelector('.search-form');
const imagesContainer = document.querySelector('.gallery');




fetch('https://pixabay.com/api/?key=42127236-8bfdbbfbeed8a2dadaca720e8&q=cat&image_type=photo&orientation=horizontal&safesearch=true', ).then(response => {
    if (!response.ok) {
        throw new Error(response.status);
    }
    return response.json();
})  .then(data => {
  const markup = generateGalleryMarkup(data);
  console.log(markup);
  })
  .catch(error => {
    // Error handling
  });

  

function generateGalleryMarkup() {
    return images.map(() => {
        return `
   <li class="gallery-item">
  <a class="gallery-link" href="{{largeImageURL}}">
    <img class="gallery-image" src="{{webformatURL}}" alt="{{tags}}" />
  </a>
  <p class="galerry-text">likes: {{likes}}</p>
  <p class="galerry-text">views: {{views}}</p>
  <p class="galerry-text">comments: {{comments}}</p>
  <p class="galerry-text">downloads: {{downloads}}</p>
</li>
    `;
    }).join('');
}
// const imageMarkup = generateGalleryMarkup(images);
// imagesContainer.insertAdjacentHTML('beforeend', imageMarkup);



const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});