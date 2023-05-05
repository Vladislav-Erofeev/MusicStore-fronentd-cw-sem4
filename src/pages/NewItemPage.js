import Input from "../components/UI/Input";
import styles from "../styles/addNewItem.module.css"
import TextArea from "../components/UI/TextArea";
import NavBar from "../components/UI/NavBar";
import Footer from "../components/UI/Footer";
import {useEffect, useState} from "react";
import {nullItem} from "../constants";
import {ItemService} from "../services/ItemService";
import Modal from "../components/UI/modal";
import Button from "../components/UI/Button";
import Cookies from "js-cookies/src/cookies";

const NewItemPage = () => {
    const [item, setItem] = useState(nullItem)
    const [file, setFile] = useState(null)
    const [isOpened, setIsOpened] = useState(false)
    const token = Cookies.getItem('token')
    const [title, setTitle] = useState("Ошибка")
    const [text, setText] = useState("Упс! что-то пошло не так")

    const save = async () => {
        try {
            let res = await ItemService.save(item, token)
            console.log(res)
            res = await ItemService.loadImage(res, file, token)
            setItem(nullItem)
            setFile(null)
        } catch (e) {
            setIsOpened(true)
            return
        }
        setTitle("Успех")
        setText("Товар успешно загружен")
        setIsOpened(true)
    }

    return (
        <div>
            <Modal title={title}
                   text={text}
                   isOpened={isOpened}
                   setIsOpened={setIsOpened}/>
            <NavBar/>
            <h1 className={styles.title}>Добавить новый товар</h1>
            <div className={styles.form}>
                <Input placeholder={"название"}
                       type={"text"}
                       value={item.title}
                       onChange={e => (setItem({...item, title: e.target.value}))}/>
                <TextArea
                    placeholder={"характеристики"}
                    value={item.description}
                    onChange={e => (setItem({...item, description: e.target.value}))}></TextArea>
                <TextArea placeholder={"описание"}
                          value={item.body}
                          onChange={e => (setItem({...item, body: e.target.value}))}></TextArea>
                <Input placeholder={"количество"}
                       type={"text"}
                       value={item.count}
                       onChange={e => (setItem({...item, count: e.target.value}))}/>
                <Input placeholder={"стоимость"} t
                       ype={"text"}
                       value={item.price}
                       onChange={e => (setItem({...item, price: e.target.value}))}/>
                <select onChange={e => {
                    setItem({...item, category: e.target.value})
                }} className={styles.option}>
                    <option selected disabled>Категория</option>
                    <option value={"ELECTRIC_GUITAR"}>Электрогитара</option>
                    <option value={"ACOUSTIC_GUITAR"}>Акустика</option>
                    <option value={"ACCESSORY"}>Аксессуар</option>
                    <option value={"EQUIPMENT"}>Оборудование</option>
                </select>
                <input type="file" required onChange={(event) => {
                    setFile(event.target.files[0])
                }}/>
                <Button onCLick={() => {save()}} >Добавить</Button>
            </div>
            <Footer/>
        </div>
    );
};

export default NewItemPage;