import React from 'react';

const Compras = () => {
    const [count, setCount] = React.useState(0);
    // const count = 0;

    function handleClick() {
        setCount(count + 1);
    }
    return (
    <div>
        <h1>Comprass</h1>
        <button onClick={handleClick}>Comprar: {count}</button>
        <p>{count * 20}</p>
    </div>
  )
}

export default Compras;