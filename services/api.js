import axios from "axios";

export default function fetchSlides() {
  return axios
    .get(
      "https://raw.githubusercontent.com/pravinkumarravi/absol-tv/master/slides.json"
    )
    .then((response) => response.data);
}
