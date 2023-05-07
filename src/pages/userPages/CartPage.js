import React, {useEffect, useState} from 'react';
import NavBar from "../../components/UI/NavBar";
import Footer from "../../components/UI/Footer";
import Cookies from "js-cookies/src/cookies";
import {useNavigate} from "react-router-dom";
import {ProfileService} from "../../services/ProfileService";
import styles from "../../styles/cart.module.css"
import CartList from "../../components/cartList";
import Input from "../../components/UI/Input";
import {OrderService} from "../../services/OrderService";
import Loader from "../../components/UI/loader";

const CartPage = () => {
    const navigation = useNavigate()
    const token = Cookies.getItem('token')
    const [cart, setCart] = useState([])
    const [sum, setSum] = useState(0)
    const [address, setAddress] = useState("")
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        setIsLoading(false)
        const fetch = async () => {
            try {
                let cart = await ProfileService.getCart(token)
                setCart(cart)
                let sum = 0
                for (let i = 0; i < cart.length; i++)
                    sum += cart[i].price
                setSum(sum)
                setIsLoading(true)
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

    const createOrder = async () => {
        await OrderService.createOrder(address, token)
        setCart([])
        setSum(0)
        setAddress("")
    }

    return (
        <div>
            <NavBar/>
            <div className={styles.back}>
                <h1 className={styles.title}>Корзина</h1>
                {cart.length == 0
                    ? <h1 className={styles.empty}>У вас нет товаров в корзине</h1>
                    : <></>}
                {isLoading
                ?<CartList items={cart} token={token} remove={remove}/>
                : <Loader />}
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
                {cart.length == 0
                    ? <></>
                    : <div className={styles.creation}>
                        <Input placeholder={"адрес"}
                               value={address}
                               onChange={e => {
                                   setAddress(e.target.value)
                               }}></Input>
                        <p className={styles.create_btn}
                           onClick={createOrder}>Оформить заказ</p>
                    </div>
                }

            </div>
            <Footer/>
        </div>
    );
};

export default CartPage;