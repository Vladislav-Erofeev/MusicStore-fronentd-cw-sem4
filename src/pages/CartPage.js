import React, {useEffect, useState} from 'react';
import NavBar from "../components/UI/NavBar";
import Footer from "../components/UI/Footer";
import Cookies from "js-cookies/src/cookies";
import {useNavigate} from "react-router-dom";
import {ProfileService} from "../services/ProfileService";
import styles from "../styles/cart.module.css"

const CartPage = () => {
    const navigation = useNavigate()
    const token = Cookies.getItem('token')
    const [cart, setCart] = useState([])
    useEffect(() => {
        const fetch = async () => {
            try {
                let cart = await ProfileService.getCart(token)
                setCart(cart)
            } catch (e) {
                navigation("/login")
            }
        }
        fetch()
    }, [])
    return (
        <div>
            <NavBar />
                <h1 className={styles.title}>Корзина</h1>
            <Footer />
        </div>
    );
};

export default CartPage;