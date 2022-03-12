import './App.css';
import Me from './me.jpg';
import Card from './Card.js';
import Education from './Education.js';
import Projects from './Projects.js';
import Experiences from './Experiences.js';
import Awards from './Awards.js';

import { FaEnvelope } from "react-icons/fa";
import {FaPhoneAlt} from "react-icons/fa";
import {FaLinkedin} from "react-icons/fa";
import {FaMapPin} from "react-icons/fa";

function App() {
  return (
     <div className="container">
   <header>
		<img className="profile" src={Me} alt="hazel"/>
			<h1> Hazel Anne Yu</h1>
				<ul className="links">
		 <li> <FaEnvelope/><text style={{ marginLeft: '.5rem' }} >hazelanne.yu.iics@ust.edu.ph</text></li>
		 <li> <FaPhoneAlt/> <text style={{ marginLeft: '.5rem' }} >09123456789</text></li>
		 <li> <FaLinkedin/> <text style={{ marginLeft: '.5rem' }}>linkedin.com/in/hazel-anne-o-yu/</text></li>
		 <li> <FaMapPin/> <text style={{ marginLeft: '.5rem' }}>Manila, Philippines</text></li>			
				</ul>				
		</header>

     <div id="side-a" className="side-a">
	   <h2>Education</h2>
			<Education year="2018 - Present"
				school = "University of Santo Tomas"
				level = "College"
			/>
			<Education year="2016 - 2018"
				school = "Chiang Kai Shek College"
				level = "Senior High School"
			/>

			<Card title="Technical Skills" 
			first= "Java and C++"
			second = "PHP, HTML, CSS, JavaScript, Bootstrap, React"
			third = "Firebase, MySQL, "
			fourth = "Photoshop, Figma, Github"/>
		
			<Card title="Personal Skills"
			first= "Collaborative"
			second = "Excellent time management skills"
			third = "Organized and detail-oriented"
			fourth = "Great communication skills"
			/>
			
			<Card title="Certifications"
			first= "CCNAv7: Switching,Routing and Wireless Essentials"
			second = "CCNAv7: Enterprise Networking, Security,and Automation"
			third = "IT Essentials: PCHardware and Software"
			fourth = "CCNA R&S:Introduction to Networks"
			/>
     </div>
    <div id="main" className="main two-column">
  
				 <h2>Projects</h2>
				<Projects projtitle ="XPIRY: A Mobile Tracking Application
					for Expiration Dates for Food and Drug Products"
						projpos= "Quality Assurance Officer (06/2021 - 12/2021)"
						desc= "Performs different testing procedures for the mobile application."
						desc2 ="In charge of accomplishing the document deliverables"			
					/>
				<Projects projtitle ="PROJECT: Mindeli for Mindeli Pizzeria"
						projpos= "System Analyst (08/2020 - 05/2021)"
						desc= "Defines system requirements"
						desc2 ="In charge of accomplishing the system design diagrams for the document"			
					/>	
					 
			
			<h2> Awards</h2>
		 	<Awards awTitle= "DEAN'S LISTER"
			 awDate="4rth Year, 1st Term"
			 awTitle2= "DEAN'S LISTER"
			 awDate2="3rd Year, 2nd Term"
			 />
				<Awards awTitle= "DEAN'S LISTER"
			 awDate="3rd Year, 1st Term"
			 awTitle2= "DEAN'S LISTER"
			 awDate2="2nd Year, 2nd Term"
			 />
			 	<Awards awTitle= "DEAN'S LISTER"
			 awDate="2nd Year, 1st Term"
			 awTitle2= "PASSED HSK LEVEL 4"
			 awDate2="Grade 12 (2017-2018)"
			 />
			
			<h2> Relevant Experiences</h2>
			<Experiences RelPos="Quality Assurance Intern,"
						RelDesc="Xurpas Enterprise INC. (2022-present)"/>
			<Experiences RelPos="ICS Student Council Staff,"
						RelDesc="Finance Team (2019-2020)"/>
			<Experiences RelPos="SITE Staff,"
						RelDesc="Academics and Research Team (2019-2020)"/>
			<Experiences RelPos="Class Secretary,"
						RelDesc="First Year College (2018-2019)"/>
			
         </div>		 
</div>
    
  );
}

export default App;
