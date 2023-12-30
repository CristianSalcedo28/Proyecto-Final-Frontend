import React from "react";
import './Card.css';

const Card = ({item}) => {
  return (<>
    <div className='card'>
      <h3  className='card_name'>{item.name}</h3>    
      <p className='card_date'>Date: {item.publication_date}</p>
      <p className='card_categories'>{item.categories.name}</p>
      <p className='card_company'>Company: {item.company.name}</p>
      <a className='card_link' href={item.refs.landing_page}>Más información</a>
    </div>
  </>)
}


export default Card;