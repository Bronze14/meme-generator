import React from "react"
import Troll from "../images/Troll Face.png"


export default function Header(){
    return (
        <div className="Header--bar">
            <img src={Troll}/>
            <h1>Meme Generator</h1>
            <h2>React Course - Project 3</h2>
        </div>
    )
}