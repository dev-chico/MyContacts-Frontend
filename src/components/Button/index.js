import React from 'react';
import PropTypes from 'prop-types';
import { StyledButton } from './styles';
import { Spinner } from '../Spinner';

export function Button({
  type, disabled, isLoading, children, danger, onClick,
}) {
  return (
    <StyledButton
      danger={danger}
      type={type}
      disabled={disabled || isLoading}
      onClick={onClick}
    >
      {!isLoading && children}
      {isLoading && <Spinner size={16} />}
    </StyledButton>
  );
}

Button.propTypes = {
  type: PropTypes.string,
  disabled: PropTypes.bool,
  isLoading: PropTypes.bool,
  danger: PropTypes.bool,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  type: 'button',
  disabled: false,
  isLoading: false,
  danger: false,
  onClick: undefined,
};
