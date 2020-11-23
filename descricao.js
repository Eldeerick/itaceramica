$(document).ready(function(){
    $(".box-success").hide();
});

$("#button-buy").click(function() {
    $(".box-success").fadeIn();
})