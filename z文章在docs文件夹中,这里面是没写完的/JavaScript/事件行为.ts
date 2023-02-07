// 阻止事件冒泡
function stopPropagation(e: Event) {
  e.stopPropagation()
}

// 阻止默认事件
function preventDefault(e: Event) {
  e.preventDefault()
}

// 阻止事件冒泡和默认事件
function stop(e: Event) {
  e.stopPropagation()
  e.preventDefault()
}

// 获取事件目标
function getEventTarget(e: Event) {
  return e.target || e.srcElement
}

// 获取事件对象
function getEvent(e: Event) {
  return e || window.event
}

// 阻止事件捕获
function stopEventCapture(e: Event) {
  e.cancelBubble = true
}
