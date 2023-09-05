import React  from 'react';
import { Link } from 'react-router-dom';

const ItemCard = ({name , image}) => {
    return (
        <div className="item__card">
            <img src={image} alt="" />
            <h3>{name}</h3> 
        </div>
    );
}

export default ItemCard;
