import { useContext } from "react"
import { Navigate } from "react-router-dom"
import { OrderContext } from "../context/OrderContextProvider"

export const PrivateRoute = ({children}) => {
    const { user } = useContext(OrderContext)

    if(!user) {
        return <Navigate to="/auth" />
    }

    return children
}