import React from 'react';
import NavBar from "../components/UI/NavBar";
import styles from '../styles/index.module.css'
import Footer from "../components/UI/Footer";
import {Link} from "react-router-dom";

const IndexPage = () => {
    return (
        <div>
            <NavBar/>
            <div className={styles.index}>

                <img src={"/images/main_img.png"} className={styles.mainImage}/>
                <h1>Категории</h1>
                <Link to={"/items/electric_guitar"} className={styles.category_name}>
                    <div className={styles.category}>
                        <img src="/images/categories/electro.png" width={"20%"}/>
                        <h1>Электрогитары</h1>
                    </div>
                </Link>
                <Link to={"/items/acoustic_guitar"} className={styles.category_name}>
                    <div className={styles.category}>
                        <img src="/images/categories/acoustic.png" width={"20%"}/>
                        <h1>Акустика</h1>
                    </div>
                </Link>
                <Link to={"/items/equipment"} className={styles.category_name}>
                    <div className={styles.category}>
                        <img src="/images/categories/combo.jpg" width={"25%"}/>
                        <h1>Оборудование</h1>
                    </div>
                </Link>
                <Link to={"/items/accessory"} className={styles.category_name}>
                    <div className={styles.category}>
                        <img src="/images/categories/acessories.jpg" width={"20%"}/>
                        <h1>Аксессуары</h1>
                    </div>
                </Link>

                <h1>Подборки</h1>
                <div className={styles.guitarists}>
                    <div>
                        <img src="/images/guitarisrs/hetfield.webp" width={"100%"}/>
                        <p>Джеймс Хэтфилд</p>
                    </div>
                    <div>
                        <img src="/images/guitarisrs/darell.jpg" width={"100%"}/>
                        <p>Даймбег Даррелл</p>
                    </div>
                    <div>
                        <img src="/images/guitarisrs/hammet.jpg" width={"100%"}/>
                        <p>Кирк Хэмметт</p>
                    </div>
                    <div>
                        <img src="/images/guitarisrs/mustain.jpg" width={"100%"}/>
                        <p>Дейв Мастейн</p>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default IndexPage;