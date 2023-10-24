const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '39094662-f0479bb8b89274a4b188f6f08';

export const getImage = imageKey => {
  fetch(
    `${BASE_URL}?q=${imageKey}&page=1&image_type=photo&orientation=horizontal&per_page=12`,
    {
      headers: {
        key: API_KEY,
      },
    }
  )
    .then(resp => resp.json)
    .then(img => console.log(img));
};
