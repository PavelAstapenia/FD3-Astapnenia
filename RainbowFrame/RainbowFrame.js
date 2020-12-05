import React from 'react';
import PropTypes from 'prop-types';

function RainbowFrame(props) {
  let arr = props.colors;
  let child = props.children;

  function makeRainbow(arr, child) {
    return (<React.Fragment>

      <div className="divColorFrame" style={{ border: "solid 7px " + arr[arr.length - 1], padding: "5px", display: "inline-flex" }} >
        {(arr.length > 1) ? makeRainbow((arr.slice(0, arr.length - 1)), child) :
          <div style={{ padding: "10px 80px", display: "inline-flex" }}>{<b>{child}</b>}</div>}
      </div>

    </React.Fragment >);
  }

  return makeRainbow(arr, child);
};

export default RainbowFrame;
