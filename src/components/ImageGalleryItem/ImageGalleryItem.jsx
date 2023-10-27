import css from './ImageGalleryItem.module.css';
// import fetchImages from 'services/fetchImages';
// import { Component } from 'react';

// class ImageGalleryItem extends Component {
//   // state = {
//   //   images,
//   //   openModal
//   // };
//   componentDidUpdate(prevProps, prevState) {
//     if (prevProps.imageKey !== this.props.imageKey) {
//       fetchImages();
//       console.log(this.props);
//     }
//   }
//   render() {
//     return ({images.map(image => (
//         <li key={image.id} className={css.galleryItem}>
//           {/* Make the image clickable and open the modal */}
//           <img
//             src={image.webformatURL}
//             alt={image.tags}
//             onClick={() => openModal(image.largeImageURL)} // Open the modal with the large image URL
//           />
//         </li>)
//     )
//     }
//     )
//   }
// }

import React from 'react';
// import css from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ image, openModal }) => {
  return (
    <li className={css.imageGalleryItem}>
      <img
        src={image.webformatURL}
        alt={image.tags}
        onClick={() => openModal(image.largeImageURL)}
        width="400px"
        height="300px"
        className={css.imageGalleryItemImage}
      />
    </li>
  );
};

export default ImageGalleryItem;
