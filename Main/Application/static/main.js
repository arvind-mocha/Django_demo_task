if($('.alert').is(':visible')){
    console.log('hi')
    $('.nav').hide()
    setTimeout(function (){
        $('.alert').css({'animation':'moveUpHide 1s','opacity':'0','display':'none','position':'absolute'})
        $('.nav').show()
    },2000)
}

$(function(){
    $('.land h3').css({'opacity':'0'})
    $('.join').css({'opacity':'0'})
    setTimeout(function (){
        $('.land h3').css({ 'animation': 'moveInRight 2s','opacity':'1'})
        $('.join').css({ 'animation': 'moveInRight 2s','opacity':'1'})
    },1500)
})


$(function(){

    $('.card1').css({'opacity':'0'})
    $('.card2').css({'opacity':'0'})
    $('.card3').css({'opacity':'0'})
    
    var card = $('.card').position().top

    $(document).scroll(function () {
        var scroll = $(this).scrollTop()

        if (scroll >= card-150){
            $('.card1').css({'opacity':'1','animation':'moveMoreUpShow 2s'})
            $('.card2').css({'opacity':'1','animation':'moveMoreDownShow 2s'})
            $('.card3').css({'opacity':'1','animation':'moveMoreUpShow 2s'})
        }
    })
})

$(document).ready(function() {
	var pathname = window.location.pathname;
	$('.navbar-nav >  a[href="'+pathname+'"]').css({'border-bottom':'.3rem solid #F50057'});
})

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        $(".navbar").css({'animation':'moveDownShow 1s','visibility': 'visible'});
    }else{
        $(".navbar").css({'animation':'moveUpHide 1s','visibility': 'hidden'});
    }
  prevScrollpos = currentScrollPos;
}

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