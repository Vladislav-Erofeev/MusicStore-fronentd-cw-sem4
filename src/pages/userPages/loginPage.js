import React, {useEffect, useState} from 'react';
import NavBar from "../../components/UI/NavBar";
import Footer from "../../components/UI/Footer";
import Input from "../../components/UI/Input";
import styles from "../../styles/loginPage.module.css"
import {Link, useNavigate} from "react-router-dom";
import Cookies from "js-cookies/src/cookies";
import axios from "axios";
import {ProfileService} from "../../services/ProfileService";
import Button from "../../components/UI/Button";

const LoginPage = () => {
    const navigate = useNavigate();
    const token = Cookies.getItem('token');
    const [user, setUser] = useState({
        login: "",
        password: ""
    })
    useEffect( () => {
        const check = async () => {
            try {
                let res = await ProfileService.getProfile(token)
                navigate("/profile")
            } catch (e) {}
        }
        check()
    }, [])

    const login = async () => {
        console.log(user)
        let res = await ProfileService.login(user)
        Cookies.setItem("token", res.token)
        navigate("/profile")
    }
    return (
        <div>
            <NavBar />
                <div className={styles.back}>
                    <div className={styles.login_form}>
                        <h1>Авторизация</h1>
                        <Input placeholder={"Логин"}
                        value={user.login}
                        onChange={(e) => {setUser({...user, login: e.target.value})}}/>
                        <Input type={"password"} placeholder={"Пароль"}
                               value={user.password}
                               onChange={(e) => {setUser({...user, password: e.target.value})}}/>
                        <Button onCLick={() => {login()}}>Войти</Button>
                        <p className={styles.register}>Впервые здесь?
                            <span><Link to={"/registration"} className={styles.register_ling}>Регистрация</Link></span></p>
                    </div>
                </div>
            <Footer />
        </div>
    );
};

export default LoginPage;