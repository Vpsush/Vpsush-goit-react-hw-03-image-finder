import { Component } from 'react';
import css from './ImageGallery.module.css';
import fetchImages from '../../services/fetchImages';

// import React, { Component } from "react";
// import axios from 'axios';

// axios.defaults.baseURL = 'https://hn.algolia.com/api/v1';

class ImageGallery extends Component {
  state = {};
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.imageKey !== this.props.imageKey) {
      fetchImages();
      console.log(this.props);
    }
  }
  render() {
    return images => {
      <ul className={css.gallery}>
        {images.map(() => (
          <li key={images.id} class={css.galleryItem}>
            <img src="" alt="" />
          </li>
        ))}
      </ul>;
    };
  }
}

export default ImageGallery;
