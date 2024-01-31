//import iziToast from "izitoast";
//import "izitoast/dist/css/iziToast.min.css";

const inputElem = document.querySelector('.search-input');
const formElem = document.querySelector('.search-form');



const options = {
    method: "GET",
    key: "user_id:42127236",
    q: formElem.currentTarget,
    image_type: "photo",
    orientation: "horizontal",
    safesearch: "true"

};

fetch('<https://pixabay.com/api/>', options).then(response => {
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