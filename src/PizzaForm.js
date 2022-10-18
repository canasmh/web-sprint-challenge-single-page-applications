import React from "react";


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

function PizzaForm() {
    
    return (
        <div style={styleDiv}>
            <h3 style={{color: "#990000"}}>Build Your Own Pizza</h3>
            <img src="https://www.dogtownpizza.com/wp-content/uploads/2019/03/pepperoni-pizza-background.jpg" alt="yummy pizza" style={styleImg}/>
            
            <form id="pizza-form" style={{textAlign: "left", padding: "8px 16px"}}>
            <p>Build your own pizza: </p>

            </form>
        </div>
    )
}

export default PizzaForm;