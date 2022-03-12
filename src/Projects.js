import React from "react";

export default function Projects(props){
    return(


        <article>
	
			<div className="header">{props.projtitle}</div>
					<text><b>{props.projpos}</b></text>
						
					<li>{props.desc}</li>
					<li>{props.desc2}</li>
				
			</article>
			
					
    );
}