// import React, { Component } from 'react';
// import axios from 'axios';
// import css from 'App.module.css';
// import Searchbar from './components/Searchbar/Searchbar';
// import ImageGallery from './components/ImageGallery/ImageGallery';
// import Loader from './components/Loader/Loader';
// import Modal from './components/Modal/Modal';
// import Button from './components/Button/Button';
// import ErrorCard from './components/ErrorCard';
// // import fetchImages from './services/fetchImages';

// const API_KEY = '39094662-f0479bb8b89274a4b188f6f08';
// axios.defaults.baseURL = 'https://pixabay.com/api/';

// class App extends Component {
//   state = {
//     images: [],
//     isLoading: false,
//     error: '',
//     showModal: false,
//     query: '',
//     page: 1,
//     // status: 'idle',
//     units: null,
//     hasMoreImages: true,
//     // hits: 1,
//   };

//   fetchImages = async (query, page) => {
//     try {
//       this.setState({
//         isLoading: true,
//       });
//       const { data } = await axios.get(
//         `/?q=${query}&key=${API_KEY}&page=${page}&image_type=photo&orientation=horizontal&per_page=12`
//       );

//       if (data.hits.length === 0) {
//         this.setState({
//           error: `No results found for "${query}"`,
//           // status: 'rejected',
//           hasMoreImages: false,
//         });
//         return;
//       }

//       this.setState(prevState => ({
//         images: [...prevState.images, ...data.hits],
//         error: null,
//       }));

//       // this.steState(prevState => ({
//       //   images: [...prevState.images, ...data.hits],
//       //   loadMore: this.state.page < Math.ceil(data.totalHits / 12),
//       // }));

//       // if (data.status === 'ok') this.setState({ units: data.unit });
//       // else return Promise.reject(data.message);

//       if (data.hits.length === 12) {
//         this.setState({ hasMoreImages: true });
//       } else {
//         this.setState({ hasMoreImages: false });
//       }
//     } catch (error) {
//       this.setState({
//         error,
//         // status: 'rejected',
//         hasMoreImages: false,
//       });
//     } finally {
//       this.setState({
//         isLoading: false,
//       });
//     }
//   };

//   handleSearch = query => {
//     this.setState(
//       {
//         page: 1,
//         images: [],
//         query,
//         hasMoreImages: true,
//         error: false,
//       },
//       () => this.fetchImages(query, 1)
//     );
//   };

//   openModal = imageURL => {
//     this.setState({
//       showModal: true,
//       modalImageURL: imageURL,
//     });
//   };

//   closeModal = () => {
//     this.setState({
//       showModal: false,
//       modalImageURL: '',
//     });
//   };

//   onLoadMore = () => {
//     this.fetchImages(this.state.query, this.state.page + 1);
//     this.setState(prevState => ({
//       page: prevState.page + 1,
//       error: false,
//     }));
//   };

//   render() {
//     const { error, hasMoreImages } = this.state;
//     // if (this.state.status === 'pending') return <Loader />;
//     // else if (this.state.status === 'resolved')
//     return (
//       <div className={css.App}>
//         <Searchbar handleSearch={this.handleSearch} />
//         <ImageGallery images={this.state.images} openModal={this.openModal} />
//         {hasMoreImages && <Button onClick={this.onLoadMore} />}
//         {this.state.showModal && (
//           <Modal
//             closeModal={this.closeModal}
//             largeImageURL={this.state.modalImageURL}
//           />
//         )}
//         {this.state.isLoading && <Loader />}
//         <ErrorCard>{error}</ErrorCard>
//       </div>
//     );
//     // else if (this.state.status === 'rejected')
//     // return ;
//     // else
//     //   return (
//     //     <div>
//     //       {error && <ErrorCard>{error}</ErrorCard>}
//     //       <div className={css.App}>
//     //         <Searchbar handleSearch={this.handleSearch} />
//     //         <ImageGallery
//     //           images={this.state.images}
//     //           openModal={this.openModal}
//     //         />
//     //         {hasMoreImages && <Button onClick={this.onLoadMore} />}
//     //         {this.state.showModal && (
//     //           <Modal
//     //             closeModal={this.closeModal}
//     //             largeImageURL={this.state.modalImageURL}
//     //           />
//     //         )}
//     //       </div>
//     //     </div>
//     // );
//   }
// }

// export default App;

import React, { Component } from 'react';
import css from 'App.module.css';
import Searchbar from './components/Searchbar/Searchbar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Loader from './components/Loader/Loader';
import Modal from './components/Modal/Modal';
import Button from './components/Button/Button';
import ErrorCard from './components/ErrorCard';
import { fetchImages } from './services/fetchImages';

class App extends Component {
  state = {
    images: [],
    isLoading: false,
    error: '',
    showModal: false,
    query: '',
    page: 1,
    hasMoreImages: true, // Initialize it as true
  };

  componentDidUpdate(prevProps, prevState) {
    if (
      this.state.page !== prevState.page ||
      this.state.query !== prevState.query
    ) {
      if (this.state.page !== 1) {
        this.fetchImagesInternal(this.state.query, this.state.page);
      }
    }
  }

  fetchImagesInternal = async (query, page) => {
    this.setState({
      isLoading: true,
    });

    const { images, error } = await fetchImages(query, page);

    if (error) {
      this.setState({
        error,
        hasMoreImages: false,
        isLoading: false,
      });
      return;
    }

    this.setState(prevState => ({
      images: [...prevState.images, ...images],
      error: null,
      isLoading: false,
      hasMoreImages: images.length === 12,
    }));
  };

  handleSearch = query => {
    this.setState(
      {
        page: 1,
        images: [],
        query,
        hasMoreImages: true,
        error: '',
      },
      () => this.fetchImagesInternal(query, 1)
    );
  };

  openModal = imageURL => {
    this.setState({
      showModal: true,
      modalImageURL: imageURL,
    });
  };

  closeModal = () => {
    this.setState({
      showModal: false,
      modalImageURL: '',
    });
  };

  onLoadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
      error: '',
    }));
  };

  render() {
    const { error, hasMoreImages, query } = this.state;

    return (
      <div className={css.App}>
        <Searchbar handleSearch={this.handleSearch} />
        <ImageGallery images={this.state.images} openModal={this.openModal} />
        {query && hasMoreImages && <Button onClick={this.onLoadMore} />}
        {this.state.showModal && (
          <Modal
            closeModal={this.closeModal}
            largeImageURL={this.state.modalImageURL}
          />
        )}
        {this.state.isLoading && <Loader />}
        {error && <ErrorCard>{error}</ErrorCard>}
      </div>
    );
  }
}

export default App;
