import React from "react";
import Home from "./Pages/Home";
import Produtos from "./Pages/Produtos";
import Lista from "./Components/Lista";
import Atributos from "./Components/Atributos";
import Compras from "./Components/Compras";
import Cores from "./Components/Cores";
import Effect  from "./Components/Effect";

const App = () => {
    return <div>
        Meu App
        <Home />
        <Produtos />
        <Lista />
        <Atributos />
        <Compras />
        <Cores />
        <Effect />
    </div>
};

export default App;