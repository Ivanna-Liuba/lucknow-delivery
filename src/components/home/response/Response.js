import  { OrderBtn } from "../../general/order-btn/OrderBtn"

import stopwatchIcon from "./../../../assets/order/stopwatch.png"
import "./Response.scss"

export const Response = () => {
    return (
        <div className="Response">
            <div>
                <img src={stopwatchIcon} alt="stopwatch icon" className="Response__image" />
                <p className="Response__text">in the process of cooking...</p>
            </div>
            <OrderBtn>
                Order more
            </OrderBtn>
        </div>
    )
}