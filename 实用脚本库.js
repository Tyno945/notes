// 加载执行函数
function addLoadEvent(func) {
    var oldonload = window.onload;
    if (typeof window.onload != 'function') {
        window.onload = func;
    } else {
        window.onload = function() {
            oldonload();
            func();
        }
    }
}

// 在目标元素之后插入一个新元素
function insertAfter(newElement,targetElement) {
    var parent = targetElement.parentNode;
    if (parent.lastChild == targetElement) {
        parent.appendChild(newElement);
    } else {
        parent.insertBefore(newElement,targetElement.nextSibling);
    }
}

// 给某个元素新增class
function addClass(element,value) {
    if (!element.className) {
      element.className = value;
    } else {
      newClassName = element.className;
      newClassName+= " ";
      newClassName+= value;
      element.className = newClassName;
    }
  }


// 移动元素到某个位置 moveElement.js
function moveElement(elementID,final_x,final_y,interval) {
    if (!document.getElementById) return false;
    if (!document.getElementById(elementID)) return false;
    var elem = document.getElementById(elementID);
    var xpos = parseInt(elem.style.left);
    var ypos = parseInt(elem.style.top);
    if (xpos == final_x && ypos == final_y) {
      return true;
    }
    if (xpos < final_x) {
      xpos++;
    }
    if (xpos > final_x) {
      xpos--;
    }
    if (ypos < final_y) {
      ypos++;
    }
    if (ypos > final_y) {
      ypos--;
    }
    elem.style.left = xpos + "px";
    elem.style.top = ypos + "px";
    var repeat = "moveElement('"+elementID+"',"+final_x+","+final_y+","+interval+")";
    movement = setTimeout(repeat,interval);
  }
  