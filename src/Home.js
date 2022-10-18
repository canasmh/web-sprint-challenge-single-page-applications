import React from "react";
import { Link } from "react-router-dom";

const backgroundStyle = {
    background: "linear-gradient( rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.85) ), url('https://www.dogtownpizza.com/wp-content/uploads/2019/03/pepperoni-pizza-background.jpg')",
    height: "80vh",
    width: "100vw",
    color: "#FFFFFF",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
}

const buttonStyle = {
    padding: "12px 24px",
    fontSize: "1.6rem",
    backgroundColor: "inherit",
    color: "#FFFFFF",
    border: "2px solid #FFFFFF",
    borderRadius: "16px",
    margin: "0",
    cursor: "pointer"
}

function Home() {
    return (
        <section style={backgroundStyle}>
            <Link to="/pizza"><button id="order-pizza" style={buttonStyle}>Order a Pizza</button></Link>
        </section>
    )
}

export default Home;