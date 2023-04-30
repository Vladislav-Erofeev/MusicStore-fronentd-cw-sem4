import React, {useEffect, useState} from 'react';
import NavBar from "../components/UI/NavBar";
import Footer from "../components/UI/Footer";
import {useNavigate} from "react-router-dom";
import Cookies from "js-cookies/src/cookies";
import {ProfileService} from "../services/ProfileService";
import {nullUser, url} from "../constants";

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
            <h1>Profile</h1>
            <h1>{user.name}</h1>
            {user.url == ""
            ? <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCHxhbtADK2Wfkh6K1nP_2Fp89Sndhuc2j0BhSTXistw&s"
                    width={"200px"} height={"200px"}/>
            : <img src={`${url}/image${user.url}`} width={"200px"} height={"200px"}/>}
            <p onClick={logout}>Выйти</p>
            <Footer />
        </div>
    );
};

export default ProfilePage;