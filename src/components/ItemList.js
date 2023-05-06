import React from 'react';
import Item from "./item";
import styles from "./styles/itemList.module.css"
import Cookies from "js-cookies/src/cookies";

const ItemList = ({items}) => {
    return (
        <div className={styles.item_list}>
            {items.length == 0
                ? <h1 className={styles.void}>Ничего не найдено</h1>
            :   items.map(item =>
                        <Item item={item} key={item.id}/>
                )}
        </div>
    );
};

export default ItemList;