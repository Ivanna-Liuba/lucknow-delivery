import grapesIcon from "../../assets/enter/grapes.png"
import leafIcon from "../../assets/enter/leaf.png"
import orangeIcon from "../../assets/enter/orange.png"
import appleIcon from "../../assets/enter/apple.png"

import { Title } from "../../components/general/title/Title"
import { AuthError } from "./authError/AuthError"
export const Modal = (props) => {
    return (
        <section className="Modal">
            <div className="Modal__inner">
                <Title>
                    Welcome To Yelp App
                </Title>
                <div className="Modal__block">
                    {props.children}
                    <AuthError />
                </div>
            </div>
            <img src={grapesIcon} alt="icon" 
                className="Modal__icon Modal__icon--top Modal__icon--left"></img>
            <img src={leafIcon} alt="icon"
                className="Modal__icon Modal__icon--top Modal__icon--right"></img>
            <img src={orangeIcon} alt="icon"
                className="Modal__icon Modal__icon--bottom Modal__icon--right"></img>
            <img src={appleIcon} alt="icon"
                className="Modal__icon Modal__icon--bottom Modal__icon--left"></img>
        </section>
    )
}