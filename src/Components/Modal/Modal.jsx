import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import * as basicLightbox from "basiclightbox";

const instance = basicLightbox.create(`
<div className="Overlay">
<div className="Modal">
  <img src="" alt="" />
</div>
</div>
`);

instance.show();

const modalRoot = document.querySelector('#modal-root');

class Modal extends Component {
  static propTypes = {
    // onClose: PropTypes.func.isRequired,
    // src: PropTypes.string.isRequired,
    // alt: PropTypes.string.isRequired,
  };


  render() {
   

    return createPortal(
      instance.show(),
      modalRoot,
    );
  }
}

export default Modal;