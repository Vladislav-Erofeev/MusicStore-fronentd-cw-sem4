import React, {useState} from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import IndexPage from "./pages/IndexPage";
import ItemListPage from "./pages/ItemListPage";
import ItemPage from "./pages/ItemPage";
import NewItemPage from "./pages/NewItemPage";
import {AuthContext} from "./services/contextHolder";
import LoginPage from "./pages/loginPage";
import ProfilePage from "./pages/ProfilePage";
import RegistrationPage from "./pages/RegistrationPage";
import CartPage from "./pages/CartPage";
import SearchResult from "./pages/searchResult";
import OrderPage from "./pages/orderPage";
import AdminItemsPage from "./pages/adminItemsPage";
import AdminOrdersPage from "./pages/adminOrdersPage";
import ItemList from "./components/ItemList";

const Routing = () => {
    const [auth, setAuth] = useState(false);
    return (
        <AuthContext.Provider value={{
            auth,
            setAuth
        }}>
            <BrowserRouter>
                <Routes>
                    <Route path={"/"} element={<IndexPage/>}/>
                    <Route path={"/items/:category"} element={<ItemListPage/>}/>
                    <Route path={"/items/all"} element={<ItemListPage/>}/>
                    <Route path={"/item/:id"} element={<ItemPage/>}/>
                    <Route path={"/admin"} element={<AdminItemsPage/>}/>
                    <Route path={"/admin/add"} element={<NewItemPage/>}/>
                    <Route path={"/admin/orders"} element={<AdminOrdersPage/>}/>
                    <Route path={"/login"} element={<LoginPage/>}/>
                    <Route path={"/profile"} element={<ProfilePage/>}/>
                    <Route path={"/registration"} element={<RegistrationPage/>}/>
                    <Route path={"/cart"} element={<CartPage/>}/>
                    <Route path={"/search/:query"} element={<SearchResult/>}/>
                    <Route path={"/search"} element={<ItemListPage />}/>
                    <Route path={"/order/:id"} element={<OrderPage/>}/>
                </Routes>
            </BrowserRouter>
        </AuthContext.Provider>
    );
};

export default Routing;