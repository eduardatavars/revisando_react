import React from 'react';

const Atributos = () => {
    const abre = 8;
    const agora = new Date().getHours();
    const estiloTitulo = {
        color: "blue", 
        fontSize: "1rem", 
        fontFamily: "monospace"
    };

    function handleClick(event) {
        console.log(event)
    }

  return (
    <div>
        <h1>Atributos</h1>
        <h2 style={estiloTitulo}>Empresa</h2>
        <p className={agora > abre ? "aberto" : "fechado"}>Funcionamento</p>

        <button onClick={handleClick}>Clique Aqui</button>
    </div>
  )
}

export default Atributos;