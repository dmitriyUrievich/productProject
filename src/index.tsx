import {render} from "react-dom";
import App from "./App";
import {BrowserRouter} from "react-router-dom";
import ThemeProveder from "./Theme/ThemeProveder";
render(
    <BrowserRouter>
        <ThemeProveder>
            <App/>
        </ThemeProveder>
    </BrowserRouter>,
    document.getElementById('root')
)
