import "./OrderItem.scss"

export const OrderItem = ({image, title, text, amount, price, background}) => {
    return (
        <div className="OrderItem">
            <div className="OrderItem__image" style={{backgroundColor: background}}>
                <img src={image} alt="food icon" />
            </div>
            <div className="OrderItem__info">
                    <h5 className="OrderItem__title">{title}</h5>
                    <p className="OrderItem__text">{text}</p>
                </div>
            <div>
                <span>x{amount}</span>
                <span className="OrderItem__price">${price}</span>
            </div>
        </div>
    )
}