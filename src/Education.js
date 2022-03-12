import React from "react";

export default function Education(props){
    return(
        <article>				
					<div className="header">{props.school}</div>
					<text>{props.level} ({props.year})</text>
                    <text></text>
		</article>
         );
}