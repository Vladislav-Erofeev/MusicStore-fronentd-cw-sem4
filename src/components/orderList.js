import React from 'react';
import OrderItem from "./orderItem";
import {Link} from "react-router-dom";

const OrderList = ({orders}) => {
    return (
        <div>
            {orders.map(order =>
                <Link to={`/order/${order.id}`} style={{textDecoration: "none", color: "black"}}>
                    <OrderItem order={order} />
                </Link>)}
        </div>
    );
};

export default OrderList;