$(document).ready(function(){
    $(".box-success").hide();
});

$("#contato").submit(function() {
    $(".box-success").fadeIn();
})