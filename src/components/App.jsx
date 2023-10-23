import { Component } from 'react';
import axios from 'axios';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
// import Searchbar from './Searchbar/Searchbar';
// import Searchbar from './Searchbar/Searchbar';

export class App extends Component {
  state = {
    images: [],
  };

  async componentDidMount() {
    const response = await axios.get('/search?query=react');
    this.setState({ images: response.data.hits });
  }

  render() {
    const { images } = this.state;
    return (
      <div>
        {/* images.length > 0 ? <ImageGallery images={images} /> : null */}
        <Searchbar />
      </div>
    );
  }
}
