import React from "react";

export default function Card(props){
  
    return(
      <div  className="main-menu">
       <h2>{props.title}</h2>
       <div className="desc">
        <ul>
          <li>
            <text>{props.first}</text>    
          </li>
          <li>
            <text>{props.second}</text>    
          </li>
          <li>
           <text>{props.third}</text>    
          </li>
          <li>
             <text>{props.fourth}</text>    
          </li>
        </ul>
        <br/>
        </div>
      </div>
       
    
    );
}