import React, {useEffect, useState} from 'react';
import NavBar from "../../components/UI/NavBar";
import Footer from "../../components/UI/Footer";
import {useParams} from "react-router-dom";
import {OrderService} from "../../services/OrderService";
import Cookies from "js-cookies/src/cookies";
import ItemList from "../../components/ItemList";
import styles from "../../styles/order.module.css"
import Loader from "../../components/UI/loader";

const OrderPage = () => {
    const {id} = useParams()
    const token = Cookies.getItem('token')
    const [order, setOrder] = useState({
        id: 0,
        address: "",
        orderDate: "",
        status: "",
        price: 0,
        owner: "",
        items: []
    })
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        setIsLoading(false)
        const fetch = async () => {
            let data = await OrderService.getOrder(id, token)
            setOrder(data)
            setIsLoading(true)
        }

        fetch()
    }, [])
    return (
        <div>
            <NavBar />
            {isLoading
            ?<>
                    <div className={styles.back}>
                        <h1 className={styles.title}>Заказ #{order.id}</h1>
                        <div className={styles.main_block}>
                            <p>Дата: {order.orderDate.substring(0, 10)}</p>
                            <p>Стоимость: {new Intl.NumberFormat('ru').format(order.price)} р.</p>
                            <p>Адрес: {order.address}</p>
                        </div>
                        <h2 className={styles.items}>Товары</h2>
                        <ItemList items={order.items}></ItemList>
                    </div>
                </>
            :<Loader />}
            <Footer />
        </div>
    );
};

export default OrderPage;