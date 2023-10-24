import { Component } from 'react';
import css from './ImageGallery.module.css';
// import React, { Component } from "react";
// import axios from 'axios';

// axios.defaults.baseURL = 'https://hn.algolia.com/api/v1';

// axios.defaults.params = {
//   key: '39094662-f0479bb8b89274a4b188f6f08',
//   image_type: 'photo',
//   orientation: 'horizontal',
//   safesearch: true,
//   per_page: 40,
// };

class ImageGallery extends Component {
  state = {};
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.imageKey !== this.props.imageKey) {
      // fetch()
    }
  }
  render() {
    return (
      <ul className={css.gallery}>
        {/* {images.map(() => (
          <li class={css.galleryItem}>
            <img src="" alt="" />
          </li>
        ))} */}
      </ul>
    );
  }
}

export default ImageGallery;
