import React from 'react';
import {categories, url} from "../constants";
import styles from "./styles/item.module.css"
import {Link} from "react-router-dom";

const Item = ({item}) => {

    return (
        <div className={styles.item}>
            <div className={styles.image}>
                <img src={`${url}/image${item.images[0].url}`} height={"100%"}/>
            </div>
            <div className={styles.text}>
                <div>
                    <p className={styles.category}>{categories[item.category]}</p>
                    <h1 className={styles.title}>{item.title}</h1>
                </div>
                <div>
                    {item.count > 1
                        ? <p className={styles.mini_text}>В наличии</p>
                        : <p className={styles.mini_text} style={{color: "#09447a"}}> Нет в наличии</p>
                    }
                    <h1 className={styles.price}>{new Intl.NumberFormat('ru').format(item.price)} р.</h1>
                </div>
                <Link to={"/item/" + item.id} className={styles.btn}><p>Подробнее</p></Link>
            </div>
        </div>
    );
};

export default Item;