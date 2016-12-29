var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));
//Java Script page to make one Common HTML Page
var profiles={
 'About':{
     
 title:'About Me|Hariharan.V',
 heading:'About My Profile',
 Date:'Sep 23,2016',
 content:  `  <p> 
 <p>Having 3 years experience with 2 years in areas of Application, Technical, Business, Customer Support and Project Management
Hands-on Experience in Testing and Troubleshooting with the experience of working on different tools like Issue Tracker, Team Forge, BugZilla</p>
<p>Having Professional, Effective Client Communication with Respective internal team on ETL when raising, reporting and handling issues, bugs and resolving them within the given deadline
Handling SLA and escalations from the client, make sure team is responding on time
Have offered Efficient Production Support for many live projects
Proper Documentation of every activity that was performed during the project done by the team</p>
 
 </p>`
 
 
 
    
},
'MyEducation':{
    title:'My Education|Hariharan.V',
heading:'About My Profile',
 Date:'Sep 23,2016',
 content: `<p>
 <h3 class="text-center thin" > My Education  </h3>
			
			<div class="row">
			
				<div class="col-md-3 col-sm-6 highlight" style="background-color:yellow;">
					<div class="h-caption"><h4><u>Masters in Computer Application,St. Josephs College of Engg & Tech
</h4></u></div>
					<div class="h-body text-center">
						<p>Anna University,Chennai India (2010-2013)-CGPA: 6.11

 
 </p>
					</div>
				</div>
				<div class="col-md-3 col-sm-6 highlight"style="background-color:pink;">
					<div class="h-caption"><h4><u>Bachelors in Computer Application,DG Vaishnav College
</h4></u></div>
					<div class="h-body text-center">
						<p>University of Madras Chennai, India(2006-2009)-55% 


  </p>
					</div>
				</div>
				<div class="col-md-3 col-sm-6 highlight"style="background-color:orange;">
					<div class="h-caption"><h4><u>SSLC</h4></u></div>
					<div class="h-body text-center">
						<p>Matriculation Chennai, India (2006)-72%



 </p>
	</div>
	</div>
	
		</div>
 
 </div>
 </div>
 
 </div>
 
 
 
 
 </p>`
 
		
	
 
 
	
 

    
},
'MyExperience':{
    title: 'My Experience|Hariharan.V',
 heading:'About My Profile',
 Date:'Sep 23,2016',
 content:`<p></p>
<b> APPLICATION SUPPORT EXECUTIVE (F&A) WIPRO CHENNAI, INDIA AUG ’15 – AUG ‘16 </b>
<p>•	Testing frontend applications and troubleshooting </p>
<p>•	Finding bugs in the application and resolving it by coordinating with respective internal and external stakeholders</p>       
<p>•	 Coordinating with operations /Agents and as a POC providing day to day production support </p>
<p>•	 Having periodic meeting with client via chat/email/phone and communication precisely about the update </p>
<p>•	Arranging daily status call with the appropriate team and getting ETL for fixing the issue/getting Information and responding to the client </p>
<p>•	Handling SLA and Incident management and fixing ETL with the project team w.r.t Man days for development, UAT testing and CUAT testing, go live </p>
<p>•	Handling tickets and reporting bugs </p>
<p>•	Performing sanity test after bugs or upgrade is done in CUAT before moving it into production </p>
<p>•	Arranging client call for them to test the bug/change in CUAT and take any suggestion from the customers to the respective team </p>
<p>•	Preparing for Go live and make sure the dev/reporting/server team is ready in case of any Production issue </p>
<p>•	Performing proper production support after moving the project to go live </p>
<p>•	Tracking bugs and defects in the application/server and maintain a system and record those bugs happened during production hours</p>
<p>•	Make Sure daily restart of application happens during non-production hours and doing sanity test post restart and also after bugs getting fixed</p> 
<p>•	Creating CR/SR documents for the changes requested by the client </p>
<p>•	Make Sure UAT/CUAT is up all the time for testing </p>
<p>•	Making the ticket to be closed on time without breaching the SLA </p>
<p>•	Understanding the link of each function </p>
<p>•	Working under tough deadlines since there were 7 process that was handled simultaneously </p>
<p>•	Use of word and excel for documenting the performed tasks, issues, logs, requests </p>
<p>•	Maintain documents in repository like SVN </p>
<br><br/>
<b>TECHNICAL SUPPORT SERVION GLOBAL SOLUTIONS CHENNAI, INDIA APR ’14 – MAY ‘15</b> 
<p>•	Have been technically supporting clients in the “IVR technology” project </p>
<p>•	Fixing issues for CTI (Computer telephony integration) which is developed in Dotnet and also made new changes to custom CTI within the stipulated time </p>
<p>•	Raised bugs with CISCO and fixed them, since the IVR technology is based on CISCO integration </p>
<p>•	Worked in various reporting tools like CUIC report (developed by CISCO) and Servion's customized reporting tool that developed in Dotnet </p>
<p>•	Have solved many complex logics on a given deadline </p>
<p>•	Communicating with the clients on a daily basis and understanding their issues </p>
<p>•	Coordinating with the respective internal team on the deadline and handling SLA </p>
<p>•	Make sure all the UAT/CUAT are ready for internal and Client testing </p>
<p>•	Coordinating with the client through Email/Phone on the feedback and communicate to internal team and fix ETL </p>
<p>•	Creating CR/SR documents for the changes requested by the client </p>
<p>•	Make sure tickets are closed and SLA not breached </p>
<p>•	Handling irate clients and resolving the issues within the time period </p>
<p>•	Maintain Documents in repository like SVN </p>
<br>
<br/>
<b>WEBSITE DESIGNER (TRAINEE) INNOVATA TECHNOLOGIES CHENNAI, INDIA MAY ‘09 – MAR ‘10 </b>
<p>•	Communicating with the clients and getting their requirements </p>
<p>•	Assisting in creating web templates for clients using ASP.NET </p>
<p>•	Coordinating with the team and the clients </p>
<p>•	 Assisting in bringing out an effective website as desired by the clients</p> 
<p>•	Handling daily reports and updates </p>`



 
},
'MyCertification':{
    title:'My Certification|Hariharan.V',
 heading:'About My Profile',
 Date:'Sep 23,2016',
 content:  `  <p> 
 <p>Basic Presentation Skills Certification from <b>Wipro</p></b>
 <p>Business and Professional Etiquette Certification from <b>Wipro</p></b>
<p> Skill Development at <b>Dr.Reddys Foundation (LAB-S)</p></b>
<p>Dotnet Course from <b> Greens Technologies</p></b>
<p> Website Designing using <b>ASP.NET, HTML</p></b>
 <p>MS Office Packages (MS Excel and MS Word).</p>
 </p>`
}
};

    
   // Create tempate function to be placed here


app.get('/ui/:index.html', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));// Registration Page
});
app.get('/ui/style2.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style2.css'));
  });
  app.get('/ui/animate.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'animate.css'));
});
 app.get('/ui/demo.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'demo.css'));
});

//app.get('/login.html', function (req, res) {
 // res.sendFile(path.join(__dirname, 'ui', 'login.html'));//Login Page
//});
app.get('/profile.html', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'profile.html'));
});
//app.get('/:ProfileofHari', function (req,res){
    //ProfileofHari= The content of First Page (About)
    //profile(ProfileofHari)=The content object of About
    //var ProfileofHari=req.params.ProfileofHari; 
    //Index in the profile object
//res.send(CreateTemplate(profiles[ProfileofHari]));
//});


//app.get('/ui/main.js', function (req, res) {
  //res.sendFile(path.join(__dirname, 'ui', 'main.js'));
//});
//app.get('/ui/bootstrap.css', function (req, res) {
  //res.sendFile(path.join(__dirname, 'ui', 'bootstrap.css'));
//});
//app.get('/ui/Hariharan.png', function (req, res) {
 // res.sendFile(path.join(__dirname, 'ui', 'Hariharan.png'));
//});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
