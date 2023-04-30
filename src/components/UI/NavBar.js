import React, {useContext, useEffect, useState} from 'react';
import styles from "./styles/navbar.module.css";
import {Link} from "react-router-dom";
import {AuthContext} from "../../services/contextHolder";

const NavBar = () => {
    const [isOpened, setIsOpened] = useState(false)
    const [linksStyle, setLinksStyle] = useState(styles.links_closed)

    const changeState = () => {
        if (isOpened) {
            setLinksStyle(styles.links_closed)
            setIsOpened(false)
        } else {
            setLinksStyle(styles.links_opened)
            setIsOpened(true)
        }
    }

    return (
        <div className={styles.navigation}>
            <nav>
                <div>
                    <input type="checkbox" className={styles.menu_toggle} id="toggle">
                    </input>
                    <label for="toggle" className={styles.menu_btn} onClick={changeState}>
                        <span/>
                    </label>
                    <img src="/images/logo.png" width={40} height={40}/>
                    <Link to={"/"} style={{textDecoration: "none"}}><h1 className={styles.name}>GuitarStore</h1></Link>
                </div>

                <p>здесь найдётся всё</p>

                <div>
                    <img src="/images/search.png" width={30} height={30}/>
                    <img src="/images/bin.png" width={30} height={30}/>
                    <Link to={"/login"}><img src="/images/profile.png" width={30} height={30}/></Link>
                </div>
            </nav>

            <div className={linksStyle}>
                <Link to={"/"} className={styles.nav_links}><p>главная</p></Link>
                <Link to={"/items/all"} className={styles.nav_links}><p>каталог</p></Link>
                <Link to={"/"} className={styles.nav_links}><p>корзина</p></Link>
                <Link to={"/"} className={styles.nav_links}><p>профиль</p></Link>
            </div>
        </div>
    );
};

export default NavBar;