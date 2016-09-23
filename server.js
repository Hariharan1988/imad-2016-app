var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));
//Java Script page to make one Common HTML Page
var profiles={
 About:{
     
 title:'About Me|Hariharan.V',
 heading:'About My Profile',
 Date:'Sep 23,2016',
 content:  `  <p> This is a content. This is a content. This is a content. This is a content. This is a content. This is a content. This is a content. This is a content. This is a content. This is a content. This is a content. This is a content. This is a content. This is a content. This is a content. </p>
            
            
            <p> This is a content. This is a content. This is a content. This is a content. This is a content. This is a content. This is a content. This is a content. This is a content. This is a content. This is a content. This is a content. This is a content.</p>
            
            <p> This is a content. This is a content. This is a content. This is a content. This is a content. This is a content. This is a content. This is a content. This is a content. This is a content. This is a content. This is a content. This is a content.</p>`
 
 
 
 
 
    
},
MyEducation:{
    title:'My Education|Hariharan.V',
heading:'About My Profile',
 Date:'Sep 23,2016',
 content:  `  <p> This is a content. This is a content. This is a content. This is a content. This is a content. This is a content. This is a content. This is a content. This is a content. This is a content. This is a content. This is a content. This is a content. This is a content. This is a content. </p>
            
            
            <p> This is a content. This is a content. This is a content. This is a content. This is a content. This is a content. This is a content. This is a content. This is a content. This is a content. This is a content. This is a content. This is a content.</p>
            
            <p> This is a content. This is a content. This is a content. This is a content. This is a content. This is a content. This is a content. This is a content. This is a content. This is a content. This is a content. This is a content. This is a content.</p>`
    
},
MyExperience:{
    title:'My Experience|Hariharan.V',
 heading:'About My Profile',
 Date:'Sep 23,2016',
 content:  `  <p> This is a content. This is a content. This is a content. This is a content. This is a content. This is a content. This is a content. This is a content. This is a content. This is a content. This is a content. This is a content. This is a content. This is a content. This is a content. </p>
            
            
            <p> This is a content. This is a content. This is a content. This is a content. This is a content. This is a content. This is a content. This is a content. This is a content. This is a content. This is a content. This is a content. This is a content.</p>
            
            <p> This is a content. This is a content. This is a content. This is a content. This is a content. This is a content. This is a content. This is a content. This is a content. This is a content. This is a content. This is a content. This is a content.</p>`
},
MyCertification:{
    title:'My Certification|Hariharan.V',
 heading:'About My Profile',
 Date:'Sep 23,2016',
 content:  `  <p> This is a content. This is a content. This is a content. This is a content. This is a content. This is a content. This is a content. This is a content. This is a content. This is a content. This is a content. This is a content. This is a content. This is a content. This is a content. </p>
            
            
            <p> This is a content. This is a content. This is a content. This is a content. This is a content. This is a content. This is a content. This is a content. This is a content. This is a content. This is a content. This is a content. This is a content.</p>
            
            <p> This is a content. This is a content. This is a content. This is a content. This is a content. This is a content. This is a content. This is a content. This is a content. This is a content. This is a content. This is a content. This is a content.</p>`
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
      
       <meta name="viewport" content="width-device-width,initial-scale=1"/>
       <link href="/ui/style.css" rel="stylesheet" />
      
        
    </head>
    <body>
        <div class="container">
            <div>
            
            <a href='/'> Home</a>
          </div>  
       
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
app.get('/ProfileofHari', function (req,res){
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
