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
    
$('.form').find('input, textarea').on('keyup blur focus', function (e) {
  
  var $this = $(this),
      label = $this.prev('label');

	  if (e.type === 'keyup') {
			if ($this.val() === '') {
          label.removeClass('active highlight');
        } else {
          label.addClass('active highlight');
        }
    } else if (e.type === 'blur') {
    	if( $this.val() === '' ) {
    		label.removeClass('active highlight'); 
			} else {
		    label.removeClass('highlight');   
			}   
    } else if (e.type === 'focus') {
      
      if( $this.val() === '' ) {
    		label.removeClass('highlight'); 
			} 
      else if( $this.val() !== '' ) {
		    label.addClass('highlight');
			}
    }

});

$('.tab a').on('click', function (e) {
  
  e.preventDefault();
  
  $(this).parent().addClass('active');
  $(this).parent().siblings().removeClass('active');
  
  target = $(this).attr('href');

  $('.tab-content > div').not(target).hide();
  
  $(target).fadeIn(600);
  
});