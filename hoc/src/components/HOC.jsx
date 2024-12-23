import React from 'react';

function withGreeting(WrappedComponent) {
  return function(props) {
    return (
      <div>
        <h1>Hello, Welcome to ExtraaEdge!</h1>
        <WrappedComponent {...props} />
      </div>
    );
  };
}

export default withGreeting;