import React from "react";

const backgroundStyle = {
    background: "linear-gradient( rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7) ), url('https://t4.ftcdn.net/jpg/02/75/92/41/360_F_275924184_GP4ACV80EK8NokxlFaUB2qykpXKrroqx.jpg')",
    height: "80vh",
    width: "100vw",
    color: "#FFFFFF"
}

function Home() {
    return (
        <section style={backgroundStyle}>
            <h2>This is the Home page</h2>
        </section>
    )
}

export default Home;