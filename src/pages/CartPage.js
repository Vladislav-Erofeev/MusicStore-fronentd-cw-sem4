import React, {useEffect, useState} from 'react';
import NavBar from "../components/UI/NavBar";
import Footer from "../components/UI/Footer";
import Cookies from "js-cookies/src/cookies";
import {useNavigate} from "react-router-dom";
import {ProfileService} from "../services/ProfileService";
import styles from "../styles/cart.module.css"
import CartList from "../components/cartList";

const CartPage = () => {
    const navigation = useNavigate()
    const token = Cookies.getItem('token')
    const [cart, setCart] = useState([])
    const [sum, setSum] = useState(0)

    useEffect(() => {
        const fetch = async () => {
            try {
                let cart = await ProfileService.getCart(token)
                setCart(cart)
                let sum = 0
                for (let i = 0; i < cart.length; i++)
                    sum += cart[i].price
                setSum(sum)
            } catch (e) {
                navigation("/login")
            }
        }
        fetch()
    }, [])

    const remove = (id) => {
        let newCart = cart
        newCart.splice(id, 1)
        setCart([...newCart])
        let sum = 0
        for (let i = 0; i < cart.length; i++)
            sum += cart[i].price
        setSum(sum)
        console.log(cart)
    }

    return (
        <div>
            <NavBar/>
            <div className={styles.back}>
                <h1 className={styles.title}>Корзина</h1>
                {cart.length == 0
                    ? <h1 className={styles.empty}>У вас нет товаров в корзине</h1>
                    : <></>}
                <CartList items={cart} token={token} remove={remove}/>
                <div className={styles.order_info}>
                    <h1 className={styles.cart_title}>ВАШ ЗАКАЗ</h1>
                    <div className={styles.info}>
                        <div>
                            <p>{cart.length} товаров</p>
                            <p>Итого</p>
                        </div>
                        <div>
                            <p>{new Intl.NumberFormat('ru').format(sum)} р.</p>
                            <p>{new Intl.NumberFormat('ru').format(sum)} р.</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default CartPage;