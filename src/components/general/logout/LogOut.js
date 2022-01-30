import "./LogOut.scss"

import logoutIcon from "../../../assets/order/log-out.svg"

import app  from "../../../base/firebase"
import { getAuth, signOut } from "firebase/auth"

import { useContext } from "react"
import { useNav } from "../../../hooks/useNav"
import { OrderContext } from "../../../context/OrderContextProvider"

const auth = getAuth()

export const LogOut = () => {
    const { goTo } = useNav()
    const { cleanData } = useContext(OrderContext)

    const logOut = async (e) => {
        e.preventDefault()

        await signOut(auth)
        cleanData()
        goTo("/")
    }

    return (
        <div className="Logout" onClick={logOut}>
            <img src={logoutIcon} alt="sign out icon" className="Logout__image"/>
        </div>
    )
}