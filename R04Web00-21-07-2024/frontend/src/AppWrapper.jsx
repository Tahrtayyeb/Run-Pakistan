// AppWrapper.jsx
import React from 'react';

const AppWrapper = ({ children }) => {
  return (
    <div className="font-sans leading-extra-loose">
      {children}
    </div>
  );
};

export default AppWrapper;