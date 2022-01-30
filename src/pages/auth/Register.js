import { useContext } from "react"
import { OrderContext } from "../../context/OrderContextProvider"
import { useNav } from "../../hooks/useNav"

import { useFormik } from "formik"
import * as Yup from "yup"

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import app from "../../base/firebase"

import { Input } from "../../components/general/input/Input"
import { Button } from "../../components/general/button/Button"

const inputs = [
    {
      label: "Email",
      type: "email", 
      name: "email", 
      placeholder: "Email", 
    },
    {
      label: "Password",
      type: "password", 
      name: "password", 
      placeholder: "***************", 
    },
    {
      label: "Confirm password",
      type: "password", 
      name: "confirmPassword", 
      placeholder: "***************", 
    },
]

const auth = getAuth()

export const Register = () => {
  const { goTo } = useNav()
  const { setAuthError } = useContext(OrderContext)

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      confirmPassword: ""
    },

    onSubmit: async (values) => {
      try {
        await createUserWithEmailAndPassword(auth, values.email, values.password)
        formik.resetForm()
        goTo("./auth")
      } catch (error) {
          const errorCode = error.code;

          setAuthError(errorCode)

      }
    },

    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email").required("Required"),
      password: Yup.string()
            .matches("(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{6,}", 
            "Must contain at least 6 characters, one uppercase, one lowercase, one number")
            .required("Required"),
      confirmPassword: Yup
          .string()
          .required("Required")
          .oneOf([Yup.ref("password"), null], "Passwords must match")
    })
  })

    return (
        <form onSubmit={formik.handleSubmit}>
            {inputs.map((input, index) => <Input key={index} {...input} formik={{...formik}} />)}
            <Button text="Register" />
        </form>
    )
}