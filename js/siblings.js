// 第一版
function getSiblings (element) {
  let allChild = element.parentNode.children
  let res = {
    length: 0
  }
  for (let i = 0; i < allChild.length; i++) {
    if (allChild[i] !== element) {
      res[res.length] = allChild[i]
      res.length++
    }
  }
  return res
}


// 第二版 
Node.prototype.getSiblings = function(){
  let allChild = this.parentNode.children
  let res = {length:0}
  for (let i = 0; i < allChild.length; i++) {
    if(allChild[i] !== this){
      res[res.length] = allChild[i]
      res.length++
    }
  }
  return res
}