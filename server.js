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
 Having 3 years experience with 2 years in areas of Application, Technical, Business, Customer Support and Project Management
Hands-on Experience in Testing and Troubleshooting with the experience of working on different tools like Issue Tracker, Team Forge, BugZilla
Having Professional, Effective Client Communication with Respective internal team on ETL when raising, reporting and handling issues, bugs and resolving them within the given deadline
Handling SLA and escalations from the client, make sure team is responding on time
Have offered Efficient Production Support for many live projects
Proper Documentation of every activity that was performed during the project done by the team
 
 </p>`
 
 
 
    
},
'MyEducation':{
    title:'My Education|Hariharan.V',
heading:'About My Profile',
 Date:'Sep 23,2016',
 content:  `  <p> </p>`
    
},
'MyExperience':{
    title:'My Experience|Hariharan.V',
 heading:'About My Profile',
 Date:'Sep 23,2016',
 content:`<p>
<b>APPLICATION SUPPORT EXECUTIVE (F&A) WIPRO CHENNAI, INDIA AUG ’15 – AUG ‘16</b>
•	Testing frontend applications and troubleshooting 
•	Finding bugs in the application and resolving it by coordinating with respective internal and external stakeholders       
•	 Coordinating with operations /Agents and as a POC providing day to day production support 
•	 Having periodic meeting with client via chat/email/phone and communication precisely about the update 
•	Arranging daily status call with the appropriate team and getting ETL for fixing the issue/getting Information and responding to the client 
•	Handling SLA and Incident management and fixing ETL with the project team w.r.t Man days for development, UAT testing and CUAT testing, go live 
•	Handling tickets and reporting bugs 
•	Performing sanity test after bugs or upgrade is done in CUAT before moving it into production 
•	Arranging client call for them to test the bug/change in CUAT and take any suggestion from the customers to the respective team 
•	Preparing for Go live and make sure the dev/reporting/server team is ready in case of any Production issue 
•	Performing proper production support after moving the project to go live 
•	Tracking bugs and defects in the application/server and maintain a system and record those bugs happened during production hours 
•	Make Sure daily restart of application happens during non-production hours and doing sanity test post restart and also after bugs getting fixed 
•	Creating CR/SR documents for the changes requested by the client 
•	Make Sure UAT/CUAT is up all the time for testing 
•	Making the ticket to be closed on time without breaching the SLA 
•	Understanding the link of each function 
•	Working under tough deadlines since there were 7 process that was handled simultaneously 
•	Use of word and excel for documenting the performed tasks, issues, logs, requests 
•	Maintain documents in repository like SVN 
<br><br/>
<b>TECHNICAL SUPPORT SERVION GLOBAL SOLUTIONS CHENNAI, INDIA APR ’14 – MAY ‘15</b> 
•	Have been technically supporting clients in the “IVR technology” project 
•	Fixing issues for CTI (Computer telephony integration) which is developed in Dotnet and also made new changes to custom CTI within the stipulated time 
•	Raised bugs with CISCO and fixed them, since the IVR technology is based on CISCO integration 
•	Worked in various reporting tools like CUIC report (developed by CISCO) and Servion's customized reporting tool that developed in Dotnet 
•	Have solved many complex logics on a given deadline 
•	Communicating with the clients on a daily basis and understanding their issues 
•	Coordinating with the respective internal team on the deadline and handling SLA 
•	Make sure all the UAT/CUAT are ready for internal and Client testing 
•	Coordinating with the client through Email/Phone on the feedback and communicate to internal team and fix ETL 
•	Creating CR/SR documents for the changes requested by the client 
•	Make sure tickets are closed and SLA not breached 
•	Handling irate clients and resolving the issues within the time period 
•	Maintain Documents in repository like SVN 
<br>
<br/>
<b>WEBSITE DESIGNER (TRAINEE) INNOVATA TECHNOLOGIES CHENNAI, INDIA MAY ‘09 – MAR ‘10 </b>
•	Communicating with the clients and getting their requirements 
•	Assisting in creating web templates for clients using ASP.NET 
•	Coordinating with the team and the clients 
•	 Assisting in bringing out an effective website as desired by the clients 
•	Handling daily reports and updates 



</p>` 
},
'MyCertification':{
    title:'My Certification|Hariharan.V',
 heading:'About My Profile',
 Date:'Sep 23,2016',
 content:  `  <p> 
 Basic Presentation Skills Certification from <b>Wipro</b>
 Business and Professional Etiquette Certification from <b>Wipro</b>
 Skill Development at <b>Dr.Reddys Foundation (LAB-S)</b>
 Dotnet Course from <b> Greens Technologies</b>
 Website Designing using <b>ASP.NET, HTML</b>
 MS Office Packages (MS Excel and MS Word).</p>`
}
};

    
    function CreateTemplate(data){
        
        var title= data.title;
        var Date=data.Date;
        var heading =data.heading;
        var content=data.content;
        
   var htmlTemplate=
   
       
   
   
   `
<html >
    <head>
      <title>
     ${title}
         
          
          
      </title> 
      
       <meta name="viewport" content="width=device-width,initial-scale=1.0"/>
       <link href="/ui/style.css" rel="stylesheet" />
      
        
    </head>
    <body>
         <div class="container">
            <div class="row">
            
             <a href='/'> Home</a>|
             
            <a href="MyEducation">My Education</a>|
         <a href="MyExperience">My Experience</a>|
         <a href="MyCertification">My Certification</a>|
           
        
        <hr/>
         <h3>
         ${heading}
               
                
            </h3>
        <div>
   
            ${Date}
           
           
        </div>
        <div>
            
            
            
          ${content}
        </div>
       </div>  
    </body>
</html>
`;
return htmlTemplate;

}
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
app.get('/:ProfileofHari', function (req,res){
    //ProfileofHari= The content of First Page (About)
    //profile(ProfileofHari)=The content object of About
    var ProfileofHari=req.params.ProfileofHari; 
    //Index in the profile object
res.send(CreateTemplate(profiles[ProfileofHari]));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/Hariharan.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'Hariharan.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
