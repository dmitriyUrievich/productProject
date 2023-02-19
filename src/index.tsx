import { render } from 'react-dom'
import { ErrorBoundary } from 'app/providers/ErrorBoundary'
import { ThemeProveder } from 'app/providers/ThemeProvider'
import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import App from './app/App'
import './shared/config/i18n/i18n'

render(
    <BrowserRouter>
        <ErrorBoundary>
            <ThemeProveder>
                <App />
            </ThemeProveder>
        </ErrorBoundary>
    </BrowserRouter>,
    document.getElementById('root'),
)
