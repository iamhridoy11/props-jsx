import React from "react";

const MAX_NAME_LENGTH_TO_SHOW = 6;
export default function Person({name, age, hobbies }){
    const voteText = (age >= 18 ? "Go Vote" : "Go Study")
    
    const hobbiesList = hobbies.map(hobby => <li>{hobby}</li>)

    return(
        <>
            <p>Learn some information about this person:</p>
            <ul>
                <li>Name: {name.slice(0, MAX_NAME_LENGTH_TO_SHOW)}</li>
                <li>Age: {age}</li>
                <li>Hobbies:
                    <ul>
                        <li>{hobbiesList}</li>
                    </ul>
                        
                </li>
            <ul>
                
                    
            </ul>
            </ul>
            <h3>{voteText}</h3>
        </>
    )
}