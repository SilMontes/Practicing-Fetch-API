//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components
//import { Home } from "./component/home.js";
//import { RutasConParametrosApi } from "./component/ruta-parametros-api";
//import { ArrayMapping } from "./component/mappingarrays";
//import { Todos } from "./component/todolist-breathe";
import { Civilization } from "./component/civilizationApi";

//render your react application
//ReactDOM.render(<Home />, document.querySelector("#app"));
//ReactDOM.render(<RutasConParametrosApi />, document.querySelector("#app"));
//ReactDOM.render(<ArrayMapping />, document.querySelector("#app"));
//ReactDOM.render(<Todos />, document.querySelector("#app"));
ReactDOM.render(<Civilization />, document.querySelector("#app"));
