import React from 'react'

export function Person ({ name, nickName = 'shakeAndBake', images }) {
  // if the images exist, then look for the first one
  // if the first one exist, then get me the small property
  const img = images && images[0] && images [0].small && images [0].small.url;
  return (
    <div>
      <h4>{name}</h4>
      <p>Nickname : {nickName}</p>
    </div>
  );
};
