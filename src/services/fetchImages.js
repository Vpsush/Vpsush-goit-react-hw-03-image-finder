import axios from 'axios';
axios.defaults.API_KEY = '39094662-f0479bb8b89274a4b188f6f08';
axios.defaults.params = {
  key: '39094662-f0479bb8b89274a4b188f6f08',
  image_type: 'photo',
  orientation: 'horizontal',
  safesearch: true,
  per_page: 40,
};

// export const getImage = imageKey => {
//   return fetch(
//     `${BASE_URL}?q=${imageKey}&page=1&image_type=photo&orientation=horizontal&per_page=12`,
//     {
//       headers: {
//         key: API_KEY,
//       },
//     }
//   )
//     .then(resp => resp.json)

//     .then(img => console.log(img));
// };
fetchImages = async () => {
  try {
    this.setState({
      isLoading: true,
    });
    const { data } = await axios.get('https://pixabay.com/api/');

    this.setState({
      posts: data,
    });
    return data;
  } catch (error) {
    this.setState({ error: error.message });
  } finally {
    this.setState({
      isLoading: false,
    });
  }
};

export default { fetchImages };
