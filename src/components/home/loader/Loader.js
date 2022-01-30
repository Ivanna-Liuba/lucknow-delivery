import { useContext, useState, useEffect } from "react"
import { OrderContext } from "../../../context/OrderContextProvider"

import "./loader.scss"

import grapesIcon from "../../../assets/enter/grapes.png"
import foodIcon from "../../../assets/order/discount/food.png"

export const Loader = () => {
    const [isHidden, setIsHidden] = useState(false)
    const { user } = useContext(OrderContext)

    useEffect(()=> {
        if(user) {
            setIsHidden(true)
        }
    }, [user])

    return (
        <div className={isHidden ? "Loader Loader--hidden" : "Loader"}>
            <div className="Loader__content">
                <h2>Yelp App</h2>
                <p>developed by Ivanna Liuba</p>
                <img src={grapesIcon} alt="grapes icon" />
                <img src={foodIcon} alt="food icon" />
            </div>
            <div className="Loader__opener Loader__opener--one"></div>
            <div className="Loader__opener Loader__opener--two"></div>

            
        </div>
    )
}
