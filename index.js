const items = document.querySelectorAll('.menu-item');


function setAnim(){
let count = 0;
items.forEach(value=>{
  count++;
  value.style.animation = `slideDown ${count}s 1`  
})
}

setAnim()


