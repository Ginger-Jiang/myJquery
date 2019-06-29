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

// 优化
function addClass (element, classes) {
  for (const key in classes) {
    let value = classes[key]
    let methodsName = value ? 'add' : 'remove'
    element.classList[methodsName](key)
  }
}
