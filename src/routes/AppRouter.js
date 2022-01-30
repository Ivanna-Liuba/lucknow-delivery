import { useContext } from "react"
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import { OrderContext } from "../context/OrderContextProvider"

import { Home } from "../pages/home/Home"
import { Menu } from "../pages/menu/Menu"
import { Trending } from "../pages/trending/Trending"
import { Settings } from "../pages/settings/Settings"
import { Main } from "../components/home/main/Main"

import { Auth } from "../pages/auth/Auth"
import { Login } from "../pages/auth/Login"
import { Register } from "../pages/auth/Register"

import { Articles } from "../pages/articles/Articles"
import { FastDelivery }from "../pages/fastDelivery/FastDelivery"

import { PrivateRoute } from "./PrivateRoute"

export const AppRouter = () => {
    const { user } = useContext(OrderContext)
    
    return (
        <Router>
            <Routes>
                <Route path="/" element={<PrivateRoute>
                                            <Home />
                                        </PrivateRoute>}>
                    <Route index element={<Main />}/>
                    <Route path="menu" element={<Menu />}/>
                    <Route path="trending" element={<Trending />}/>
                    <Route path="settings" element={<Settings />}/>
                </Route>

                <Route path="/auth" element={user ? <Navigate to="/" /> : <Auth />}>
                    <Route index element={<Login />}/>
                    <Route path="register" element={<Register />}/>
                </Route>

                <Route path="/articles" element={<PrivateRoute>
                                                    <Articles />
                                                </PrivateRoute>} />
                <Route path="/delivery" element={<PrivateRoute>
                                                    <FastDelivery />
                                                </PrivateRoute>} />
                <Route path="*" element={<Navigate to="/auth" />} />
            </Routes>
        </Router>
    )
}