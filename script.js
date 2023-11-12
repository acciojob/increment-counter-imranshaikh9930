//your JS code here. If required.
const counter = document.querySelector("#counter");
const btn = document.querySelector("#incrementBtn");

let count= 0;
btn.addEventListener("click",function(){

  counter.value = count;
  alert(count)
  count++
  counter.innerText = count
  

})