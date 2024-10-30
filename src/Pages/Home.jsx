import React from 'react';

const Home = () => {
    const nav = (
        <nav>
            <ul>
                <li>
                    <a href="#1">Google</a>
                </li>
            </ul>
        </nav>
    );

    const idade = 26;

    function quadrado(r) {
        return r * r;
    }
    
    const Carro = {
        portas: "4"
    };

  return (
    <div>
        <h1>Home</h1>
        {nav}
        <p>{quadrado(10)}</p>
        <p>{idade >= 30 ? "Adulta" : "Jovem"}</p>
        <p>{Carro.portas}</p>
    </div>
  )
}

export default Home;