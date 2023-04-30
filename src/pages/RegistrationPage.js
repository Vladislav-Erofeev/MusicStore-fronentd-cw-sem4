import React, {useState} from 'react';
import NavBar from "../components/UI/NavBar";
import Footer from "../components/UI/Footer";
import Input from "../components/UI/Input";
import Button from "../components/UI/Button";
import styles from "../styles/registration.module.css"
import {nullUser, registerUser} from "../constants";
import {ProfileService} from "../services/ProfileService";
import Cookies from "js-cookies/src/cookies";
import {useNavigate} from "react-router-dom";

const RegistrationPage = () => {
    const [user, setUser] = useState(registerUser)
    const [file, setFile] = useState(null)
    const navigate = useNavigate()
    const register = async () => {
        let res = await ProfileService.register(user, file)
        setUser(registerUser)
        setFile(null)
        Cookies.setItem('token', res.token)
        navigate("/login")
    }
    return (
        <div>
            <NavBar />
            <div className={styles.back}>
                <div className={styles.form}>
                    <h1>Регистрация</h1>
                    <Input placeholder={"Имя"}
                    value={user.name}
                    onChange={(e)=>{setUser({...user, name: e.target.value})}}/>
                    <Input placeholder={"Фамилия"}
                           value={user.lastname}
                           onChange={(e)=>{setUser({...user, lastname: e.target.value})}}/>
                    <Input placeholder={"Почта"}
                           value={user.mail}
                           onChange={(e)=>{setUser({...user, mail: e.target.value})}}/>
                    <Input placeholder={"Номер телефона"}
                           value={user.phone}
                           onChange={(e)=>{setUser({...user, phone: e.target.value})}}/>
                    <Input placeholder={"Город"}
                           value={user.city}
                           onChange={(e)=>{setUser({...user, city: e.target.value})}}/>
                    <Input type={"password"} placeholder={"Пароль"}
                           value={user.password}
                           onChange={(e)=>{setUser({...user, password: e.target.value})}}/>
                    <input type="file" required onChange={(event) => {
                        setFile(event.target.files[0])
                    }}/>
                    <Button onCLick={() => {register()}}>Зарегистрироваться</Button>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default RegistrationPage;