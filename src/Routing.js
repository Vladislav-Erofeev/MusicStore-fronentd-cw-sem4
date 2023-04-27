import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import IndexPage from "./pages/IndexPage";
import Items from "./pages/Items";

const Routing = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<IndexPage />} />
                <Route path={"/items"} element={<Items />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Routing;