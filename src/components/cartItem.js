import React from 'react';
import {categories, url} from "../constants";
import {Link, useNavigate} from "react-router-dom";
import styles from "./styles/cartItem.module.css"
import {ItemService} from "../services/ItemService";

const CartItem = ({item, token, removeFromArray, index}) => {
    const remove = async (id) => {
        await ItemService.removeItemFromCart(id, token)
        removeFromArray(index)
    }
    return (
        <div className={styles.item}>
            <div className={styles.image}>
                <img src={`${url}/image${item.images[0].url}`} width={"100%"}/>
            </div>
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
                    <h1 className={styles.price}>{new Intl.NumberFormat('ru').format(item.price)} р.</h1>
                </div>
                <p className={styles.btn} onClick={() => {
                    remove(item.id)
                }}>Убрать из корзины</p>
            </div>
        </div>
    );
};

export default CartItem;