import React from 'react'
import ReactDOM from "react-dom"
import Header from "./components/header";
import SetBreakLength from "./components/breakLength";
import SetSessionLength from "./components/sessionLength";


ReactDOM.render(
    <div>
    <Header />
    </div>,
    document.querySelector('#title')
)

ReactDOM.render(
    <div>
        <SetBreakLength />
        <SetSessionLength />
    </div>,
    document.querySelector('#app')
)