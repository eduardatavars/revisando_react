import React, { useState, useEffect } from 'react'

const Cores = () => {
    const [color, setColor] = useState("red");
    const colors = ["red", "blue", "tomato", "green"];
    const style = {
        backgroundColor: color,
        width: "200px",
        height: "200px"
    };

    useEffect(() => {
        console.log("teste")
    }, []);


  return (
    <div>
        <div>{color}</div>
        <div style={style}></div>
        {colors.map(color => (
            <button key={color} onClick={() => setColor(color)}>
                {color}
            </button>
        ))}
        <button onClick={() => setColor("green")}>Verde</button>
    </div>
  )
}

export default Cores