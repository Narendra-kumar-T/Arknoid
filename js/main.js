$(document).ready(function(){
var left_end  = ($(".akroniod-home-wrapper").offset().left);
var window_width= $(".akroniod-home-wrapper")["0"].clientHeight;;
 
var akronoid_element_height = (window_width/40) + "px";

$(".akronoid-element").css("height",akronoid_element_height);

$(document).keydown(function(e){
var left_end  = ($(".akroniod-home-wrapper").offset().left + 2 );
var right_end  = parseInt($(".akroniod-home-wrapper").css("right")); ;
if(e.keyCode == "37"){
var right_value = parseInt($(".akronoid-pod").css("left"));
var end_left = $(".akronoid-pod").offset().left;
if(end_left < left_end){
$(".akronoid-pod")["0"].style.left = (0) + "px";
}
else{
if((right_value - 100) < 0){
$(".akronoid-pod")["0"].style.left = (0) + "px";
}
else{
$(".akronoid-pod")["0"].style.left = (right_value - 100) + "px";
}
}
}
if(e.keyCode == "39"){
var right_value = parseInt($(".akronoid-pod").css("left"));
var end_left = $(".akronoid-pod").offset().left;
if(end_left < left_end){
$(".akronoid-pod")["0"].style.left = (0) + "px";
}
else if(end_left >= left_end){
if((right_value + 100) > 880){
$(".akronoid-pod")["0"].style.left = (880) + "px";
}
else{
$(".akronoid-pod")["0"].style.left = (right_value + 100) + "px";
}
}
}
});
});