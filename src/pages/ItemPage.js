import React, {useContext, useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import NavBar from "../components/UI/NavBar";
import Footer from "../components/UI/Footer";
import {ItemService} from "../services/ItemService";
import {categories, nullItem, url} from "../constants";
import styles from "../styles/itempage.module.css"
import {AuthContext} from "../services/contextHolder";
import Cookies from "js-cookies/src/cookies";

const ItemPage = () => {
    const {id} = useParams()
    const [item, setItem] = useState(nullItem)
    const [isLoading, setIsLoading] = useState(false)
    const [isInCart, setIsInCart] = useState(false)
    const navigation = useNavigate()
    const token = Cookies.getItem('token')


    useEffect(() => {
        setIsLoading(true)
        const fetch = async () => {
            let data = await ItemService.getById(id)
            setItem(data)
            setIsLoading(false)
            let res = await ItemService.isItemInCart(data.id, token)
            console.log(res)
            setIsInCart(res)
        }
        fetch()
    }, [])

    const add = async (id) => {
        try {
            await ItemService.addItemToCart(id, token)
            setIsInCart(true)
        } catch (e) {
            navigation("/login")
        }
    }

    const remove = async (id) => {
        try {
            await ItemService.removeItemFromCart(id, token)
            setIsInCart(false)
        } catch (e) {
            navigation("/login")
        }
    }
    return (
        <div>
            <NavBar/>
            {isLoading
                ? <h1>Loading</h1>
                : <div className={styles.item}>
                    <h1 className={styles.title}>{item.title}</h1>
                    <div className={styles.item_container}>
                        <img className={styles.image} src={`${url}/image${item.images[0].url}`} width="250px"/>
                        <div>
                            <div className={styles.block1}>
                                <p>{categories[item.category]}</p>
                                <p>Артикул: {item.id}</p>
                                <p>Гарантия: 1 год</p>
                            </div>
                            <div className={styles.block2}>
                                {item.count < 2
                                    ? <p style={{color: "#09447a"}}>Нет в наличии</p>
                                    : <p>В наличии</p>
                                }
                                <p>{item.description}</p>
                            </div>
                            <div className={styles.block3}>
                                <h1>{new Intl.NumberFormat('ru').format(item.price)} р.</h1>
                                {isInCart
                                    ?<p className={styles.bin_btn} onClick={() => {remove(item.id)}} style={{
                                        backgroundColor: "#09447a"
                                    }}>Убрать из корзины</p>
                                    :<p className={styles.bin_btn} onClick={() => {add(item.id)}}>В корзину</p>
                                }

                            </div>
                        </div>
                    </div>
                    <div className={styles.block4}>
                        <h1>Описание</h1>
                        <p>{item.body}</p>
                    </div>
                </div>
            }

            <Footer/>
        </div>
    );
};

export default ItemPage;