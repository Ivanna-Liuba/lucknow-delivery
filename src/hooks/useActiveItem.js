import { useState } from "react"

export const useActiveItem = (defaultItem = 1) => {
    const [activeItem, setActiveItem] = useState(defaultItem)

    const clickHandler = (id) => {
        setActiveItem(id)
    }

    return [activeItem, clickHandler]
}