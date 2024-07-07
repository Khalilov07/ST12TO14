import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
// root = <div id="root"></div>

root.render(
    // browserRouter - нужен для того что бы наш приложение работало вместе с библиотекой
    // react-router-dom
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
