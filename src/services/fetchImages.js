// import axios from 'axios';
// const API_KEY = '39094662-f0479bb8b89274a4b188f6f08';
// axios.defaults.BASE_URL = 'https://pixabay.com/api/';
// const fetchImages = async ({ query, page }) => {
//   try {
//     this.setState({
//       isLoading: true,
//     });
//     const { data } = await axios.get(
//       `/?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
//     );

//     this.setState({
//       posts: data,
//     });
//     return data;
//   } catch (error) {
//     this.setState({ error: error.message });
//   } finally {
//     this.setState({
//       isLoading: false,
//     });
//   }
// };

// export default fetchImages;

// export default class apiImages {
//   constructor() {
//     this.searchQuery = '';
//     this.page = 1;
//   }

//   async fetchImages() {
//     const params = {
//       key: 'API_KEY',
//       q: this.searchQuery,
//       image_type: 'photo',
//       orientation: 'horizontal',
//       safesearch: true,
//       per_page: 12,
//       page: this.page,
//     };
//     try {
//       this.setState({
//         isLoading: true,
//       });
//       const { data } = await axios.get(`${BASE_URL}?${params.toStrings()}`);

//       this.setState({
//         posts: data,
//       });
//       return data;
//     } catch (error) {
//       this.setState({ error: error.message });
//     } finally {
//       this.setState({
//         isLoading: false,
//       });
//     }
//   }
//   resetPage() {
//     this.page = 1;
//   }

//   get query() {
//     return this.searchQuery;
//   }

//   getPage() {
//     return this.page;
//   }

//   set query(newQuery) {
//     this.searchQuery = newQuery;
//   }
// }

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
