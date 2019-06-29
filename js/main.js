window.myDom = {
  getSiblings,
  addClass
}

myDom.getSiblings(item2) // 第一版
item3.getSiblings()  // 第二版


myDom.addClass(item3, { 'a': true, 'b': false, 'c': true }) // 第一版
item2.addClass({ 'a': true, 'b': false, 'c': true }) // 第二版