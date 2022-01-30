import { Link } from "react-router-dom"

import deliveryIcon from "../../../assets/order/delivery/delivery-man.png"
import arrowIcon from "../../../assets/order/delivery/arrow.svg"

import "./Delivery.scss"

export const Delivery = () => {
    return (
        <div className="Delivery">
            <img src={deliveryIcon} alt="an arrow icon" className="Delivery__icon" />
            <p className="Delivery__title">Faster delivery!</p>
            <Link className="Delivery__link" to="/delivery">
                <p>Know More </p>
                <img src={arrowIcon} alt="an arrow icon" />
            </Link>
        </div>
    )
}