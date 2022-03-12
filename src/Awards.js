import React from "react";

export default function Awards(props){
    return(


        <article>
	
			<div className="header"><li>{props.awTitle}</li></div>
					<text><b>{props.awDate}</b></text>
						<div className="right">
                            <div className="header"><li>{props.awTitle2}</li></div>
					<text><b>{props.awDate2}</b></text>
                        </div>
				
			</article>
			
					
    );
}