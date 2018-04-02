# JavaScript DOM编程艺术(中文第2版)

## 第1章 JavaScript简史

### 1.1 JavaScript的起源

### 1.2 DOM

    DOM文档对象模型，是一套对文档的内容进行抽象和概念化的方法。
    W3C对DOM的定义是：一个与系统平台和编程语言无关的接口，程序和脚本可以通过这个接口动态地访问和修改文档的内容、结构和样式。

### 1.3 浏览器的战争

#### 1.3.1 DHTML

Dynamic HTML

* 利用HTML把网页标记为各种元素
* 利用CSS设置元素样式和它们的显示位置
* 利用JavaScript实时地操控页面和改变样式

#### 1.3.2 浏览器之间的冲突

### 1.4 制定标准

    W3C推出的标准化DOM可以让任何一种程序设计语言对使用任何一种标记语言编写出来的任何一份文档进行操控。

#### 1.4.1 浏览器之外的考虑

    DOM是一种API（应用编程接口）。API就是一组已经得到有关各方共同认可的基本约定。现实世界中，相当于API的例子包括摩尔斯码、国际时区、化学元素周期表等。

#### 1.4.2 浏览器战争的结局

#### 1.4.3 崭新的起点

### 1.5 小结

## 第2章 JavaScript语法

### 2.1 准备工作

### 2.2 语法

#### 2.2.1 语句

    建议在每条语句末尾都加上一个分号。

#### 2.2.2 注释

    用“//”来注释单行，用“/*”注释多行。

#### 2.2.3 变量

    JavaScript变量名允许包含字母、数字、下划线和$(第一个字符不允许是数字)。建议使用下划线来分隔各个单词。
    驼峰式格式是函数名、方法名和对象属性名命名的首选格式。

#### 2.2.4 数据类型

    字符串、数值、布尔值

#### 2.2.5 数组

```javascript
var lennon = ["John", 1940, false];
```

#### 2.2.6 对象

    在JavaScript中，所有变量实际上都是某种类型的对象。

### 2.3 操作

    操作符是JavaScript为完成各种操作而定义的一些符号。

* 算术操作符
* 比较操作符
* 逻辑操作符

### 2.4 条件语句

```javascript
if (1 > 2) {
    alert("The world has gone mad!");
} else {
    alert("All is well with the world");
}
```

#### 2.4.1 比较操作符

#### 2.4.2 逻辑操作符

### 2.5 循环语句

#### 2.5.1 while 循环

```javascript
var count = 1;
while (count < 11) {
    alert(count);
    count++;
}
```

#### 2.5.2 for 循环

```javascript
for (var count = 1; count < 11; count++) {
    alert(count);
}
```

for循环最常见的用途之一是对某个数组里的全体元素进行遍历处理。

### 2.6 函数

函数就是一组可以重复利用的代码语句。
在函数里，总是使用var关键字来申明变量,使其作为局部变量。

### 2.7 对象

    属性是隶属于某个特定对象的变量；
    方法是只有特定对象才能调用的函数。
    对象就是由一些属性和方法组合在一起而构成的一个数据实体。

#### 2.7.1 内建对象

内建在JavaScript语言里的对象。

#### 2.7.2 宿主对象

由浏览器提供的预定义对象被称为宿主对象。

### 2.8 小结

## 第3章 DOM

### 3.1 文档：DOM中的D

### 3.2 对象：DOM中的O

document对象的主要功能就是处理网页内容。

### 3.3 模型：DOM中的M

某种事物的表现形式。
DOM把一份文档表示为一棵树。

### 3.4 节点

#### 3.4.1 元素节点

#### 3.4.2 文本节点

#### 3.4.3 属性节点

#### 3.4.4 CSS

语法：

    selector {
        property: value;
    }

#### 3.4.5 获取元素

1、getElementById

    document.getElementById("purchases")
2、getElementsByTagName

    document.getElementsByTagName("li")
3、getElementsByClassName

    document.getElementsByClassName("sale")

```javascript
function getElementsByClassName(node, classname) {
    if (node.getElementsByClassName) {
        // 使用现有方法
        return node.getElementsByClassName(classname);
    } else {
        var results = new Array();
        var elems = node.getElementsByTagName("*");
        for (var i=0; i<elems.length; i++) {
            if (elems[i].className.indexOf(classname) != -1) {
                results[results.length] = elems[i];
            }
        }
        return results;
    }
}
```

#### 3.4.6 盘点知识点

* 一份文档就是一颗节点树
* 节点分为不同的类型：元素节点、属性节点和文本节点。
* getElementById将返回一个对象，该对象对应着文档里的一个特定的元素节点。
* getElementsByTagName和getElementsByClassName将返回一个数组对象，它们分别对应着文档里的一组特定的元素节点。
* 每个节点都是一个对象。

### 3.5 获取和设置属性

#### 3.5.1 getAttribute

object.getAttribute(attribute)

```javascript
var paras = document.getElementsByTagName("p");
for (var i=0; i<paras.length; i++) {
    var title_text = paras[i].getAttribute("title");
    if (title_text) alert(title_text);
}
```

