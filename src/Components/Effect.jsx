import React, { useEffect, useState } from 'react'

const Effect = () => {
    const [title, setTitle] = useState("Page Title");
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log("teste");
        document.title = title;
    }, [title]);

    console.log("teste fora");

    function handleChange(event) {
        setTitle(event.target.value);
    }
  
    return (
    <div>
        <input type="text" value={title} onChange={handleChange} />
        <button onClick={() => setCount(count + 1)}>{count}</button>
    </div>
  )
}

export default Effect;