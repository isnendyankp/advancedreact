import React from 'react'

export function Person ({name, nickName, images}) {
    return (
      <div>
        <h4>{name}</h4>
        <p>Nickname : {nickName}</p>
      </div>
    );
}
