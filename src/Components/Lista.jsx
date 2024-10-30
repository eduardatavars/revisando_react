import React from 'react';

const Lista = () => {
    const produtos = ["Notebook", "Smartphone", "Tablet"];

  return (
    <div>
        <h1>Lista</h1>
        {produtos.map(item => {
            return <li key={item}>{item}</li>
        })}
    </div>
  )
}

export default Lista;