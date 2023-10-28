// import { Component } from 'react';
// import axios from 'axios';
// import Searchbar from './Searchbar/Searchbar';
// import ImageGallery from './ImageGallery/ImageGallery';
// // import Modal from './ModalModal';
// import Loader from './Loader/Loader';
// // import Searchbar from './Searchbar/Searchbar';

// const API_KEY = '39094662-f0479bb8b89274a4b188f6f08';
// axios.defaults.BASE_URL = 'https://pixabay.com/api/';

// export class App extends Component {
//   state = {
//     // images: [],
//     isOpenModal: false,
//     modalData: null,
//     imageKey: '',
//     isLoading: false,
//     error: null,
//   };

//   fetchImages = async ({ query, page }) => {
//     try {
//       this.setState({
//         isLoading: true,
//       });
//       const { data } = await axios.get(
//         `/?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
//       );

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
//   };

//   openModal = someDataToModal => {
//     this.setState({
//       isOpenModal: true,
//       modalData: someDataToModal,
//     });
//   };

//   closeModal = () => {
//     this.setState({
//       isOpenModal: false,
//       modalData: null,
//     });
//   };

//   handleSearch = imageKey => {
//     this.setState({ imageKey });
//   };

//   componentDidMount() {
//     this.fetchImages();
//   }

//   render() {
//     // const { images } = this.state;
//     return (
//       <div>
//         {this.state.error !== null && (
//           <p className="error-bage">
//             Oops, some error done... Error message: {this.state.error}
//           </p>
//         )}
//         <div>{this.state.isLoading && <Loader />}</div>
//         <div>
//           <ImageGallery
//             imageKey={this.state.imageKey}
//             // openModal={this.openModal}
//           />
//           <Searchbar handleSearch={this.handleSearch} />
//           {/* <Modal
//           largeImageURL={largeImageURL}
//             alt={tags}
//         // closeModal={this.closeModal}
//         // modalData={this.state.modalData}
//         /> */}
//         </div>
//       </div>
//     );
//   }
// }

// import { Component } from 'react';
// import axios from 'axios';
// import css from 'App.module.css';
// import Searchbar from './components/Searchbar/Searchbar';
// import ImageGallery from './components/ImageGallery/ImageGallery';
// import Loader from './components/Loader/Loader';
// import Modal from './components/Modal/Modal';
// import Button from './components/Button/Button';
// import ErrorCard from './components/ErrorCard';

// const API_KEY = '39094662-f0479bb8b89274a4b188f6f08';
// axios.defaults.baseURL = 'https://pixabay.com/api/';

// class App extends Component {
//   state = {
//     images: [],
//     isLoading: false,
//     error: '',
//     showModal: false,
//     query: '',
//     // buttonShow: false,
//     page: 1,
//     status: 'idle',
//     units: null,
//   };

//   // componentDidUpdate(_, prevState) {
//   //   const prevQuery = prevState.query;
//   //   const currentQuery = this.state.query;
//   //   const prevPage = prevState.page;
//   //   const currentPage = this.state.page;

//   //   if (prevQuery !== this.currentQuery) {
//   //     this.setState({
//   //       buttonShow: false,
//   //       page: 1,
//   //       images: [],
//   //     });
//   //     if (currentPage === 1) {
//   //       this.fetchImages(currentQuery, currentPage);
//   //     }
//   //   } else if (prevPage !== this.currentPage) {
//   //     this.fetchImages(currentQuery, currentPage);
//   //   }
//   // }

//   fetchImages = async query => {
//     try {
//       this.setState({
//         isLoading: true,
//       });
//       const { data } = await axios.get(
//         `/?q=${query}&key=${API_KEY}&page=1&image_type=photo&orientation=horizontal&per_page=12`
//       );

//       this.setState({
//         images: data.hits,
//         error: null,
//       });

//       if (data.status === 'ok') this.setState({ units: data.unit });
//       else return Promise.reject(data.message);
//     } catch (error) {
//       this.setState({ error, status: 'rejected' });
//     } finally {
//       this.setState({
//         isLoading: false,
//       });
//     }
//   };

//   handleSearch = query => {
//     this.fetchImages(query);
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
//       // buttonShow: true,
//     });
//   };

//   onLoadMore = () => {
//     this.setState(prevState => ({
//       page: prevState.page + 1,
//     }));
//   };

