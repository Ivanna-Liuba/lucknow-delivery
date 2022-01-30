import { NavLink } from "react-router-dom"

import { Icon } from "../icon/Icon"

import "./NavItem.scss"

export const NavItem = ({svgName, title, link, activeItem, id, setActiveItem}) => {
    return (
        <li className={activeItem===id ? "NavItem NavItem--active": "NavItem"}
            onClick={setActiveItem}>
            <NavLink to={link}>
                <div className = "NavItem__img">
                    <Icon name={svgName} />
                </div>
                <p className="NavItem__title">{title}</p>
            </NavLink> 
        </li>
    )
}

/*
<span className="NavItem__img">
    <img src={url} alt="icon"
</span>
*/