var openbtn = document.getElementById("openbtn");
var closebtn = document.getElementById("closebtn");
var b = document.getElementsByTagName("span")[1];
var c = document.getElementsByTagName("span")[2];
var nub1=2;
var nub2;
openbtn.onclick = function(){
  document.getElementById("lbar").style.width = "120px";
}
closebtn.onclick = function(){
  document.getElementById("lbar").style.width = "0px";
}
c.onclick = function(){
  var newTextarea = document.createElement("textarea");
  var newSpan = document.createElement("span");
  var num = document.createTextNode(nub1);
  var context = document.getElementById("context");
  var container_prompt = document.getElementById("container_prompt");
  newTextarea.rows = 1;
  newTextarea.cols = 1;
  newSpan.appendChild(num);
  context.appendChild(newTextarea);
  container_prompt.appendChild(newSpan);
  nub1 = nub1 + 1;
  nub2 = nub1;
 }
 b.onclick = function(){
  var context = document.getElementById("context");
  var container_prompt = document.getElementById("container_prompt");
  var con_child = context.lastChild;
  var pro_child = container_prompt.lastChild;
  if(con_child){
    context.removeChild(con_child);
  }
  if(pro_child){
    container_prompt.removeChild(pro_child);
  }
 }
