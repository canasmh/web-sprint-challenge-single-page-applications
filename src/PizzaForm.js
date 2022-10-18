import React, { useEffect, useState } from "react";
import * as yup from "yup";


const styleDiv = {
    width: "40vw",
    margin: "15px auto",
    textAlign: "center",
    border: "2px solid #990000",
    borderRadius: "8px"
}

const styleImg = {
    width: "100%",
    border: "1px solid #990000"
}

const labelDiv = {
    backgroundColor: "#DDDDDD",
    padding: "12px 8px"
}

const inputDiv = {
    padding: "16px"
}



const submitBtn = {
    fontSize: "1.2rem",
    padding: "0.8rem 3rem",
    backgroundColor: "#FFFFFF",
    border: "2px solid #990000",
    color: "#990000",
    borderRadius: "8px",
    margin: "24px auto"
}

const buttonDiv = {
    textAlign: "center"
}

const initForm = {
    name: '',
    size: '',
    toppings: [],
    instructions: ''
}

const schema = yup.object().shape({
    name: yup.string().required("Please enter a name for the order").min(2, "name must be at least 2 characters"),
    size: yup.string().oneOf(["s", "m", "l", "xl"], "Please select the size of your pie"),
    toppings: yup.array(),
    instructions: yup.string()
})



function PizzaForm() {

    const [formData, setFormData] = useState(initForm)
    const [errors, setErrors] = useState(initForm)

    useEffect(() => {
        console.log(formData)
    }, [formData])

    const setFormErrors = (name, value) => {
        yup.reach(schema, name).validate(value)
            .then(() => setErrors({...errors, [name]: value}))
            .catch((error) => setErrors({...errors, [name]: error.errors[0]}))
    }

    const handleChange = (event) => {
        const name = event.target.name;
        const type = event.target.type;
        const value = event.target.value;

        if (type === "checkbox") {
            if (formData.toppings.includes(value)) {
                const index = formData.toppings.indexOf(value);
                const toppings = formData.toppings
                toppings.splice(index, 1)
                setFormErrors(name, toppings)
                setFormData({
                    ...formData,
                    toppings: toppings
                })
            } else if (formData.toppings.length < 5) {
                setFormErrors(name, [...formData.toppings, value])
                setFormData({
                    ...formData,
                    toppings: [
                        ...formData.toppings,
                        value
                    ]
                })
            }
        } else {
            setFormErrors(name, value)
            setFormData({
                ...formData,
                [name]: value
            })
        }  
    }
    
    return (
        <div style={styleDiv}>
            <h3 style={{color: "#990000"}}>Build Your Own Pizza</h3>
            <img src="https://www.dogtownpizza.com/wp-content/uploads/2019/03/pepperoni-pizza-background.jpg" alt="yummy pizza" style={styleImg}/>
            <form id="pizza-form" style={{textAlign: "left"}}>
                <p style={{marginLeft: "8px"}}>Build your own pizza: </p>
                <div style={labelDiv}>
                    <label htmlFor="name-input"><h4>Please Enter Your Name</h4></label>
                    <p>Required</p>
                </div>
                <div style={inputDiv}>
                    <input 
                        type="text" 
                        id="name-input" 
                        style={{width: "15rem", padding: "12px 4px"}} 
                        name="name" 
                        onChange={handleChange}
                        value={formData.name}
                    />
                </div>
                
                <div style={labelDiv}>
                    <label htmlFor="size-dropdown"><h4>Choice of Size</h4></label>
                    <p>Required</p>
                </div>
                <div style={inputDiv}>
                    <select 
                        id="size-dropdown" 
                        style={{width: "15rem", padding: "12px 4px"}} 
                        name="size"
                        onChange={handleChange}
                    >
                        <option value={null}>Select</option>
                        <option value="s">Small</option>
                        <option value="m">Medium</option>
                        <option value="l">Large</option>
                        <option value="xl">X-Large</option>
                    </select>
                </div>

                <div style={labelDiv}>
                    <h4>Please Select Your Toppings</h4>
                    <p>Select up to 5</p>
                </div>
                <div style={inputDiv}>
                    
                    <input type="checkbox" id="pepperoni" name="toppings" style={{marginRight: "8px"}} value="pepperoni" onChange={handleChange} checked={formData.toppings.includes("pepperoni") ? true : false}></input>
                    <label htmlFor="pepperoni">Pepperoni</label>
                    <br />
                    <input type="checkbox" id="sausage" name="toppings" style={{marginRight: "8px"}} value="sausage" onChange={handleChange} checked={formData.toppings.includes("sausage") ? true : false}></input>
                    <label htmlFor="sausage">Sausage</label>
                    <br />
                    <input type="checkbox" id="chicken" name="toppings" style={{marginRight: "8px"}} value="chicken" onChange={handleChange} checked={formData.toppings.includes("chicken") ? true : false}></input>
                    <label htmlFor="chicken">Chicken</label>
                    <br />
                    <input type="checkbox" id="steak" name="toppings" style={{marginRight: "8px"}} value="steak" onChange={handleChange} checked={formData.toppings.includes("steak") ? true : false}></input>
                    <label htmlFor="steak">Steak</label>
                    <br />
                    <input type="checkbox" id="olives" name="toppings" style={{marginRight: "8px"}} value="olives" onChange={handleChange} checked={formData.toppings.includes("olives") ? true : false}></input>
                    <label htmlFor="olives">Olives</label>
                    <br />
                    <input type="checkbox" id="peppers" name="toppings" style={{marginRight: "8px"}} value="peppers" onChange={handleChange} checked={formData.toppings.includes("peppers") ? true : false}></input>
                    <label htmlFor="peppers">Peppers</label>
                    <br />
                    <input type="checkbox" id="pineapple" name="toppings" style={{marginRight: "8px"}} value="pineapple" onChange={handleChange} checked={formData.toppings.includes("pineapple") ? true : false}></input>
                    <label htmlFor="pineapple">Pineapple</label>
                    <br />
                    <input type="checkbox" id="ham" name="toppings" style={{marginRight: "8px"}} value="ham" onChange={handleChange} checked={formData.toppings.includes("ham") ? true : false}></input>
                    <label htmlFor="ham">Ham</label>
                    <br />
                    <input type="checkbox" id="oregano" name="toppings" style={{marginRight: "8px"}} value="oregano" onChange={handleChange} checked={formData.toppings.includes("oregano") ? true : false}></input>
                    <label htmlFor="oregano">Oregano</label>
                    <br />
                    <input type="checkbox" id="spinach" name="toppings" style={{marginRight: "8px"}} value="spinach" onChange={handleChange} checked={formData.toppings.includes("spinach") ? true : false}></input>
                    <label htmlFor="spinach">Spinach</label>
                </div>
                <div style={labelDiv}>
                    <label htmlFor="special-text"><h4>Special Instructions</h4></label>
                </div>
                <div style={inputDiv}>
                    <textarea rows="3" style={{width: "100%"}} id="special-text" name="instructions" onChange={handleChange} value={formData.instructions}></textarea>
                </div>
                <div style={buttonDiv}>
                    <button style={submitBtn}>Place your Order</button>
                </div>
                
            </form>
        </div>
    )
}

export default PizzaForm;