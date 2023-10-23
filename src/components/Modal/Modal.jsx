import { Component } from 'react';
import css from './Modal.module.css';
import * as basicLightbox from 'basiclightbox';

export default class Modal extends Component {
  state = {
    largeImageURL,
  };
  render() {
    return (
      <div className={css.modal}>
        <button
          // onClick={this.props.closeModal}
          className={css.closeBtn}
        >
          ❌
        </button>
        <h2>Product Details</h2>

        {/* <div>

  const instance = basicLightbox.create(`
    <img src="assets/images/image.png" width="800" height="600">
`)

instance.show()
          <button onClick={this.handleIncrementProduct}>
            Add product: {this.state.counter}
          </button>
        </div> */}
      </div>
    );
  }
}
