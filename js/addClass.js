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

// 代码优化
function addClass (ele, classes) {
  for (const key in classes) {
    let value = classes[key]
    let methodsName = value ? 'add' : 'remove'
    ele.classList[methodsName](key)
  }
}


// 第二版
Node.prototype.addClass = function (classes) {
  for (let key in classes) {
    let methodsName = classes[key] ? 'add' : 'remove'
    this.classList[methodsName](key)
  }
}


// 第三版
window.Node3 = function (ele) {
  return {
    addClass (classes) {
      for (const key in classes) {
        let methodsName = classes[key] ? 'add' : 'remove'
        ele.classList[methodsName](key)
      }
    }
  }
}