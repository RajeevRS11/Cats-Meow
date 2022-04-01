import React from 'react';

export default function SearchBox(props) {
  return (
    <div>
      <input
        className={props.className}
        type='search'
        placeholder={props.placeholder}
        onChange={props.onChangeHandle}
      />
    </div>
  )
}

