import * as React from 'react';

const Wrapper = React.forwardRef(({ style, ...props }, ref) => {
  return <div ref={ref} {...props} />;
});

export default Wrapper;
