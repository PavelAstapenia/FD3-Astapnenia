import React from 'react';
import PropTypes from 'prop-types';

function RainbowFrame(props) {
  let arr = props.colors;
  let arr1 = arr.slice(0, arr.length - 1);
  return (<React.Fragment>


    <div className="divColorFrame" style={{ border: "solid 7px " + arr[arr.length - 1], padding: "5px", display: "inline-flex" }} >
      {(arr.length > 1) ? <RainbowFrame colors={arr1}>
        {props.children}
      </RainbowFrame> :
        <div style={{ padding: "10px 80px", display: "inline-flex" }}>{<b>{props.children}</b>}</div>}
    </div>

  </React.Fragment >);
};

export default RainbowFrame;
