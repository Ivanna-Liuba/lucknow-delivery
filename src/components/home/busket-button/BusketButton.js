import { useContext } from "react"
import { OrderContext } from '../../../context/OrderContextProvider'

import cartIcon from "../../../assets/order/cart.svg"
import "./BusketButton.scss"

export const BusketButton = () => {
    const { hideBusket } = useContext(OrderContext)

    return (
        <div className="BusketButton" onClick={()=> hideBusket(false)}>
            <img src={cartIcon} alt="cart icon" className="BusketButton__image" />
            <div className="BusketButton__indicator"></div>
        </div>
    )
}