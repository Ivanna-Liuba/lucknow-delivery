import { Link } from "react-router-dom"

import { ArrowButton } from "../../general/arrow-button/ArrowButton"

import chickenIcon from "../../../assets/order/articles/chicken.svg"
import smileIcon from "../../../assets/order/articles/smile.svg"
import cookieIcon from "../../../assets/order/articles/coockie.svg"
import pizzaIcon from "../../../assets/order/articles/pizza.svg"

import avatar_1 from "../../../assets/order/articles/avatars/avatar_1.svg"
import avatar_2 from "../../../assets/order/articles/avatars/avatar_2.svg"
import avatar_3 from "../../../assets/order/articles/avatars/avatar_3.svg"

import likeIcon from "../../../assets/order/articles/like.svg"

import "./Articles.scss"

const list = [
    {
        id: 1,
        title: "How to cook turkey on Natural Gas",
        background: "#FFF0A5",
        image: chickenIcon,
        alt: "a chicken icon",
        likes: {
            amount: 28,
            avatars: [avatar_1, avatar_2]
        }
    },
    {
        id: 2,
        title: "Corona virus update: 3,43,287+ cases",
        background: "#D6F5FF",
        image: smileIcon,
        alt: "a smile icon",
        likes: {
            amount: 28,
            avatars: [avatar_1, avatar_3]
        }
    },
    {
        id: 3,
        title: "Tasty chunk donutes with chocolate",
        background: "#FFDDF0",
        image: cookieIcon,
        alt: "a cookie icon",
        likes: {
            amount: 28,
            avatars: [avatar_1, avatar_3]
        }
    },
    {
        id: 4,
        title: "Home made double cheez with popcorn respies",
        background: "#C1FFF4",
        image: pizzaIcon,
        alt: "a pizza icon",
        likes: {
            amount: 28,
            avatars: [avatar_1, avatar_3]
        }
    },
]

const additionalStyle = (alt) => {   //разные картинки. Нужно выравнивать
     return (alt !== "a cookie icon") 
        ? null 
        : {   
            transform: "scale(0.5)"
        }
} 

const Article = ({title, background, image, alt, likes, }) => {
    return (
        <div className="Article">
            <div className="Article__image" style={{backgroundColor: background}}>
                <img src={image} alt={alt}  style={additionalStyle(alt)} />
            </div>
            <div className="Article__info">
                <p className="Article__title">{title}</p>
                <div className="Article__feedback">
                    {likes.avatars.map((avatar, index) => <img key={index} src={avatar} alt="avatar item" className="Article__avatar"/>)}
                    <span className="Article__likes">
                        <img src={likeIcon} alt="a like icon"/>   
                        <span>{likes.amount}+</span>
                    </span>
                </div>
            </div>
        </div>
    )
}

export const Articles = () => {
    return (
        <div>
            <div className="Articles__header">
                <h2>Articles</h2>
                <Link to="/articles">
                    <ArrowButton />
                </Link>
            </div>
            {list.map(item => <Article key={item.id} {...item} />)}
        </div>
    )
}