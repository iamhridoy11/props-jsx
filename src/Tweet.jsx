import React from "react";
import "./tweet.css"

export default function Tweet({name, username, message, date}){
    return(
        <div className="tweet">
            <span>{name}</span>
            <span className="username">{username}</span>
            <span className="date">{date}</span>
            <p>{message}</p>
        </div>
    )
}