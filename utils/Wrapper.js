import * as React from 'react';

const Wrapper = React.forwardRef(({ style, ...props }, ref) => {
  return <div ref={ref} style={{...style }} {...props} />;
});

export default Wrapper;
