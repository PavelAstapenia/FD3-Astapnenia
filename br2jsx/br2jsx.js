import React from 'react';
import PropTypes from 'prop-types';

import './br2jsx.css';

function BR2JSX(props) {
  let text = props.text;
  let text1 = text.match(/[a-zA-Zа-яА-ЯёЁ]+/gu).map(elem => (elem == 'br') ? <br /> : elem);
  return (<div className='br2jsx'>
    {text1}
  </div >);
};

export default BR2JSX;
