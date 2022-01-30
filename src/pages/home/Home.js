import { Outlet } from "react-router-dom"
import { AsideBlock } from "./../../components/home/aside-block/AsideBlock"
import { Loader } from "../../components/home/loader/Loader"
import { Busket } from "../../components/home/busket/Busket"

export const Home = () => {
    return (
        <>
            <Loader />
            <div className="Home">
                <Busket />
                <AsideBlock />
                <Outlet />
            </div>
        </>
    )
}