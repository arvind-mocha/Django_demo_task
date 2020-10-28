if($('.alert').is(':visible')){
    console.log('hi')
    $('.nav').hide()
    setTimeout(function (){
        $('.alert').css({'animation':'moveUpHide 1s','opacity':'0','display':'none','position':'absolute'})
        $('.nav').show()
    },2000)
}