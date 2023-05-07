import React, {useEffect, useState} from 'react';
import AdminNavBar from "../../components/UI/AdminNavBar";
import Footer from "../../components/UI/Footer";
import {AdminService} from "../../services/adminService";
import OrderList from "../../components/orderList";
import Cookies from "js-cookies/src/cookies";
import {useNavigate} from "react-router-dom";

const AdminOrdersPage = () => {
    const [orders, setOrders] = useState([])
    const token = Cookies.getItem('token')
    const navigation = useNavigate()

    useEffect(() => {
        const fetch = async () => {
            try {
                let res = await AdminService.getOrders(token)
                setOrders(res)
            } catch (e) {
                navigation("/")
            }
        }

        fetch()
    })
    return (
        <div>
            <AdminNavBar/>
            <div style={{minHeight: "76vh"}}>
                <OrderList orders={orders} />
            </div>
            <Footer/>
        </div>
    );
};

export default AdminOrdersPage;