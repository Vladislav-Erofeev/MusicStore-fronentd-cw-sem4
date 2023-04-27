import React from 'react';
import {categories, url} from "../constants";
import styles from "./styles/item.module.css"
import {Link} from "react-router-dom";

const Item = ({item}) => {
    return (
        <div  className={styles.item}>
            <img src={`${url}/image${item.images[0].url}`} width={100}/>
            <div className={styles.text}>
                <div>
                    <p className={styles.category}>{categories[item.category]}</p>
                    <h1 className={styles.title}>{item.title}</h1>
                </div>
                <div>
                    {item.count > 0
                    ? <p className={styles.mini_text}>В наличии</p>
                    : <p>Нет в наличии</p>
                    }
                    <h1 className={styles.price}>{item.price + ' р.'}</h1>
                </div>
                <Link to={"/item/" + item.id} className={styles.btn}><p>Подробнее</p></Link>
            </div>
        </div>
    );
};

export default Item;