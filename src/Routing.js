import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import IndexPage from "./pages/IndexPage";
import ItemListPage from "./pages/ItemListPage";
import ItemPage from "./pages/ItemPage";

const Routing = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<IndexPage/>}/>
                <Route path={"/items/:category"} element={<ItemListPage/>}/>
                <Route path={"/items/all"} element={<ItemListPage/>}/>
                <Route path={"/item/:id"} element={<ItemPage/>}/>
            </Routes>
        </BrowserRouter>
    );
};

export default Routing;