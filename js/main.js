window.myDom = {
  getSiblings,
  addClass
}

// 第一版
myDom.getSiblings(item2)
// 第二版
item3.getSiblings()
// 第三版
var node2 = Node2(item4)
node2.getSiblings()


// 第一版
myDom.addClass(item3, { 'a': true, 'b': false, 'c': true })
// 第二版
item2.addClass({ 'a': true, 'b': false, 'c': true })
// 第三版
var node3 = Node3(item4)
node3.addClass({ 'a': true, 'b': true })
