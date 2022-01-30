import "./Input.scss"

export const Input = ({type = "text", name, placeholder, label, formik }) => {
    const { values, touched, handleChange, handleBlur, errors } = formik

    return (
        <div className="Input">
            <label htmlFor={name}>{label}</label>
            <input type={type}
                    name={name}
                    id={name}
                    placeholder={placeholder} 
                    value={values[name]}
                    onChange={handleChange}
                    onBlur={handleBlur} />
                    
            {touched[name] && errors[name] 
                ? (<p className="Input__error">{errors[name]}</p>)
                : null}
        </div>
    )
}