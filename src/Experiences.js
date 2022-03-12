import React from "react";

export default function Experiences(props){
    return(
			<article>
			<div className="header">{props.RelPos}</div>
					<text>{props.RelDesc}</text>			
			</article>
    );
}