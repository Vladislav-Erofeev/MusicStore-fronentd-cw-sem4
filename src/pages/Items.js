import React, {useEffect, useState} from 'react';
import {ItemService} from "../services/ItemService";
import {Link} from "react-router-dom";
import ItemList from "../components/ItemList";

const Items = () => {
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
            {isLoading
                ? <h1>Loading...</h1>
                : <ItemList items={items} />
            }
            <Link to={"/"}>Главная</Link>
        </div>
    );
};

export default Items;