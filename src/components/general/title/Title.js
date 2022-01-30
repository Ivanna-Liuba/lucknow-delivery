import emojiIcon from "../../../assets/enter/emoji.svg"
import "./Title.scss"

export const Title = ({children}) => {
    return (
        <h2 className="Title">
            {children}
            <img src={emojiIcon} alt="icon" />
        </h2>
    )
}