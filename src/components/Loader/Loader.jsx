import { Audio } from 'react-loader-spinner';
import css from './Loader.module.css';
// import { Component } from 'react';

const Loader = () => {
  return (
    <div className={css.loader}>
      <Audio
        height="80"
        width="80"
        radius="9"
        color="green"
        ariaLabel="loading"
        wrapperStyle
        wrapperClass
      />
    </div>
  );
};

export default Loader;