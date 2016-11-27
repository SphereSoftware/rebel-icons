import React, { PropTypes } from 'react';
import RebelLib from './rebel-lib';

const Icons = {};

for(const key in RebelLib) {
  try {
    Icons[key] = require('./rebel-lib/' + `${RebelLib[key]}Icon`).default;
  }
  catch (e) {}
}

const Icon = ({ icon, style, color, size, svgStyle, svgProps, ...rest }) => {
  if (typeof Icons[icon] !== 'function') {
    console.error(`Rebel Icons: requested unknown icon '${icon}'`);
    return <div />;
  }
  const props = { ...svgProps, color, size, style: svgStyle };
  return (
    <div style={ {...style, display: 'inline-block', lineHeight: 0} } { ...rest }>
      { React.createElement(Icons[icon], props) }
    </div>
  );
};

Icon.propTypes = {
  icon: PropTypes.string.isRequired,
  style: PropTypes.object,
  color: PropTypes.string,
  size: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  svgStyle: PropTypes.object,
  svgProps: PropTypes.object
};

export default Icon;
