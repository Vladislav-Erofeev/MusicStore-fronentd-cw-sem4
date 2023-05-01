import React from 'react';
import styles from "./styles/button.module.css"

const Button = ({onCLick,  props, children}) => {
    return (
        <p className={styles.btn} onClick={onCLick} {...props}>{children}</p>
    );
};

export default Button;