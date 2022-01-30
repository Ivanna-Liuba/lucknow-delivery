import foodImage from "../../../assets/order/discount/food.png"
import "./Discount.scss"

export const Discount = () => {
    return (
        <div className="Discount">
            <h3 className="Discount__title">
                -50% Off
            </h3>
            <p>the full price of burgers</p>
            <img src={foodImage} alt="food image" className="Discount__image"/>
        </div>
    )
}