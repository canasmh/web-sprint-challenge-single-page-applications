import React, { useState } from "react";


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

const initForm = {
    name: '',
    size: '',
    toppings: [],
    instructions: ''

}

function PizzaForm() {

    const [formData, setFormData] = useState(initForm)
    const [errors, setErrors] = useState(initForm)

    const handleChange = (event) => {
        console.log(`name: ${event.target.name}`)
        console.log(`value: ${event.target.value}`)
        console.log(`type: ${event.target.type}`)
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
                    
                    <input type="checkbox" id="pepperoni" name="toppings" style={{marginRight: "8px"}} value="pepperoni" onChange={handleChange}></input>
                    <label htmlFor="pepperoni">Pepperoni</label>
                    <br />
                    <input type="checkbox" id="sausage" name="toppings" style={{marginRight: "8px"}} value="sausage" onChange={handleChange}></input>
                    <label htmlFor="sausage">Sausage</label>
                    <br />
                    <input type="checkbox" id="chicken" name="toppings" style={{marginRight: "8px"}} value="chicken" onChange={handleChange}></input>
                    <label htmlFor="chicken">Chicken</label>
                    <br />
                    <input type="checkbox" id="steak" name="toppings" style={{marginRight: "8px"}} value="steak" onChange={handleChange}></input>
                    <label htmlFor="steak">Steak</label>
                    <br />
                    <input type="checkbox" id="olives" name="toppings" style={{marginRight: "8px"}} value="olives" onChange={handleChange}></input>
                    <label htmlFor="olives">Olives</label>
                    <br />
                    <input type="checkbox" id="peppers" name="toppings" style={{marginRight: "8px"}} value="peppers" onChange={handleChange}></input>
                    <label htmlFor="peppers">Peppers</label>
                    <br />
                    <input type="checkbox" id="pineapple" name="toppings" style={{marginRight: "8px"}} value="pineapple" onChange={handleChange}></input>
                    <label htmlFor="pineapple">Pineapple</label>
                    <br />
                    <input type="checkbox" id="ham" name="toppings" style={{marginRight: "8px"}} value="ham" onChange={handleChange}></input>
                    <label htmlFor="ham">Ham</label>
                    <br />
                    <input type="checkbox" id="oregano" name="toppings" style={{marginRight: "8px"}} value="oregano" onChange={handleChange}></input>
                    <label htmlFor="oregano">Oregano</label>
                    <br />
                    <input type="checkbox" id="spinach" name="toppings" style={{marginRight: "8px"}} value="spinach" onChange={handleChange}></input>
                    <label htmlFor="spinach">Spinach</label>
                </div>
                <div style={labelDiv}>
                    <label htmlFor="special-text"><h4>Special Instructions</h4></label>
                </div>
                <div style={inputDiv}>
                    <textarea rows="3" cols={50} id="special-text" name="instructions" onChange={handleChange}></textarea>
                </div>
hjl
            </form>
        </div>
    )
}

export default PizzaForm;