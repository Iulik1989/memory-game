import React from 'react';
import { CardItemProps } from "./CardItem.interface.ts";
import './styles.css'

const CardItem: React.FC<CardItemProps> = ({ item, open, index, handleClick }) => {
    return (
        <div
            className={`card-item ${open ? "flipped" : ""} `}
            key={index}
            onClick={() => handleClick(index)}
        >
            <div className="inner">
                <div className="front">
                    <img
                        src={item.url}
                        alt="kitty-image"
                        className="card-image"
                    />
                </div>
                <div className="back" />
            </div>
        </div>
    );
};

export default CardItem;
