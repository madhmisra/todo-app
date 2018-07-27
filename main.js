const input = document.getElementById('input-field');
const addList = document.getElementById('list');
const field = document.getElementsByClassName('todo-list');
function displayInput(){
  input.style.display = 'block';
  console.log('hello');
  
}

function save(){
  var text = document.getElementById('todo-text');
  var p = document.createElement('p');
  var b = document.createElement('button');
  var trash = document.createElement('i');

  trash.className = "fa fa-trash btn";
  trash.style.padding = "0px";
  trash.style.fontSize = "17px";
  b.appendChild(trash);
  b.onclick = function(){del()};
  b.style.cssFloat="right";
  console.log(text.value);
  if(text.value != ""){
    p.innerText = text.value;
    p.appendChild(b);
    addList.appendChild(p);    
    input.style.display = 'none';

  }
  function del(){

    addList.removeChild(b.parentElement);
  }
}
