import arrowIcon from "../../../assets/order/delivery/arrow.svg"

import "./ArrowButton.scss"

export const ArrowButton = ({hideBusket}) => { //переробити тільки під одну стрілку
    return ( 
        <button className="Arrow" onClick={hideBusket}>
            <img src={arrowIcon} alt="arrow icon" />
        </button>
    )
}