//import iziToast from "izitoast";
//import "izitoast/dist/css/iziToast.min.css";

const inputElem = document.querySelector('.search-input');
const formElem = document.querySelector('.search-form');



fetch('https://pixabay.com/api/?key=42127236-8bfdbbfbeed8a2dadaca720e8&q=cat&image_type=photo&orientation=horizontal&safesearch=true', ).then(response => {
    if (!response.ok) {
        throw new Error(response.status);
    }
    return response.json();
})  .then(data => {
    // Data handling
  })
  .catch(error => {
    // Error handling
  });