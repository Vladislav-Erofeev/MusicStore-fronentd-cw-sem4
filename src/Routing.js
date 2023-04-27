import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import App from "./App";
import MainPage from "./pages/MainPage";
import Items from "./pages/Items";

const Routing = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<MainPage />} />
                <Route path={"/items"} element={<Items />} />
                <Route path={"/app"} element={<App />}/>
            </Routes>
        </BrowserRouter>
    );
};

export default Routing;