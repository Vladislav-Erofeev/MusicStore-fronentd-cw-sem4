import React from 'react';
import OrderItem from "./orderItem";

const OrderList = ({orders}) => {
    return (
        <div>
            {orders.map(order => <OrderItem order={order} />)}
        </div>
    );
};

export default OrderList;