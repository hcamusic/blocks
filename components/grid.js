import React from 'react';
import classNames from 'classnames';

const spacingPattern = /^[pm][tblxy]?$/;

export const Box = props => {
  const spacings = Object.entries(props)
    .filter(([prop]) => prop.match(spacingPattern))
    .map(([spacing, value]) => `${spacing}-${value}`);

  return (
    <div className={classNames(props.className, spacings)}>
      {props.children}
    </div>
  );
};

export const Container = ({ children }) => (
  <div className="container">{children}</div>
);
export const Col = ({ width, children, ...props }) => (
  <Box {...props} className={classNames('col', { [`col-${width}`]: width })}>
    {children}
  </Box>
);
export const Row = ({ children, ...props }) => (
  <Box {...props} className="row">
    {children}
  </Box>
);
