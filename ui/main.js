console.log('Loaded!');
//  Animation in moving the picture Main_Text div
var element=document.getElementById('Main_Text');

var img=document.getElementById('Hari');

var marginLeft=0;
var marginRight=0;

function MoveRight ()
{
 marginLeft=marginLeft + 1;
 
 img.style.marginLeft=marginLeft + 'px';
    
    
}

img.onclick=function(){

var interval=setInterval (MoveRight , 50 );

};

function MoveLeft ()
{
 marginRight = marginRight + 1;
 
 img.style.marginLeft=marginRight+ 'px';
    
    
}

img.onclick=function(){

var interval=setInterval (MoveLeft , 50 );
};
//img.onclick=function(){ img.style.marginLeft='100px';

//----------------------------------------------------------------------------

// This is A JS file for login and logout
   
  
  
