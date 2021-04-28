import React from 'react'
import ReactDOM from "react-dom"
import Header from "./components/header";
import SetTimer from "./components/breakLength"




ReactDOM.render(
    <div>
    <Header />
    <SetTimer />
    </div>,
    document.querySelector('#title')
)