#### 3.5.2 setAttribute

object.setAttribute(attribute,value)

```javascript
var paras = document.getElementsByTagName("p");
for (var i=0; i<paras.length; i++) {
    var title_text = paras[i].getAttribute("title");
    if (title_text) {
        paras[i].setAttribute("title", "brand new title text");
        alter(paras[i].getAttribute("title");)
    }
}
```

DOM的工作模式：先加载文档的静态内容，再动态刷新，动态刷新不影响文档的静态内容。这正是DOM的真正威力：对页面内容进行刷新却不需要在浏览器里刷新页面。

### 3.6 小结

* getElementById
* getElementsByTagName
* getElementsByClassName
* getAttribute
* setAttribute

## 第4章 案例研究：Javascript图片库

* 编写一个优秀的HTML标记文件。
* 编写一个Javascript函数以显示用户想要查看的图片。
* 由标记利用事件处理函数触发函数调用。
* 使用几个DOM新方法（childNodes、nodeType、nodeValue、firstChild、lastChild）扩展这个JavaScript函数。
* 利用CSS优化显示样式

事件处理函数的作用是，在特定事件发生时调用特定的JavaScript代码。

    达成目标的过程与目标本身同样重要。

## 第5章 最佳实践

* 平稳退化：确保网页在没有JavaScript的情况下也能正常工作。
* 分离JavaScript： 把网页的结构和内容与JavaScript脚本的动作行为分开。
* 向后兼容性：确保老版本的浏览器不会因为你的JavaScript脚本而死掉。
* 性能考虑：确定脚本执行的性能最优。

### 5.1 过去的错误

质疑一切：为这个网页增加额外的行为是否却有必要？

### 5.2 平稳退化

```javascript
// 创建新的浏览器窗口
// window.open(url,name,features)
function popUp(winURL) {
    window.open(winURL,"popup","width=320,height=480")
}
```

```html
<a href="http://www.example.com/" onclick="popUP(this.href);return false;">Example</a>
```

### 5.3 向CSS学习

### 5.4 分离JavaScript

```javascript
// HTML加载完成后再执行脚本
window.onload = prepareLinks;

function prepareLinks() {
    var links = document.getElementsByTagName("a");
    for (var i=0; i<links.length; i++) {
        if (links[i].getAttribute("class") == "popup") {
            links[i].onclick = function() {
                popUp(this.getAttribut("href"));
                return false;
            }
        }
    }
}
```

### 5.5 向后兼容

对象检测

```javascript
if (method) {
    statements
}
if (!getElementById) return false;
```

### 5.6 性能考虑

#### 5.6.1 尽量少访问DOM和尽量减少标记

#### 5.6.2 合并和放置脚本

    减少请求数量通常都是在性能优化时首先要考虑的。

#### 5.6.3 压缩脚本

多数情况下，你应该有两个版本，一个是工作副本，可以修改代码并添加注释；另一个是精简副本，用于放在站点上。

## 第6章 案例研究：图片库改进版

作为一条原则，如果想用JavaScript给某个网页添加一些行为，就不应该让JavaScript代码对这个网页的结构有任何依赖。

* 它能支持平稳退化吗？
* 它的JavaScript与HTML标记是分离的吗？

## 第7章 动态创建标记

### 7.1 一些传统方法

document.write和innerHTML

### 7.2 DOM创建方法

createElement

    document.creatElement(nodeName)

appendChild

    parent.appendChild(child)

createTextNode

    document.createTextNode("text");

### 7.3 优化图片库

### 7.4 Ajax

异步加载页面内容

    使用Ajax就可以做到只更新页面中的一小部分。

#### 7.4.1 XMLHttpRequest对象

最有用的是open方法

```javascript
request.open("GET", "example.txt", true);
```

使用Ajax时，千万要注意同源策略。

#### 7.4.2 渐进增强与Ajax

#### 7.4.3 Hijax

XMLHttpRequest对象作为浏览器与服务器之间的“中间人”，它只是负责传递请求和响应。

## 第8章 充实文档内容

当需要对文档里的现有信息进行检索时，以下DOM方法最有用：

    * getElementById
    * getElementsByTagName
    * getAttribute
当需要把信息添加到文档里去时，以下DOM方法最有用：

    * creatElement
    * creatTextNode
    * appendChild
    * insertBefore
    * setAttribute

## 第9章 CSS-DOM

### 9.1 三位一体的网页

* 结构层
* 表现层
* 行为层

### 9.2 style属性

### 9.3 何时该用DOM脚本设置样式

### 9.4 className属性

只要有可能，就应该选择更新className属性，而不是去直接更新style对象的有关属性。

## 第10章 用Javascript实现动画效果

### 10.1 动画基础知识

#### 10.1.1 位置

position属性

#### 10.1.2 时间

variable = setTimeout("function",interval)
clearTimeout(variable)

#### 10.1.3 时间递增量

### 10.2 

## 第11章 HTML5

## 第12章 综合示例

## 附录 JavaScript库
