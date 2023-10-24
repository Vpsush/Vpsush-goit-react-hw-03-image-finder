import css from './Searchbar.module.css';
import { Component } from 'react';

class Searchbar extends Component {
  state = {
    value: '',
  };

  handleChange = e => {
    // this.setState({ value });

    // this.setState({ value: e.target.value });

    const { target } = e;
    const { value } = target;
    this.setState({ value });
  };

  handleSubmit = e => {
    e.preventDefault(this.state);
    console.log(this.state);
  };

  render() {
    return (
      <header className={css.searchbar}>
        <form className={css.form} onSubmit={this.handleSubmit}>
          <input
            className={css.input}
            type="text"
            autocomplete="off"
            autofocus
            aria-label="search"
            placeholder="Search images and photos"
            onChange={this.handleChange}
            value={this.state.value}
          />

          <button type="submit" className={css.button}>
            <span className={css.buttonLabel}>Search</span>
          </button>
        </form>
      </header>
    );
  }
}

export default Searchbar;
