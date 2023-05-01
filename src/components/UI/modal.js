import React, {useEffect, useState} from 'react';
import styles from "./styles/modal.module.css"

const Modal = ({title, text, isOpened, setIsOpened}) => {
    const [style, setStyle] = useState(styles.back_close)

    const close = () => {
        setIsOpened(false)
        setStyle(styles.back_close)
    }

    useEffect(() => {
        if (isOpened)
            setStyle(styles.back_opened)
    }, [isOpened])

    return (
        <div className={style}>
            <div className={styles.window}>
                <h1>{title}</h1>
                <p>{text}</p>
                <p className={styles.btn} onClick={close}>Закрыть</p>
            </div>
        </div>
    );
};

export default Modal;