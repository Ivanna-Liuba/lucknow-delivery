import { Outlet } from "react-router-dom"
import { Modal } from "./Modal"

export const Auth = ({children}) => {

    return (
        <Modal>
            <Outlet />
        </Modal>
    )
}