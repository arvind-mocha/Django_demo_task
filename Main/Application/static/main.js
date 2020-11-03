if($('.alert').is(':visible')){
    console.log('hi')
    setTimeout(function (){
        $('.alert').css({'animation':'moveUpHide 1s','opacity':'0','display':'none','position':'absolute'})
    },2000)
}

$('#kids').hover(function () {
        console.log('hi')
        $('#kids')[0].play()
        $('.landing__video--display-img').hide()
    }, function () {
        $('#kids')[0].pause()
        $('.landing__video--display-img').show()
    }
);

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
       $(".navbar").css({'animation':'moveDownShow 1s','visibility': 'visible','background-color':'white'});
    }else{
        $(".navbar").css({'animation':'moveUpHide .5s','visibility': 'hidden'});
    }
  prevScrollpos = currentScrollPos;
}

$(document).ready(function() {
	var pathname = window.location.pathname;
	$('.navbar-nav > li >  a[href="'+pathname+'"]').css({'border-bottom':'.3rem solid #F50057'});
})


$(document).on('submit','#message',function(e){
    e.preventDefault();

    $.ajax({
        type: 'POST',
        url: '',
        data:{
            msg : $('#msg').val(),
            csrfmiddlewaretoken:$('input[name=csrfmiddlewaretoken]').val()
        },
        success: function (){
            $("#message")[0].reset();
            window.location.reload(); 
        }
    })
})

$('.study__resource--box-btn').hover(function () {
        $('.study__resource--box-down').css({'opacity':'1','top':'48%'})        
        $('.study__resource--box-img').css({'filter':'blur(.3rem) brightness(80%)'})        
    }, function () {
        $('.study__resource--box-down').css({'opacity':'0','top':'35%'})    
        $('.study__resource--box-img').css({'filter':'blur(0rem) brightness(100%)'})        
    }
);