window.skeleton = function(){
  let box1 = document.querySelectorAll('*[skeleton="0"],*[skeleton="1"],*[skeleton="4"],*[skeleton="3"]')
  for(let i = 0;i<box1.length;i++){
    box1[i].innerHTML = ''
    box1[i].style.background = '#ccc'
    box1[i].style.borderRadius = '5px'
  }
}
