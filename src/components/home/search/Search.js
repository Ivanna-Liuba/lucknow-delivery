import searchIcon from "./../../../assets/order/search.svg"
import "./Search.scss"

export const Search = () => {
    return (
        <div className="Search">
            <img src={searchIcon} alt="search icon" className="Search__image"/>
        </div>
    )
}