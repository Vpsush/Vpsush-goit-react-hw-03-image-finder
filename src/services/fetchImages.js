// import axios from 'axios';

// const API_KEY = '39094662-f0479bb8b89274a4b188f6f08';
// axios.defaults.baseURL = 'https://pixabay.com/api/';

// fetchImages = async (query, page) => {
//   try {
//     this.setState({
//       isLoading: true,
//     });

//     if (data.hits.length === 0) {
//       this.setState({
//         error: `No results found for "${query}"`,
//         status: 'rejected',
//         hasMoreImages: false,
//       });
//       return;
//     }

//     this.setState(prevState => ({
//       images: [...prevState.images, ...data.hits],
//       error: null,
//     }));

//     if (data.status === 'ok') this.setState({ units: data.unit });
//     else return Promise.reject(data.message);

//     if (data.hits.length === 12) {
//       this.setState({ hasMoreImages: true });
//     } else {
//       this.setState({ hasMoreImages: false });
//     }
//   } catch (error) {
//     this.setState({ error, status: 'rejected', hasMoreImages: false });
//   } finally {
//     this.setState({
//       isLoading: false,
//     });
//   }
// };

// export default fetchImages;
