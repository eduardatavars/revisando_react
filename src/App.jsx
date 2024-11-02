import React from "react";
import Home from "./Pages/Home";
import Produtos from "./Pages/Produtos";
import Lista from "./Components/Lista";
import Atributos from "./Components/Atributos";
import Compras from "./Components/Compras";
import Cores from "./Components/Cores";

const App = () => {
    return <div>
        Meu App
        <Home />
        <Produtos />
        <Lista />
        <Atributos />
        <Compras />
        <Cores />
    </div>
};

export default App;