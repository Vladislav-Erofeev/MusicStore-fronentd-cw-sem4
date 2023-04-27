import React from 'react';
import NavBar from "../components/UI/NavBar";
import styles from '../styles/index.module.css'
import Footer from "../components/UI/Footer";

const IndexPage = () => {
    return (
        <div>
        <NavBar />
        <div className={styles.index}>

            <img src={"/images/main_img.png"} className={styles.mainImage}/>
            <h1>Категории</h1>
            <div className={styles.category}>
                <img src="/images/categories/electro.png" width={"20%"} />
                <h1 className={styles.category_name} >Электрогитары</h1>
            </div>
            <div className={styles.category}>
                <img src="/images/categories/acoustic.png" width={"20%"} />
                <h1 className={styles.category_name} >Акустика</h1>
            </div>
            <div className={styles.category}>
                <img src="/images/categories/combo.jpg" width={"25%"} />
                <h1 className={styles.category_name} >Оборудование</h1>
            </div>
            <div className={styles.category}>
                <img src="/images/categories/acessories.jpg" width={"20%"} />
                <h1 className={styles.category_name} >Аксессуары</h1>
            </div>

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
            <Footer />
        </div>
    );
};

export default IndexPage;