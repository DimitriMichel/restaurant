import React from 'react';
import SignUpForm from './SignUpForm';
import Newsletter from './Newsletter';

const renderSwitch = (state) => {
  switch (state) {
    case 'SIGNING':
      return <SignUpForm />;
    default:
      return <Newsletter />;
  }
};

const News = () => {
  return (
    <div>
      {renderSwitch()}
    </div>
  );
};

export default News;