//   render() {
//     const { error } = this.state;
//     if (this.state.status === 'pending') return <Loader />;
//     else if (this.state.status === 'resolved')
//       return (
//         <ImageGallery
//           images={this.state.images}
//           openModal={this.openModal}
//           // galleryItems={galleryItems}
//         />
//       );
//     else if (this.state.status === 'rejected')
//       return <ErrorCard>{error}</ErrorCard>;

//     return (
//       <div>
//         {/* {this.state.error !== '' && (
//           <p className={css.errorBadge}>
//             Oops, some error occurred. Error message: {this.state.error}
//           </p>
//         )} */}
//         {this.state.error !== '' && <ErrorCard>{this.state.error}</ErrorCard>}
//         <div className={css.App}>
//           {/* {this.state.isLoading && <Loader />} */}
//           <Searchbar handleSearch={this.handleSearch} />
//           <ImageGallery images={this.state.images} openModal={this.openModal} />
//           {/* {this.state.buttonShow && <Button onClick={this.fetchImages} />} */}
//           <Button onClick={this.onLoadMore} />
//           {this.state.showModal && (
//             <Modal
//               closeModal={this.closeModal}
//               largeImageURL={this.state.modalImageURL}
//             />
//           )}
//         </div>
//       </div>
//     );
//   }
// }

// export default App;

import React, { Component } from 'react';
import axios from 'axios';
import css from 'App.module.css';
import Searchbar from './components/Searchbar/Searchbar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Loader from './components/Loader/Loader';
import Modal from './components/Modal/Modal';
import Button from './components/Button/Button';
import ErrorCard from './components/ErrorCard';

const API_KEY = '39094662-f0479bb8b89274a4b188f6f08';
axios.defaults.baseURL = 'https://pixabay.com/api/';

class App extends Component {
  state = {
    images: [],
    isLoading: false,
    error: '',
    showModal: false,
    query: '',
    page: 1,
    status: 'idle',
    units: null,
    hasMoreImages: true,
  };

  fetchImages = async (query, page) => {
    try {
      this.setState({
        isLoading: true,
      });
      const { data } = await axios.get(
        `/?q=${query}&key=${API_KEY}&page=${page}&image_type=photo&orientation=horizontal&per_page=12`
      );

      if (data.hits.length === 0) {
        this.setState({
          error: `No results found for "${query}"`,
          status: 'rejected',
          hasMoreImages: false,
        });
        return;
      }

      this.setState(prevState => ({
        images: [...prevState.images, ...data.hits],
        error: null,
      }));

      if (data.status === 'ok') this.setState({ units: data.unit });
      else return Promise.reject(data.message);

      if (data.hits.length === 12) {
        this.setState({ hasMoreImages: true });
      } else {
        this.setState({ hasMoreImages: false });
      }
    } catch (error) {
      this.setState({ error, status: 'rejected', hasMoreImages: false });
    } finally {
      this.setState({
        isLoading: false,
      });
    }
  };

  handleSearch = query => {
    this.setState(
      {
        page: 1,
        images: [],
        query,
        hasMoreImages: true,
      },
      () => this.fetchImages(query, 1)
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
    this.fetchImages(this.state.query, this.state.page + 1);
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  render() {
    const { error, hasMoreImages } = this.state;
    if (this.state.status === 'pending') return <Loader />;
    else if (this.state.status === 'resolved')
      return (
        <div>
          <Searchbar handleSearch={this.handleSearch} />
          <ImageGallery images={this.state.images} openModal={this.openModal} />
          {hasMoreImages && <Button onClick={this.onLoadMore} />}
          {this.state.showModal && (
            <Modal
              closeModal={this.closeModal}
              largeImageURL={this.state.modalImageURL}
            />
          )}
        </div>
      );
    else if (this.state.status === 'rejected')
      return <ErrorCard>{error}</ErrorCard>;
    else
      return (
        <div>
          {error && <ErrorCard>{error}</ErrorCard>}
          <div className={css.App}>
            <Searchbar handleSearch={this.handleSearch} />
            <ImageGallery
              images={this.state.images}
              openModal={this.openModal}
            />
            {hasMoreImages && <Button onClick={this.onLoadMore} />}
            {this.state.showModal && (
              <Modal
                closeModal={this.closeModal}
                largeImageURL={this.state.modalImageURL}
              />
            )}
          </div>
        </div>
      );
  }
}

export default App;
