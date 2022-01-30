import { useContext } from "react"
import { OrderContext } from '../../../context/OrderContextProvider'

import { Order } from "../order/Order"
import { Response } from "../response/Response"

import "./Busket.scss"

export const Busket = () => {
    const { isOrdering, isBusketHidden, hideBusket } = useContext(OrderContext)

    return (
        <div className={isBusketHidden ? "Busket Busket--hidden" : "Busket"}>
            {isOrdering 
                ? <Order hideBusket={()=> hideBusket(true)}/>
                : <Response /> 
            }
        </div>
    )
}