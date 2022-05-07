import React from 'react';
import './Button.css';
import { HiOutlineShoppingCart } from 'react-icons/hi';
import { HiAnnotation } from 'react-icons/hi';
import { HiOutlineThumbUp } from 'react-icons/hi';
import { HiSearch } from 'react-icons/hi';
import { HiCalendar } from 'react-icons/hi';
import { HiPlay } from 'react-icons/hi';

const Button = ({ variant, text, disableShadow, disabled, startIcon, endIcon, size, color, onClick }) => {
  let className = '';
  let classIconColor = '';

  /*Si se activa disableShow */

  if (disableShadow) {
    className += ' button__disableShadow';
  }

  switch (variant) {
    case 'outline':
      className += ' button__outline';
      if (color == 'secondary') {
        className += ' color-secondary border-secondary';
        classIconColor = 'color-secondary';
      } else if (color == 'danger') {
        className += ' color-danger border-danger';
        classIconColor = 'color-danger';
      } else {
        className += ' color-primary border-primary';
        classIconColor = 'color-primary';
      }
      break;
    case 'text':
      className += ' button__text';
      if (color == 'primary') {
        className += ' color-primary';
        classIconColor = 'color-primary';
      } else if (color == 'secondary') {
        className += ' color-secondary';
        classIconColor = 'color-secondary';
      } else if (color == 'danger') {
        className += ' color-danger';
        classIconColor = 'color-danger';
      } else {
        className += ' color-default';
        classIconColor = 'color-primary';
      }
      break;
    default:
      className += ' button__default';
      classIconColor = 'color-default';
  }

  /*Si se activa disableShow */

  if (disableShadow) {
    className += ' button__disableShadow';
  }

  /*Si se activa disabled no importa ni el color, ni nada, no se suman las clases, solo se aplican
  con variacion solo en si es tipo text o no */

  if (disabled && variant == 'text') {
    className = 'button__disabled-text';
    classIconColor = 'color-disabled';
  } else if (disabled) {
    className = 'button__disabled';
    classIconColor = 'color-disabled';
  }

  //Icono al inicio

  switch (size) {
    case 'sm':
      className += ' button__sm';
      break;
    case 'md':
      className += ' button__md';
      break;
    case 'lg':
      className += ' button__lg';
      break;
    default:
  }
  if (variant != 'outline' && variant != 'text' && !disabled) {
    classIconColor = 'color-white';
    switch (color) {
      case 'primary':
        className += ' button__primary';

        break;
      case 'secondary':
        className += ' button__secondary';

        break;
      case 'danger':
        className += ' button__danger';

        break;
    }
  }

  switch (startIcon) {
    case 'shopping-cart':
      startIcon = <HiOutlineShoppingCart className={' icon-start ' + ' ' + classIconColor} />;
      break;
    case 'annotation':
      startIcon = <HiAnnotation className={' icon-start ' + ' ' + classIconColor} />;
      break;
    case 'thumb-up':
      startIcon = <HiOutlineThumbUp className={' icon-start ' + ' ' + classIconColor} />;
      break;
    case 'search':
      startIcon = <HiSearch className={' icon-start ' + ' ' + classIconColor} />;
      break;
    case 'calendar':
      startIcon = <HiCalendar className={' icon-start ' + ' ' + classIconColor} />;
      break;
    case 'play':
      startIcon = <HiPlay className={' icon-start ' + ' ' + classIconColor} />;
      break;
    default:
      startIcon = null;
  }
  switch (endIcon) {
    case 'shopping-cart':
      endIcon = <HiOutlineShoppingCart className={'icon-end' + ' ' + classIconColor} />;
      break;
    case 'annotation':
      endIcon = <HiAnnotation className={'icon-end' + ' ' + classIconColor} />;
      break;
    case 'thumb-up':
      endIcon = <HiOutlineThumbUp className={'icon-end' + ' ' + classIconColor} />;
      break;
    case 'search':
      endIcon = <HiSearch className={'icon-end' + ' ' + classIconColor} />;
      break;
    case 'calendar':
      endIcon = <HiCalendar className={'icon-end' + ' ' + classIconColor} />;
      break;
    case 'play':
      endIcon = <HiPlay className={'icon-end' + ' ' + classIconColor} />;
      break;
    default:
      endIcon = null;
  }

  return (
    <button className={className} onClick={onClick}>
      <div className='container'>
        {startIcon}
        {text}
        {endIcon}
      </div>
    </button>
  );
};

export default Button;
