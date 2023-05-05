import React from 'react';
import styles from "./styles/footer.module.css"
import {Link} from "react-router-dom";

const Footer = () => {
    return (
        <div className={styles.footer_container}>
            <div className={styles.footer}>
                <div className={styles.nav}>
                    <h1>навигация</h1>
                    <div className={styles.navigation}>
                        <p>главная</p>
                        <p>поиск</p>
                        <p>товары</p>
                        <p>профиль</p>
                        <p>корзина</p>
                        <Link to={"/admin"}><p>админ</p></Link>
                    </div>
                </div>
                <div className={styles.socials}>
                    <h1>социальные сети</h1>
                    <div className={styles.social}>
                        <img src="/images/social/tg.png" width={50}/>
                        <img src="/images/social/vk.png" width={50}/>
                        <img src="/images/social/github.png" width={50}/>
                    </div>
                </div>
                <div className={styles.contacts}>
                    <h1>контакты</h1>
                    <div className={styles.cont_info}>
                        <p>20031911@mail.ru</p>
                        <p>8 (965) 224-99-76</p>
                        <p> РТУ МИРЭА, пр. Вернадского, 78, Москва</p>
                    </div>
                </div>
                <div className={styles.logo}>
                    <img src="/images/logo.png" width={40} height={40}/>
                    <h1 className={styles.name}>GuitarStore</h1>
                </div>
                <p className={styles.copyright}>2023 © Все права защищены</p>
            </div>
        </div>
    );
};

export default Footer;