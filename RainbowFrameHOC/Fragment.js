import React from 'react';
import PropTypes from 'prop-types';

class DoubleButton extends React.Component {

  static PropTypes = {
    caption1: PropTypes.string.isRequired,
    caption2: PropTypes.string.isRequired,
    cbPressed: PropTypes.func.isRequired,
  }

  pressedBtn = (EO) => {
    this.props.cbPressed(EO.target.value);
  }

  render() {
    return (
      <div style={{ padding: "10px 80px", display: "inline-flex" }}>
        <input className='Btn' type='button' value={this.props.caption1} onClick={this.pressedBtn} />
        { <b>{this.props.children}</b>}
        <input className='Btn' type='button' value={this.props.caption2} onClick={this.pressedBtn} />
      </div >
    );

  }

}

export default DoubleButton;

