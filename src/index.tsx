import {render} from "react-dom";
import App from "./app/App";
import {ThemeProveder} from "app/providers/ThemeProvider";
import React from "react";
import {BrowserRouter} from "react-router-dom";
import "./shared/config/i18n/i18n"


render(
    <BrowserRouter>
        <ThemeProveder>
            <App/>
        </ThemeProveder>
    </BrowserRouter>,
    document.getElementById('root')
)
