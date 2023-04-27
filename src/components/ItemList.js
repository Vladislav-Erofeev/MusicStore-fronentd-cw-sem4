import React from 'react';

const ItemList = ({items}) => {
    return (
        <div>
            {items.map(item =>
            <h1>{item.title}</h1>)}
        </div>
    );
};

export default ItemList;