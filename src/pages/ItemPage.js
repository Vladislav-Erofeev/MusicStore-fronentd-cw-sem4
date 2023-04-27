import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import NavBar from "../components/UI/NavBar";
import Footer from "../components/UI/Footer";
import {ItemService} from "../services/ItemService";
import {categories, nullItem, url} from "../constants";
import styles from "../styles/itempage.module.css"

const ItemPage = () => {
    const {id} = useParams()
    const [item, setItem] = useState(nullItem)
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        setIsLoading(true)
        const fetch = async () => {
            let data = await ItemService.getById(id)
            setItem(data)
            setIsLoading(false)
        }
        fetch()
    }, [])
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
                                {item.count == 0
                                    ? <p>Нет в наличии</p>
                                    : <p>В наличии</p>
                                }
                                <p>{item.description}</p>
                            </div>
                            <div className={styles.block3}>
                                <h1>{new Intl.NumberFormat('ru').format(item.price)} р.</h1>
                                <p className={styles.bin_btn}>В корзину</p>
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