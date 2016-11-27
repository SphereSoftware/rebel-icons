import React, { PropTypes } from 'react';

const IconBase = ({ children, color, size, style, ...rest }, { rebelIconsBase = {} }) => {
  const computedSize = size || rebelIconsBase.size || '1em';
  return (
    <svg
      children={ children }
      fill="currentColor"
      preserveAspectRatio="xMidYMid meet"
      height={ computedSize }
      width={ computedSize }
      { ...rebelIconsBase }
      { ...rest }
      style={ {
        color: color || rebelIconsBase.color || 'inherit',
        ...(rebelIconsBase.style || {}),
        ...style
      } }
    />
  );
};

IconBase.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  style: PropTypes.object
};

IconBase.contextTypes = {
  rebelIconsBase: PropTypes.shape(IconBase.propTypes)
};

export default IconBase;
