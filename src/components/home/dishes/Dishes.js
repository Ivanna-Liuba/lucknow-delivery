import { useState, useContext, useEffect } from "react"
import { OrderContext } from '../../../context/OrderContextProvider'
import { Icon } from "../../home/icon/Icon"

import "./Dishes.scss"

const Dish = ({ image, alt, svgName, title, text, price, choose, unchoose, isChosen,  }) => {
    const [isActive, setIsActive] = useState(isChosen)
    const { isOrdering, isBusketHidden, hideBusket } = useContext(OrderContext)

    useEffect(()=> {
        if(!isOrdering && isActive) {
            setIsActive(false)
        }
    }, [isOrdering])

    useEffect(()=> {
        if(isActive && isBusketHidden) {
            hideBusket(false)
        }
    }, [isActive])

    const onClick = (e) => {
        e.preventDefault()

        if (isActive) {
            setIsActive(false) 
            unchoose()
        } else {
            setIsActive(true) 
            choose()
        }
    }

    return (
        <div className={isActive ? "Dish Dish--active" : "Dish"}>
            <div className="Dish__photo">
                <img src={image} alt={alt} />
            </div>
            {svgName 
                ? <img className="Dish__icon" src={svgName} alt="an icon" />
                : null}
            <div className="Dish__description">
                <h4 className="Dish__title">{title}</h4>
                <p className="Dish__text">{text}</p>
                <p className="Dish__price">${price}</p>
                <button className="Dish__button" onClick={onClick}></button>
            </div>
        </div>
    )
}

export const Dishes = () => {
    const { addDish, deleteDish, filteredDishes } = useContext(OrderContext)
   
    return (
        <div className="Dishes">
            {filteredDishes.map(item => <Dish key={item.id} 
                {...item} 
                choose={()=> addDish(item)}
                unchoose={()=> deleteDish(item)}
                /> )}
        </div>
    )
}