import avatar from '../../../assets/default-avatar.svg';
import React from 'react';

export function Person({ name, nickName = 'shakeAndBake', images }) {
  // if the images exist, then look for the first one
  // if the first one exist, then get me the small property
  // const img = images && images[0] && images [0].small && images [0].small.url;
  // shorthand image>first one>small>url
  // const img = images?.[0]?.small?.url;
  // shorthand image>first one>small>url> if not use avatar default
  const img = images?.[0]?.small?.url || avatar;
  return (
    <div>
      <img src={img} alt={name} style={{ width: '50px' }} />
      <h4>{name}</h4>
      <p>Nickname : {nickName}</p>
    </div>
  );
}
