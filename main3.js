window.onload=function(){
  var modal = document.getElementById("content");
var btn = document.getElementById("openbtn");
var btn1 = document.getElementById("closebtn");
btn.onclick = function() {
  modal.style.display = "block";
}
btn1.onclick = function() {
  modal.style.display = "none";
}
window.onclick = function(event) {
  if(event.target==modal){
 modal.style.display = "none";
}
}
};
