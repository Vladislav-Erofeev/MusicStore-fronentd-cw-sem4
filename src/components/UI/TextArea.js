import React from 'react';
import styles from "./styles/input.module.css"

const TextArea = (props) => {
    return (
        <textarea className={styles.textArea} {...props}></textarea>
    );
};

export default TextArea;