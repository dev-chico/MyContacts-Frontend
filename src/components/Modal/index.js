import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { Container, Overlay, Footer } from './styles';
import Button from '../Button';

export function Modal({ danger }) {
  return ReactDOM.createPortal(
    <Overlay>
      <Container danger={danger}>
        <h1>Título</h1>

        <p>Corpo</p>

        <Footer>
          <button className="cancel-button" type="button">Cancelar</button>
          <Button danger={danger}>Deletar</Button>
        </Footer>
      </Container>
    </Overlay>,
    document.getElementById('modal-root'),
  );
}

Modal.propTypes = {
  danger: PropTypes.bool,
};

Modal.defaultProps = {
  danger: false,
};
