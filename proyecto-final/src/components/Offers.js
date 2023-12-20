import React from "react";
import Card from "./Card/Card";
import api from '../utils/api';

export default function Offers(){
    const [cards, setCards] = React.useState([]);

    React.useEffect(() => {
      api.getNewsCards()
      .then((res) => {
        setCards(res.results);
      });
    }, []);
    return (<>
    <div className='cards'>
                {cards.map((item, index) => {
                return <Card item={item} key={index}/>
          })}
          </div>
    </>)
}