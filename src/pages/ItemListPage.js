import React, {useEffect, useState} from 'react';
import {ItemService} from "../services/ItemService";
import ItemList from "../components/ItemList";
import NavBar from "../components/UI/NavBar";
import Footer from "../components/UI/Footer";
import styles from "../styles/items.module.css"
import {useNavigate, useParams} from "react-router-dom";
import {categories} from "../constants";
import Cookies from "js-cookies/src/cookies";
import Loader from "../components/UI/loader";

const ItemListPage = () => {
    const {category} = useParams()
    const [isLoading, setIsLoading] = useState(false)
    const [items, setItems] = useState([])

    useEffect(() => {
        setIsLoading(true)
        const fetch = async () => {
            let data = await ItemService.getItems(category)
            setItems(data)
            setIsLoading(false)
        }
        fetch()
    }, [])

    return (
        <div>
            <NavBar/>
            <div  className={styles.back}>
                {category == undefined
                    ?<h1 className={styles.title}>Каталог</h1>
                    : <h1 className={styles.title}>{categories[category.toUpperCase()]}</h1>
                }

                {isLoading
                    ? <Loader />
                    : <ItemList items={items}/>
                }
            </div>
            <Footer/>
        </div>
    );
};

export default ItemListPage;