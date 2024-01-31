import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const options = {
    method: "GET"
};

fetch("<https://pixabay.com/api/videos/?key={ user_id:42127236 }&q=yellow+flowers&image_type=photo>", options).then(response => {
    if (!response.ok) {
        throw new Error(response.status);
    }
    return response.json();
})