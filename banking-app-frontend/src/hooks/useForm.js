import { useState } from "react";

export default function useForm(){
    const [values, setValues] = useState({});
    const [errors, setErrors] = useState({});

    const validate = (event, name, value) => {
        event.preventDefault();
        switch(name) {
            case "email":
                if(
                    !new RegExp( /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/).test(value)
                ){
                    setErrors({
                        ...errors,
                        email: "Enter a valid email address"
                    })
                }else{
                    // let newObj = omit(errors, "email");
                    setErrors({
                        ...errors,
                        email: ""
                    });
                }
                break;
            case "password":
                if(
                    !new RegExp(/(?=.*[A-Z]).*$/).test(value)
                ){
                    setErrors({
                        ...errors,
                        password: "The password must contain one or more uppercase characters"
                    })
                }else if(
                    !new RegExp(/(?=.*[a-z]).*$/).test(value)
                ){
                    setErrors({
                        ...errors,
                        password: "The password must contain one or more lowercase characters"
                    })
                }
                else if(
                    !new RegExp(/^\S*$/).test(value)
                ){
                    setErrors({
                        ...errors,
                        password: "The password must not contain white spaces"
                    })
                }
                else if(
                    !new RegExp(/(?=.*\d).*$/).test(value)
                ){
                    setErrors({
                        ...errors,
                        password: "The password must contain one or more numeric values"
                    })
                }
                else if(
                    !new RegExp(/(?=.*[!@#$%^&*]+).*$/).test(value)
                ){
                    setErrors({
                        ...errors,
                        password: "The password must contain one or more special characters"
                    })
                }
                else if(
                    !new RegExp(/(?=^.{8,}$).*$/).test(value)
                ){
                    setErrors({
                        ...errors,
                        password: "The password length must be greater than or equal to 8"
                    })
                }
                else{
                    // let newObj = omit(errors, "email");
                    setErrors({
                        ...errors,
                        password: ""
                    });
                }
                break;
            case "customerId":
            case "accountnumber":
                if(
                    !new RegExp(/^[0-9]+$/).test(value)
                ){
                    setErrors({
                        ...errors,
                        customerId: "CustomerId must only contain numbers."
                    })
                }else{
                    setErrors({
                        ...errors,
                        customerId: ""
                    })
                }
                break;
            case "customername":
                if(
                    !new RegExp(/^[A-Za-z ]+$/).test(value)
                ){
                    setErrors({
                        ...errors,
                        customername: "Customer name must only contain letters"
                    })
                }else{
                    setErrors({
                        ...errors,
                        customername: ""
                    })
                }
                break;
            case "address1":
            case "address2":
                if(
                    !new RegExp(/^[A-za-z0-9,. ]+$/).test(value)
                ){
                    setErrors({
                        ...errors,
                        address: "Address cannot have special characters"
                    })
                }else{
                    setErrors({
                        ...errors,
                        address: ""
                    })
                }
                break;
            case "city":
                if(
                    !new RegExp(/^[A-Za-z]+$/).test(value)
                ){
                    setErrors({
                        ...errors,
                        city: "City cannot have special characters and numbers"
                    })
                }else{
                    setErrors({
                        ...errors,
                        city: ""
                    })
                }
                break;
            case "state":
                if(
                    !new RegExp(/^[A-Za-z]+$/).test(value)
                ){
                    setErrors({
                        ...errors,
                        state: "State cannot have special characters and numbers"
                    })
                }else{
                    setErrors({
                        ...errors,
                        state: ""
                    })
                }
                break;
            case "PIN":
                if(
                    !new RegExp(/^[0-9]{6,6}$/).test(value)
                ){
                    setErrors({
                        ...errors,
                        PIN: "PIN must be six digist and only numbers"
                    })
                }else{
                    setErrors({
                        ...errors,
                        PIN: ""
                    })
                }
                break;
            case "telephone":
                if(
                    !new RegExp(/^[0-9]+$/).test(value)
                ){
                    setErrors({
                        ...errors,
                        telephone: "Telephone number must be only numbers"
                    })
                }else{
                    setErrors({
                        ...errors,
                        telephone: ""
                    })
                }
                break;
            default: 
                break;
        }
    }

    const handleReset = (e) => {
        e.preventDefault();
        setValues({});
        window.location.reload(false);
    }

    const handleChange = (event) => {
        event.preventDefault();

        let name = event.target.name;
        let val = event.target.value;

        validate(event, name, val);

        setValues({
            ...values,
            [name]: val
        })
    }

    return {
        values,
        errors,
        handleReset,
        handleChange
    }
}