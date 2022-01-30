import { useActiveItem } from "./../../../hooks/useActiveItem"
import { NavItem } from "../nav-item/NavItem"

import "./Navigation.scss"

const navList = [
    {
        id: 1,
        title: "Home",
        link: "/",
        svgName: "home"
    },
    {
        id: 2,
        title: "Menu",
        link: "/menu",
        svgName: "menu"
    },
    {
        id: 3,
        title: "Trending",
        link: "/trending",
        svgName: "fire"
    },
    {
        id: 4,
        title: "Setting",
        link: "/settings",
        svgName: "setting"
    },
]

export const Navigation = () => {
    const [activeItem, setActiveItem] = useActiveItem(Number(localStorage.getItem("activeNavLink")) || 1)

    const changeActiveItem = (id) => {
        localStorage.setItem("activeNavLink", id)
        setActiveItem(id)
    }

    return (
        <nav className="Navigation">
            <ul>
                {navList.map(item =>  <NavItem
                    key={item.id} 
                    {...item} 
                    setActiveItem={()=> changeActiveItem(item.id)}
                    activeItem={activeItem} /> 
                )}
            </ul>
        </nav>
    )
}