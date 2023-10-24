import { Component } from 'react';
// import axios from 'axios';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
// import Modal from './ModalModal';
// import Searchbar from './Searchbar/Searchbar';
// import Searchbar from './Searchbar/Searchbar';

export class App extends Component {
  state = {
    // images: [],
    isOpenModal: false,
    modalData: null,
    imageKey: '',
  };

  openModal = someDataToModal => {
    this.setState({
      isOpenModal: true,
      modalData: someDataToModal,
    });
  };

  closeModal = () => {
    this.setState({
      isOpenModal: false,
      modalData: null,
    });
  };

  handleSearch = imageKey => {
    this.setState({ imageKey });
  };

  render() {
    // const { images } = this.state;
    return (
      <div>
        <ImageGallery
          imageKey={this.state.imageKey}
          // openModal={this.openModal}
        />
        <Searchbar handleSearch={this.handleSearch} />
        {/* <Modal
        // closeModal={this.closeModal}
        // modalData={this.state.modalData}
        /> */}
      </div>
    );
  }
}
