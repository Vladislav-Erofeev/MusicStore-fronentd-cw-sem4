import React from 'react';
import OrderItem from "./orderItem";
import {Link} from "react-router-dom";

const OrderList = ({orders}) => {
    return (
        <div>
            {orders.length == 0
                ? <h1 style={{textAlign: "center", fontFamily: "Roboto", fontSize: "17pt", marginTop: "15px", fontWeight: "1"}}>У вас нет заказов</h1>
                :orders.map(order =>
                    <Link to={`/order/${order.id}`} style={{textDecoration: "none", color: "black"}}>
                        <OrderItem order={order} />
                    </Link>)
            }

        </div>
    );
};

export default OrderList;