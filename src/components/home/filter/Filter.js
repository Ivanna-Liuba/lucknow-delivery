import { useContext } from "react"
import { OrderContext } from "../../../context/OrderContextProvider"

import filterIcon from "../../../assets/order/filter.svg"
import "./Filter.scss"

export const Filter = () => {
    const { filterTitle } = useContext(OrderContext)

    return (
        <div className="Filter">
            <span>{filterTitle} Items</span>
            <img src={filterIcon} alt="filter icon" />
        </div>
    )
}