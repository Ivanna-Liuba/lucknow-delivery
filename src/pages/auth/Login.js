import React, { useContext } from "react"
import { Link } from "react-router-dom"

import { OrderContext } from "../../context/OrderContextProvider"
import { useNav } from "../../hooks/useNav"

import { useFormik } from "formik"
import * as Yup from "yup"

import { getAuth, signInWithEmailAndPassword } from "firebase/auth"
import app from "../../base/firebase"

import { Input } from "../../components/general/input/Input"
import { Button } from "../../components/general/button/Button"

const inputs = [
    {
      label: "Email",
      type: "email", 
      name: "email", 
      id: "email", 
      placeholder: "test@gmail.com", 
    },
    {
      label: "Password",
      type: "password", 
      name: "password", 
      id: "password",
      placeholder: "***************", 
    },
]

const auth = getAuth()

export const Login = () => {
  const { rememberUser, setAuthError } = useContext(OrderContext)
  const { goTo } = useNav()

    const formik = useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      onSubmit: async (values) => {
        await signInWithEmailAndPassword(auth, values.email, values.password)
          .then((userCredential) => {
            const user = userCredential.user;

            if(user) {
              rememberUser(user)
              goTo("/")
            }
          })
          .catch((error) => {
            const errorCode = error.code;

            setAuthError(errorCode)

          });
      },
      
      validationSchema: Yup.object({
        email: Yup.string().email("Invalid email").required("Required"),
        password: Yup.string()
            .matches("(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{6,}", 
            "Must contain at least 6 characters, one uppercase, one lowercase, one number")
            .required("Required")
      })
    })

    return (
        <form onSubmit={formik.handleSubmit}>
            {inputs.map((input, index) => <Input key={index} {...input} formik={{...formik}} />)}
            <Button text="Login" />
            <Link to="/auth/register" className="link">don`t have an account</Link>
        </form>
    )
}