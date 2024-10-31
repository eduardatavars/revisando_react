import React from "react";
import Home from "./Pages/Home";
import Produtos from "./Pages/Produtos";
import Lista from "./Components/Lista";
import Atributos from "./Components/Atributos";
import Compras from "./Components/Compras";

const App = () => {
    return <div>
        Meu App
        <Home />
        <Produtos />
        <Lista />
        <Atributos />
        <Compras />
    </div>
};

export default App;