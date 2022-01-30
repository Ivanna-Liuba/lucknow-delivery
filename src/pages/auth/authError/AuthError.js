import {  useContext } from "react"
import { OrderContext } from "../../../context/OrderContextProvider"

import "./AuthError.scss"

export const AuthError = () => {
    const { authError, setAuthError} = useContext(OrderContext)

    const onClick = (e) => {
        e.preventDefault()

        setAuthError(null)
    }

    return (
        <div className={authError ? "AuthError AuthError--shown": "AuthError"}>
            <p>Error: {authError}</p>
            <button  onClick={onClick}>
                OK
            </button>
        </div>
    )
}