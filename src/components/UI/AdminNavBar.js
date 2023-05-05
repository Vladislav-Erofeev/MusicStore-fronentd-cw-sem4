import React, {useState} from 'react';
import styles from "./styles/navbar.module.css";
import {Link, useNavigate} from "react-router-dom";

const AdminNavBar = () => {
    const [isOpened, setIsOpened] = useState(false)
    const [linksStyle, setLinksStyle] = useState(styles.links_closed)
    const [searchStyle, setSearchStyle] = useState(styles.closed)
    const navigate = useNavigate()
    const [query, setQuery] = useState("")

    const changeState = () => {
        if (isOpened) {
            setLinksStyle(styles.links_closed)
            setIsOpened(false)
        } else {
            setLinksStyle(styles.links_opened)
            setIsOpened(true)
        }
    }

    const openSearchBar = () => {
        setSearchStyle(styles.searchbar)
    }

    const closeSearchBar = () => {
        setSearchStyle(styles.closed)
    }

    const search = (e) => {
        e.stopPropagation()
        navigate(`/search/${query}`)
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

                <p>страница администрирования</p>

                <div>
                    <img onClick={openSearchBar} src="/images/search.png" width={30} height={30}
                         style={{cursor: "pointer"}}/>
                    <Link to={"/cart"}><img src="/images/bin.png" width={30} height={30}/></Link>
                    <Link to={"/login"}><img src="/images/profile.png" width={30} height={30}/></Link>
                </div>
            </nav>

            <div className={linksStyle}>
                <Link to={"/"} className={styles.nav_links}><p>главная</p></Link>
                <Link to={"/admin"} className={styles.nav_links}><p>каталог</p></Link>
                <Link to={"/admin/orders"} className={styles.nav_links}><p>заказы</p></Link>
                <Link to={"/admin/add"} className={styles.nav_links}><p>добавить</p></Link>
            </div>

            <div className={searchStyle} onClick={closeSearchBar}>
                <input onClick={e => e.stopPropagation()}
                       type={"text"} placeholder={"поиск"}
                       value={query}
                       onChange={e => {
                           setQuery(e.target.value)
                       }}/>
                <Link to={`/search/${query}`} style={{textDecoration: "none"}}><p>найти</p></Link>
            </div>
        </div>
    );
};

export default AdminNavBar;