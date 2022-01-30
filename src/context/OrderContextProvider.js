import React, { Component, createContext } from "react"

import burgerIcon from "./../assets/order/dishes/burger.png"
import soupIcon from "./../assets/order/dishes/soup.png"
import salmonIcon from "./../assets/order/dishes/salmon.png"
import stewIcon from "./../assets/order/dishes/stew.png"
import riceIcon from "./../assets/order/dishes/rice.png"
import chickenIcon from "./../assets/order/dishes/chicken.png"

import fireIcon from "./../assets/order/dishes/fire.svg"
import likeIcon from "./../assets/order/dishes/like.svg"

import chickenLegsIcon from "./../assets/order/articles/chicken.svg"
import smileIcon from "./../assets/order/articles/smile.svg"
import cookieIcon from "./../assets/order/articles/coockie.svg"
import pizzaIcon from "./../assets/order/articles/pizza.svg"


const OrderContext = createContext()

class OrderContextProvider extends Component {
    state = {
        dishes: [
            {
                id: 1,
                feedbackImage: "",
                feedbackAlt: "",
                image: burgerIcon,
                alt: "a burger icon",
                title: "Burger Wanted",
                text: `Rels, Zoodies, Garnein
                        Sesasam Dessigns,
                        Redeshchein, Avocade`,
                price: 29,
                category: "Burger",
                isChosen: false,
                svgName: fireIcon
            },
            {
                id: 2,
                feedbackImage: "",
                feedbackAlt: "",
                image: soupIcon,
                alt: "a soup icon",
                title: "Butter Chciken",
                text: `Reis, Sous-vide Chicken,
                        Penaut Satay, Babyspian`,
                price: "56",
                category: "Donuts",
                isChosen: false,
                svgName: likeIcon
            },
            {
                id: 3,
                feedbackImage: "",
                feedbackAlt: "",
                image: salmonIcon,
                alt: "a salmon icon",
                title: "Hi, Salmon",
                text: `Rels, Zoodies, Garnein
                        Dressings, Avacode
                        Edanmame, Maris.`,
                price: "69",
                category: "Salads",
                isChosen: false
            },
            {
                id: 4,
                feedbackImage: "",
                feedbackAlt: "",
                image: stewIcon,
                alt: "a stew icon",
                title: "Stew",
                text: `Rels, Zoodies, Garnein
                        Sesasam Dessigns,
                        Redeshchein, Avocade`,
                price: 29,
                category: "Drinks",
                isChosen: false
            },
            {
                id: 5,
                feedbackImage: "",
                feedbackAlt: "",
                image: riceIcon,
                alt: "a rice icon",
                title: "Rice",
                text: `Reis, Sous-vide Chicken,
                        Penaut Satay, Babyspian`,
                price: "56",
                category: "Salads",
                isChosen: false
            },
            {
                id: 6,
                feedbackImage: "",
                feedbackAlt: "",
                image: chickenIcon,
                alt: "a chicken icon",
                title: "Chicken",
                text: `Rels, Zoodies, Garnein
                        Dressings, Avacode
                        Edanmame, Maris.`,
                price: "69",
                category: "Pizza",
                isChosen: false
            },
        ],
        filterTitle: "All",
        filteredDishes: [],
        order: [],
        totalPrice: 0,
        isBusketHidden: true,
        isOrdering: true,
        user: localStorage.getItem("user") 
            ? JSON.parse(localStorage.getItem("user"))
            : null,
        authError: null
    }

    componentDidMount = () => {
        this.setState({
            filteredDishes: this.state.dishes
        })
    }

    componentDidUpdate(prevProps, prevState){
        if(prevState.order !== this.state.order) {
            this.setTotalPrise()

            if( prevState.order.length === 0
                && !this.state.isOrdering ) {
                    this.setState({
                        isOrdering: true,
                    })
            }
        } 
    }

    rememberUser = (data) => {
        this.setState({
            user: data
        })

        localStorage.setItem("user", JSON.stringify(data))
    }

    cleanData = () => {
        this.setState({
            user: null,
            dishes: this.state.dishes.map(dish => {
                return {
                    ...dish,
                    isChosen: false
                }
            }),
            order: [],
            totalPrice: 0,
            isBusketHidden: true,
            isOrdering: true,
        })

        localStorage.setItem("user", JSON.stringify(null))
    }

    setAdditionalParams = (category) => {
        const setDecoration = (img = pizzaIcon, color = "#FFF0A5") => ({
            image: img,
            background: color, 
            amount: 1
        })

        switch(category){
            case "Burger":
                return setDecoration(chickenLegsIcon, "#FFDDF0")
            case "Pizza":
                return setDecoration()
            case "Donut":
                return setDecoration(cookieIcon, "#C1FFF4")
            case "Salads":
                return setDecoration(smileIcon, "#C1FFF4")
            case "Drinks":
            default:
                return setDecoration(smileIcon, "#FFDDF0")
        }
    }

    addDish = (dish) => {
        this.setState({ 
            order: [...this.state.order, {
                ...dish, 
                ...this.setAdditionalParams(dish.category)}
            ]
        })
        this.chooseDish(dish.id)
    }

    deleteDish = (dish) => {
        this.setState({order: this.state.order.filter(item => item.id !== dish.id)})
        this.chooseDish(dish.id)
    }

    chooseDish = (id) => {
        this.setState({
            dishes: this.state.dishes.map(item => {
                if(item.id === id) {
                    return {
                        ...item,
                        isChosen: !item.isChosen
                    }
                }

                return item
            })
        })
    }

    hideBusket = (boolean) => {
        this.setState({isBusketHidden: boolean})
    }


    setTotalPrise = () => {
        if(this.state.order.length) {
            this.setState({
                totalPrice: this.state.order
                    .map(item => Number(item.amount) * Number(item.price))
                    .reduce((agr, item) => agr + item)
            })
        } else {
            this.setState({totalPrice: 0})
        }
    }

    sendOrder = () => {
        this.setState({
            isOrdering: false,
            order: []
        })
    }

    orderMore = () => {
        this.setState({
            isOrdering: true,
            order: [] 
        })
    }

    processOrder = () => {
        if(this.state.order.length && this.state.isOrdering) {
            this.sendOrder()
            return
        } 

        if(!this.state.order.length 
            &&!this.state.isOrdering 
            && !this.state.isBusketHidden) {
                this.hideBusket(true)
            
                setTimeout(()=> {
                    this.orderMore()
                }, 3000)
        }
    }

    filterDishes = (dishCategory) => {
        if(dishCategory === "All") {
            this.setState({
                filterTitle: dishCategory,
                filteredDishes: this.state.dishes
            })
            return
        }

        this.setState({
            filterTitle: dishCategory,
            filteredDishes: this.state.dishes.filter(dish => dish.category === dishCategory)
        })
    }

    setAuthError = (err) => {
        this.setState({
            authError: err
        })
    }

    render() {
        return(
            <OrderContext.Provider value={{
                ...this.state, 
                addDish: this.addDish, 
                deleteDish: this.deleteDish,
                hideBusket: this.hideBusket,
                processOrder: this.processOrder,
                filterDishes: this.filterDishes,
                rememberUser: this.rememberUser,
                cleanData: this.cleanData,
                setAuthError: this.setAuthError
                }}>
                {this.props.children}
            </OrderContext.Provider>
        )
    }
}

export { OrderContext, OrderContextProvider }

