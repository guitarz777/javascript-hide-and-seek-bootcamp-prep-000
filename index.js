function getFirstSelector(selector){
  return document.querySelector(selector);
}


function nestedTarget(){
  return document.querySelector('#nested').querySelector('.target');
}


function increaseRankBy(n){
  var a = document.getElementById('app').querySelectorAll('ul.ranked-list li');
  for (let i = 0; i < a.length; i++){
    a[i].innerHTML = parseInt(a[i].innerHTML, 10) + n ;
  }
}


function deepestChild(){
  var a = document.querySelector("#grand-node")
  return a.children[a.length]
  
  
}