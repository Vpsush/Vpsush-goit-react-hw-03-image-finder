import { Component } from 'react';
// import axios from 'axios';
// import Searchbar from './Searchbar/Searchbar';
// import ImageGallery from './ImageGallery/ImageGallery';
import Modal from './Modal/Modal';
// import Searchbar from './Searchbar/Searchbar';
// import Searchbar from './Searchbar/Searchbar';

export class App extends Component {
  state = {
    images: [],
    isOpenModal: false,
    modalData: null,
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

  render() {
    // const { images } = this.state;
    return (
      <div>
        {/* <ImageGallery openModal={this.openModal} /> */}
        {/* <Searchbar /> */}
        <Modal
        // closeModal={this.closeModal}
        // modalData={this.state.modalData}
        />
      </div>
    );
  }
}
