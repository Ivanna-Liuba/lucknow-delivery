import { useContext } from "react"
import { OrderContext } from '../../../context/OrderContextProvider'

import { ArrowButton } from "../../general/arrow-button/ArrowButton"
import  { OrderBtn } from "../../general/order-btn/OrderBtn"
import { OrderItem } from "../order-item/OrderItem"

import "./Order.scss"

export const Order = () => {
    const { order, totalPrice, hideBusket } = useContext(OrderContext)

    return (
        <div className="Order">
            <div className="Order__header">
                <h2>Basket</h2>
                <ArrowButton hideBusket={()=> hideBusket(true)} />
            </div>
            <div className="Order__info">
                {order.length 
                    ? order.map(item => <OrderItem key={item.id} {...item} />)
                    : <p>Oops... You haven't ordered anything yet :(</p>
                }
            </div>
            <OrderBtn >
                Order - ${totalPrice}
            </OrderBtn>
        </div>
    )
}