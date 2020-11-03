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

$(function(){

    $('#books .books__text').css({'opacity':'0'})
    $('#books .bbox').css({'opacity':'0'})
    $('#boards .books__text').css({'opacity':'0'})
    $('#boards .bbox').css({'opacity':'0'})

    var books = $('#books').position().top
    var board = $('#boards').position().top

    $(document).scroll(function () {
        var scroll = $(this).scrollTop()

        //-----    PROJECTS    -----//

        if (scroll >= books-150){
            $('#books .books__text').css({'opacity':'1','animation':'moveRightCenterShow 2s'})
            $('#books .bbox').css({'opacity':'1','animation':'moveLeftCenterShow 2s'})
        }

        if (scroll >= board-150){
            $('#boards .books__text').css({'opacity':'1','animation':'moveRightCenterShow 2s'})
            $('#boards .bbox').css({'opacity':'1','animation':'moveLeftCenterShow 2s'})
        }
    })
})
