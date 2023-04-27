import React from 'react';
import {Link} from "react-router-dom";

const MainPage = () => {
    return (
        <div>
            <h1>Index Page</h1>
            <Link to={"/items"}>Товары</Link>
        </div>
    );
};

export default MainPage;