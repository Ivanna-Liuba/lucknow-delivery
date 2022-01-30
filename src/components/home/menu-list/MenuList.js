import { useContext } from "react"
import { OrderContext } from "../../../context/OrderContextProvider"

import { useActiveItem } from "./../../../hooks/useActiveItem"

import chickenIcon from "./../../../assets/order/menuList/grilled-chicken.svg"
import burgerIcon from "./../../../assets/order/menuList/burger.svg"
import pizzaIcon from "./../../../assets/order/menuList/pizza.svg"
import saladIcon from "./../../../assets/order/menuList/salad.svg"
import donutIcon from "./../../../assets/order/menuList/donut.svg"
import drinksIcon from "./../../../assets/order/menuList/drinks.svg"

import "./MenuList.scss"

const list = [
    {
        id: 1,
        url: chickenIcon,
        alt: "a chicken icon",
        title: "All",
        link: "",
    },
    {
        id: 2,
        url: burgerIcon,
        alt: "a burger icon",
        title: "Burger",
        link: "",
    },
    {
        id: 3,
        url: pizzaIcon,
        alt: "a pizza icon",
        title: "Pizza",
        link: "",
    },
    {
        id: 4,
        url: saladIcon,
        alt: "a salad icon",
        title: "Salads",
        link: "",
    },
    {
        id: 5,
        url: donutIcon,
        alt: "a donut icon",
        title: "Donut",
        link: "",
    },
    {
        id: 6,
        url: drinksIcon,
        alt: "drinks icon",
        title: "Drinks",
        link: "",
    },
]

//картинки разные по размерую. Нужно выравнивать
const additionalStyle = {     
    display: "inline-block",
    marginTop: "20px"
}

const MenuItem = ({id, url, alt, title, activeItem, onClick}) => {
    return (
        <li className={activeItem===id ? "MenuItem MenuItem--active": "MenuItem"}
            onClick={onClick}>
            <img src={url} alt={alt} 
                style={title === "All" || title === "Pizza" ? additionalStyle : null} />
            <span>{title}</span>
        </li>
    )
}

export const MenuList = () => {
    const [activeItem, setActiveItem] = useActiveItem()

    const { filterDishes } = useContext(OrderContext)

    return (
        <ul className="MenuList">
            {list.map(item => <MenuItem key={item.id} 
                {...item} 
                onClick={()=> {
                    filterDishes(item.title)
                    setActiveItem(item.id)
                }}
                activeItem={activeItem}/>)}
        </ul>
    )
}