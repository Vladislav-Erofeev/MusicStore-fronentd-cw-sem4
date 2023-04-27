import React, {useEffect, useState} from 'react';
import {ItemService} from "../services/ItemService";
import {Link} from "react-router-dom";
import ItemList from "../components/ItemList";
import NavBar from "../components/UI/NavBar";
import Footer from "../components/UI/Footer";
import styles from "../styles/items.module.css"

const ItemsPage = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [items, setItems] = useState([])

    useEffect(() => {
        setIsLoading(true)
        const fetch = async () => {
            let data = await ItemService.getItems()
            console.log(data)
            setItems(data)
            setIsLoading(false)
        }
        fetch()
    }, [])
    return (
        <div>
            <NavBar />
            <h1 className={styles.title}>Каталог</h1>
            <ItemList items={items} />
            <Footer />
        </div>
    );
};

export default ItemsPage;