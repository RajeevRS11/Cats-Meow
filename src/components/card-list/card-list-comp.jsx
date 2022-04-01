import './card-list.style.css';
import React from 'react';

export default function CardList(props) {
  const cats = props.cats;
  return (
    <div className='card-list' >
      {cats.map((cat) => {
        const { name, email, id, imgUrl } = cat;
        return (
          <div className='card-container' key={id}>
            <img alt={`cat ${name}`} src={imgUrl} />
            <p className='primary'>{name}</p>
            <p className='secondary'>{email}</p>
          </div>
        )
      })}
    </div>
  )
}
