import React, {useEffect, useState} from 'react';
import NavBar from "../components/UI/NavBar";
import Footer from "../components/UI/Footer";
import cookies from "js-cookies/src/cookies";
import {useNavigate} from "react-router-dom";
import {AdminService} from "../services/adminService";
import ItemList from "../components/ItemList";
import Loader from "../components/UI/loader";

const AdminItemsPage = () => {
    const token = cookies.getItem('token')
    const [items, setItems] = useState([])
    const navigation = useNavigate()
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        setIsLoading(false)
        const fetch = async () => {
            try {
                let res = await AdminService.getItems(token)
                setItems(res)
                setIsLoading(true)
            } catch (e) {
                navigation("/")
            }
        }

        fetch()
    }, [])
    return (
        <div>
            <NavBar />
            {isLoading
            ? <ItemList items={items} />
            : <Loader />}
            <Footer />
        </div>
    );
};

export default AdminItemsPage;