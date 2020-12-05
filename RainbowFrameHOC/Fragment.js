import React from 'react';
import PropTypes from 'prop-types';

function Fragment(props) {
  return (<div style={{ padding: "10px 80px", display: "inline-flex" }}>{<b>{props.children}</b>}</div>);
};

export default Fragment;
