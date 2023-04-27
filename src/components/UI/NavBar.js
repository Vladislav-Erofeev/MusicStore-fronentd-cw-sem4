import React, {useEffect, useState} from 'react';
import styles from "./styles/general.module.css";

const NavBar = () => {
    const [isOpened, setIsOpened] = useState(false)
    const [linksStyle, setLinksStyle] = useState(styles.links_closed)

    const changeState = () => {
        if (isOpened) {
            setLinksStyle(styles.links_closed)
            setIsOpened(false)
        }
        else {
            setLinksStyle(styles.links_opened)
            setIsOpened(true)
        }
    }

    return (
        <div>
            <nav>
                <div>
                    <input type="checkbox" className={styles.menu_toggle}  id="toggle">
                    </input>
                    <label for="toggle" className={styles.menu_btn} onClick={changeState}>
                        <span />
                    </label>
                    <img src="images/logo.png" width={40} height={40}/>
                    <h1 className={styles.name}>GuitarStore</h1>
                </div>

                <p>здесь найдётся всё</p>

                <div>
                    <img src="images/search.png" width={30} height={30}/>
                    <img src="images/bin.png" width={30} height={30}/>
                    <img src="images/profile.png" width={30} height={30}/>
                </div>
            </nav>

            <div className={linksStyle}>
                <p>главная</p>
                <p>каталог</p>
                <p>корзина</p>
                <p>профиль</p>
            </div>
        </div>
    );
};

export default NavBar;