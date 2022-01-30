import { useContext } from "react"
import { OrderContext } from "../../../context/OrderContextProvider"

import "./OrderBtn.scss"

export const OrderBtn = ({children}) => {
    const { processOrder } = useContext(OrderContext)

    return (
        <button className="OrderBtn" onClick={(e)=> {
            e.preventDefault()
            processOrder()
        }}>
            {children}
        </button>
    )
}