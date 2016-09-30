console.log('Loaded!');
//  Animation in moving the picture Main_Text div
//var element=document.getElementById('Main_Text');
var img=document.getElementById('Hari');
var marginLeft=0;

function MoveRight ()
{
 marginLeft=marginLeft+1;
 img.style.marginLeft=marginLeft+'px';
    
    
}

img.onclick=function(){

var interval=setinterval(MoveRight,50);

};
//img.onclick=function(){ img.style.marginLeft='100px';
    
