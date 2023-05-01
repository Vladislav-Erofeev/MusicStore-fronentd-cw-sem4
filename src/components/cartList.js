import React from 'react';
import CartItem from "./cartItem";
import styles from "./styles/cart.module.css"

const CartList = ({items, token, remove}) => {
    return (
        <div className={styles.cart}>
            {items.map((item, index) =>
                <CartItem item={item} token={token}
                removeFromArray={remove} index={index} key={item.id} />
            )}
        </div>
    );
};

export default CartList;