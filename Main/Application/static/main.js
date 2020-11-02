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

$(document).ready(function() {
	var pathname = window.location.pathname;
	$('.navbar-nav >  a[href="'+pathname+'"]').css({'border-bottom':'.3rem solid #F50057'});
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