import { Profile } from "../profile/Profile"
import { Navigation } from "../navigation/Navigation"
import { Delivery } from "../delivery/Delivery"

export const AsideBlock = () => {
    return (
        <aside className="Aside">
            <Profile />
            <Navigation />
            <Delivery />
        </aside>
    )
}