import React from 'react';
import Item from "./item";

const ItemList = ({items}) => {
    return (
        <div>
            {items.map(item =>
                <Item item={item} />
            )}
        </div>
    );
};

export default ItemList;