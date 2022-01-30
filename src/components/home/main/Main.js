import { Title } from "../../general/title/Title"
import { MenuList } from "../menu-list/MenuList"
import { Filter } from "../filter/Filter"
import { Dishes } from "../dishes/Dishes"
import { Articles } from "../articles/Articles"
import { Discount } from "../discount/Discount"
import { BusketButton } from "../busket-button/BusketButton"
import { Search } from "../search/Search"
import { LogOut } from "../../general/logout/LogOut"

import "./Main.scss"

export const Main = () => {
    return (
        <div className="Main">
            <div className="Main__header">
                <Title>
                    Welcome To Lucknow
                </Title>
                <div className="Main__header-btns">
                    <BusketButton />
                    <Search />
                    <LogOut />
                </div>
            </div>
            <div className="Main__body">
                <div>
                    <MenuList />
                    <Filter />
                    <Dishes />
                </div>
                <div style={{maxWidth: "260px", marginLeft: "15px"}}>
                    <Discount />
                    <Articles />
                </div>
            </div>
        </div>
    )
    
}