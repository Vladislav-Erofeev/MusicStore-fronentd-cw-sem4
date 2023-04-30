import React, {useEffect, useState} from 'react';
import NavBar from "../components/UI/NavBar";
import Footer from "../components/UI/Footer";
import {useNavigate} from "react-router-dom";
import Cookies from "js-cookies/src/cookies";
import {ProfileService} from "../services/ProfileService";
import {nullUser, url} from "../constants";
import styles from "../styles/profile.module.css"

const ProfilePage = () => {
    const navigate = useNavigate()
    const [user, setUser] = useState(nullUser)
    const token = Cookies.getItem('token')
    const logout = () => {
        Cookies.removeItem('token')
        navigate("/")
    }

    useEffect(() => {
        const fetch = async () => {
            let res = await ProfileService.getProfile(token)
            setUser(res)
        }

        fetch()
    }, [])

    return (
        <div>
            <NavBar />
            <h1 className={styles.title}>Мой кабинет</h1>
            <div className={styles.main_block}>
                <div className={styles.profile_image}>{user.url == ""
                    ? <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCHxhbtADK2Wfkh6K1nP_2Fp89Sndhuc2j0BhSTXistw&s"
                           width={"100%"}/>
                    : <img src={`${url}/image${user.url}`} width={"100%"}/>}
                </div>
                <div className={styles.info_block}>
                    <h1 className={styles.username}>{user.lastname} {user.name}</h1>
                    <div className={styles.user_info}>
                        <div>
                            <p>{user.phone}</p>
                            <p>{user.mail}</p>
                        </div>
                        <div>
                            <p>г. {user.city}</p>
                            <p onClick={logout}>Выйти</p>
                        </div>
                    </div>
                </div>
            </div>

            <h1 className={styles.orders}>Мои заказы</h1>
            {/*TODO сделать вывод заказов*/}
            <Footer />
        </div>
    );
};

export default ProfilePage;