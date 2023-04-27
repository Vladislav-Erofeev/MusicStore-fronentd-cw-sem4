import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import IndexPage from "./pages/IndexPage";
import ItemsPage from "./pages/ItemsPage";

const Routing = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<IndexPage />} />
                <Route path={"/items"} element={<ItemsPage />} />
                <Route path={"/item/{:id}"} />
            </Routes>
        </BrowserRouter>
    );
};

export default Routing;