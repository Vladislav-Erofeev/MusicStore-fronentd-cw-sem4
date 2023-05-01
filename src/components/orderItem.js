import React from 'react';
import {orderStatus} from "../constants";
import styles from "./styles/orderItem.module.css"

const OrderItem = ({order}) => {
    return (
        <div className={styles.item}>
            <h1>Заказ #{order.id}</h1>
            {order.satus === "RECEIVED"
                ?<p className={styles.done}>Статус: {orderStatus[order.status]}</p>
                :<p className={styles.status}>Статус: {orderStatus[order.status]}</p>
            }

            <p>Дата: {order.orderDate.substring(0, 10)}</p>
            <p>Стоимость: {new Intl.NumberFormat('ru').format(order.price)} р.</p>
            <p>Адрес: {order.address}</p>
        </div>
    );
};

export default OrderItem;