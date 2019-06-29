// 第一版
function getSiblings (element) {
  let siblings = element.parentNode.children
  let res = {
    length: 0
  }
  for (let i = 0; i < siblings.length; i++) {
    if (siblings[i] !== element) {
      res[res.length] = siblings[i]
      res.length++
    }
  }
  return res
}
console.log('getSiblings(item3)', getSiblings(item2))