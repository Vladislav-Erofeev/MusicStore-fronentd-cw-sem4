import React, {useEffect, useState} from 'react';
import NavBar from "../components/UI/NavBar";
import Footer from "../components/UI/Footer";
import {useLocation, useParams} from "react-router-dom";
import {ItemService} from "../services/ItemService";
import ItemList from "../components/ItemList";
import styles from "../styles/search.module.css"

const SearchResult = () => {
    const {query} = useParams()
    const [items, setItems] = useState([])
    useEffect(() => {
        const fetch = async () => {
            let res = await ItemService.getSearchResult(query)
            setItems(res)
        }

        fetch()
    }, [query])
    return (
        <div>
            <NavBar />
            <div className={styles.back}>
                <h1 className={styles.title}>Результат поиска</h1>
                <ItemList items={items} />
            </div>
            <Footer />
        </div>
    );
};

export default SearchResult;