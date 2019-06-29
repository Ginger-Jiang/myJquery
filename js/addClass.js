// 第一版
function addClass (element, classes) {
  for (const key in classes) {
    let value = classes[key]
    if (value) {
      element.classList.add(key)
    } else {
      element.classList.remove(key)
    }
  }
}
addClass(item3, { 'a': true, 'b': false, 'c': true })


// 优化
function addClass (element, classes) {
  for (const key in classes) {
    let value = classes[key]
    let methodsName = value ? 'add' : 'remove'
    element.classList[methodsName](key)
  }
}
addClass(item3, { 'a': true, 'b': false, 'c': true })
