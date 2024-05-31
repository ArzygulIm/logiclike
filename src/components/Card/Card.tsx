import React from 'react';
import './Card.scss';

interface Item {
    id: string;
    name: string;
    image: string;
    bgColor: string;
    tags: string[];
}

interface Props {
    item: Item;
}

const Card: React.FC<Props> = React.memo(({ item }) => {
    console.log(item);
    return (
        <div className="card__box">
            <div className="img__wrap" style={{ backgroundColor: item.bgColor ? item.bgColor : '#FFFFFF' }}>
                {item.image && <img src={item.image} alt={item.name} />}
            </div>
            {item.name && <h6>{item.name}</h6>}
        </div>
    );
});

export default Card;