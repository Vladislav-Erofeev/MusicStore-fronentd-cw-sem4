export const url = "http://localhost:8080";

export const categories = {
    ELECTRIC_GUITAR: "Электрогитары",
    ACOUSTIC_GUITAR: "Акустика",
    ACCESSORY: "Аксессуары",
    EQUIPMENT: "Оборудование"
}

export const orderStatus = {
    CREATED: "создан",
    ASSEMBLED: "в пути",
    DELIVERED: "готов к выдаче",
    RECEIVED: "получен"
}

export const nullItem = {
    id: 0,
    title: "",
    description: "",
    body: "",
    price: "",
    count: "",
    category: "",
    images: [{url: ''}]
}

export const nullUser = {
    city:"",
    lastname:"",
    mail:"",
    name:"",
    phone:"",
    url:""
}

export const registerUser = {
    city:"",
    lastname:"",
    mail:"",
    name:"",
    phone:"",
    password:""
}