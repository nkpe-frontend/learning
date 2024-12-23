import React from 'react';
import withGreeting from './HOC'; // Make sure the path is correct!

function Profile({name}) {
  return <p>User Name: {name}</p>;
}

// Wrap the Profile component with the withGreeting HOC
const UserProfile = withGreeting(Profile);

export default UserProfile;