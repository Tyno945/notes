# JavaScript教程
## 1. 简介
* JavaScript是一种运行在浏览器中的解释型的编程语言
* 在Web世界里，只有JavaScript能跨平台、跨浏览器驱动网页，与用户交互
* Node.js 是JavaScript运行在后端的环境
* 网景公司Brendan Eich发明
* ECMAScript是一种语言标准，而JavaScript是网景公司对ECMAScript标准的一种实现
## 2. 快速入门
### 2.1 JavaScript代码引入
    由<script>...</script>包含的代码就是JavaScript代码，它将直接被浏览器执行。
    第二种方法是把JavaScript代码放到一个单独的.js文件，然后在HTML中通过<script src="..."></script>引入这个文件。
    JavaScript代码可以直接嵌在网页的任何地方，不过通常我们都把JavaScript代码放到body尾部或<head>中
### 2.2 如何运行JavaScript
* HTML页面中引入JavaScript，然后，让浏览器加载该HTML页面，就可以执行JavaScript代码。
* 浏览器开发者工具“控制台(Console)“，在这个面板里可以直接输入JavaScript代码，按回车后执行。
* 浏览器地址栏运行javascript:function a(){for(var a=0;a<4; a++)alert("你好");}a();
```
http://utf-8.jp/public/aaencode.html
在Console中运行以下代码

ﾟωﾟﾉ= /｀ｍ´）ﾉ ~┻━┻   //*´∇｀*/ ['_']; o=(ﾟｰﾟ)  =_=3; c=(ﾟΘﾟ) =(ﾟｰﾟ)-(ﾟｰﾟ); (ﾟДﾟ) =(ﾟΘﾟ)= (o^_^o)/ (o^_^o);(ﾟДﾟ)={ﾟΘﾟ: '_' ,ﾟωﾟﾉ : ((ﾟωﾟﾉ==3) +'_') [ﾟΘﾟ] ,ﾟｰﾟﾉ :(ﾟωﾟﾉ+ '_')[o^_^o -(ﾟΘﾟ)] ,ﾟДﾟﾉ:((ﾟｰﾟ==3) +'_')[ﾟｰﾟ] }; (ﾟДﾟ) [ﾟΘﾟ] =((ﾟωﾟﾉ==3) +'_') [c^_^o];(ﾟДﾟ) ['c'] = ((ﾟДﾟ)+'_') [ (ﾟｰﾟ)+(ﾟｰﾟ)-(ﾟΘﾟ) ];(ﾟДﾟ) ['o'] = ((ﾟДﾟ)+'_') [ﾟΘﾟ];(ﾟoﾟ)=(ﾟДﾟ) ['c']+(ﾟДﾟ) ['o']+(ﾟωﾟﾉ +'_')[ﾟΘﾟ]+ ((ﾟωﾟﾉ==3) +'_') [ﾟｰﾟ] + ((ﾟДﾟ) +'_') [(ﾟｰﾟ)+(ﾟｰﾟ)]+ ((ﾟｰﾟ==3) +'_') [ﾟΘﾟ]+((ﾟｰﾟ==3) +'_') [(ﾟｰﾟ) - (ﾟΘﾟ)]+(ﾟДﾟ) ['c']+((ﾟДﾟ)+'_') [(ﾟｰﾟ)+(ﾟｰﾟ)]+ (ﾟДﾟ) ['o']+((ﾟｰﾟ==3) +'_') [ﾟΘﾟ];(ﾟДﾟ) ['_'] =(o^_^o) [ﾟoﾟ] [ﾟoﾟ];(ﾟεﾟ)=((ﾟｰﾟ==3) +'_') [ﾟΘﾟ]+ (ﾟДﾟ) .ﾟДﾟﾉ+((ﾟДﾟ)+'_') [(ﾟｰﾟ) + (ﾟｰﾟ)]+((ﾟｰﾟ==3) +'_') [o^_^o -ﾟΘﾟ]+((ﾟｰﾟ==3) +'_') [ﾟΘﾟ]+ (ﾟωﾟﾉ +'_') [ﾟΘﾟ]; (ﾟｰﾟ)+=(ﾟΘﾟ); (ﾟДﾟ)[ﾟεﾟ]='\\'; (ﾟДﾟ).ﾟΘﾟﾉ=(ﾟДﾟ+ ﾟｰﾟ)[o^_^o -(ﾟΘﾟ)];(oﾟｰﾟo)=(ﾟωﾟﾉ +'_')[c^_^o];(ﾟДﾟ) [ﾟoﾟ]='\"';(ﾟДﾟ) ['_'] ( (ﾟДﾟ) ['_'] (ﾟεﾟ+(ﾟДﾟ)[ﾟoﾟ]+ (ﾟДﾟ)[ﾟεﾟ]+(ﾟΘﾟ)+ (ﾟｰﾟ)+ (ﾟΘﾟ)+ (ﾟДﾟ)[ﾟεﾟ]+(ﾟΘﾟ)+ ((ﾟｰﾟ) + (ﾟΘﾟ))+ (ﾟｰﾟ)+ (ﾟДﾟ)[ﾟεﾟ]+(ﾟΘﾟ)+ (ﾟｰﾟ)+ ((ﾟｰﾟ) + (ﾟΘﾟ))+ (ﾟДﾟ)[ﾟεﾟ]+(ﾟΘﾟ)+ ((o^_^o) +(o^_^o))+ ((o^_^o) - (ﾟΘﾟ))+ (ﾟДﾟ)[ﾟεﾟ]+(ﾟΘﾟ)+ ((o^_^o) +(o^_^o))+ (ﾟｰﾟ)+ (ﾟДﾟ)[ﾟεﾟ]+((ﾟｰﾟ) + (ﾟΘﾟ))+ (c^_^o)+ (ﾟДﾟ)[ﾟεﾟ]+(ﾟｰﾟ)+ ((o^_^o) - (ﾟΘﾟ))+ (ﾟДﾟ)[ﾟεﾟ]+(ﾟΘﾟ)+ (ﾟΘﾟ)+ (c^_^o)+ (ﾟДﾟ)[ﾟεﾟ]+(ﾟΘﾟ)+ (ﾟｰﾟ)+ ((ﾟｰﾟ) + (ﾟΘﾟ))+ (ﾟДﾟ)[ﾟεﾟ]+(ﾟΘﾟ)+ ((ﾟｰﾟ) + (ﾟΘﾟ))+ (ﾟｰﾟ)+ (ﾟДﾟ)[ﾟεﾟ]+(ﾟΘﾟ)+ ((ﾟｰﾟ) + (ﾟΘﾟ))+ (ﾟｰﾟ)+ (ﾟДﾟ)[ﾟεﾟ]+(ﾟΘﾟ)+ ((ﾟｰﾟ) + (ﾟΘﾟ))+ ((ﾟｰﾟ) + (o^_^o))+ (ﾟДﾟ)[ﾟεﾟ]+((ﾟｰﾟ) + (ﾟΘﾟ))+ (ﾟｰﾟ)+ (ﾟДﾟ)[ﾟεﾟ]+(ﾟｰﾟ)+ (c^_^o)+ (ﾟДﾟ)[ﾟεﾟ]+(ﾟΘﾟ)+ ((o^_^o) - (ﾟΘﾟ))+ ((ﾟｰﾟ) + (o^_^o))+ (ﾟДﾟ)[ﾟεﾟ]+(ﾟΘﾟ)+ ((ﾟｰﾟ) + (ﾟΘﾟ))+ ((ﾟｰﾟ) + (o^_^o))+ (ﾟДﾟ)[ﾟεﾟ]+(ﾟΘﾟ)+ ((o^_^o) +(o^_^o))+ ((o^_^o) - (ﾟΘﾟ))+ (ﾟДﾟ)[ﾟεﾟ]+(ﾟΘﾟ)+ ((ﾟｰﾟ) + (ﾟΘﾟ))+ (ﾟｰﾟ)+ (ﾟДﾟ)[ﾟεﾟ]+(ﾟΘﾟ)+ (ﾟｰﾟ)+ (ﾟｰﾟ)+ (ﾟДﾟ)[ﾟεﾟ]+(ﾟｰﾟ)+ (ﾟΘﾟ)+ (ﾟДﾟ)[ﾟεﾟ]+(ﾟｰﾟ)+ ((o^_^o) - (ﾟΘﾟ))+ (ﾟДﾟ)[ﾟεﾟ]+((ﾟｰﾟ) + (ﾟΘﾟ))+ (ﾟΘﾟ)+ (ﾟДﾟ)[ﾟεﾟ]+((ﾟｰﾟ) + (o^_^o))+ (o^_^o)+ (ﾟДﾟ)[ﾟoﾟ]) (ﾟΘﾟ)) ('_');
```
### 2.3 基本语法
    每个语句以;结束，语句块用{...}。
    注释。以//开头直到行末的字符被视为行注释。另一种块注释是用/*...*/把多行字符包裹起来，把一大“块”视为一个注释。
    请注意，JavaScript严格区分大小写
### 2.4 数据类型和变量
#### 2.4.1 数据类型
1. Number
    ```
    JavaScript不区分整数和浮点数，统一用Number表示，以下都是合法的Number类型：
    123; // 整数123
    0.456; // 浮点数0.456
    1.2345e3; // 科学计数法表示1.2345x1000，等同于1234.5
    -99; // 负数
    NaN; // NaN表示Not a Number，当无法计算结果时用NaN表示
    Infinity; // Infinity表示无限大，当数值超过了JavaScript的Number所能表示的最大值时，就表示为Infinity
    ```
1. 字符串
    * 多行字符串
    ```
    由于多行字符串用\n写起来比较费事，最新的ES6标准新增了一种多行字符串的表示方法，用反引号 ` ... ` 表示
    ```
    * 模板字符串
    ```
    如果有很多变量需要连接，用+号就比较麻烦。ES6新增了一种模板字符串，表示方法和上面的多行字
    符串一样，但是它会自动替换字符串中的变量：
    var name = '小明';
    var age = 20;
    var message = `你好, ${name}, 你今年${age}岁了!`;
    alert(message);
    ```
    * 操作字符串

        `字符串常见的操作方法`
1. 布尔值
    ```
    布尔运算：&&，||，!

    比较运算
    第一种是==比较，它会自动转换数据类型再比较，很多时候，会得到非常诡异的结果；
    第二种是===比较，它不会自动转换数据类型，如果数据类型不一致，返回false，如果一致，再比较。

    唯一能判断NaN的方法是通过isNaN()函数：
    isNaN(NaN); // true

    要比较两个浮点数是否相等，只能计算它们之差的绝对值，看是否小于某个阈值：
    Math.abs(1 / 3 - (1 - 2 / 3)) < 0.0000001; // true

    JavaScript把null、undefined、0、NaN和空字符串''视为false，其他值一概视为true
    ```
1. null和undefined

        JavaScript的设计者希望用null表示一个空的值，而undefined表示值未定义。
1. 数组  
    数组是一组按顺序排列的集合，集合的每个值称为元素。  
    `字符串常见的操作方法`
1. 对象
```
JavaScript的对象是一组由键-值组成的无序集合。
JavaScript对象的键都是字符串类型，值可以是任意数据类型。
要获取一个对象的属性，我们用对象变量.属性名的方式

object.prop的形式访问一个属性
delete xiaoming.age; // 删除age属性
'name' in xiaoming; // 检测xiaoming是否拥有某一属性，可以用in操作符
xiaoming.hasOwnProperty('name'); // 判断一个属性是否是xiaoming自身拥有的
```
#### 2.4.2 变量
    申明一个变量用var语句
    变量在JavaScript中就是用一个变量名表示，变量名是大小写英文、数字、$和_的组合，且不能用
    数字开头。变量名也不能是JavaScript的关键字
    
    可以把任意数据类型赋值给变量，同一个变量可以反复赋值，而且可以是不同类型的变量，但是要注意只能用var申明一次
### 2.5 条件判断
    JavaScript使用if () { ... } else { ... }来进行条件判断
### 2.6 循环
    一种是for循环，通过初始条件、结束条件和递增条件来循环执行语句块
    for循环最常用的地方是利用索引来遍历数组
    while循环只有一个判断条件，条件满足，就不断循环，条件不满足时则退出循环。
    用do { ... } while()循环要小心，循环体会至少执行1次，而for和while循环则可能一次都不执行
### 2.7 Map和Set
> Map是一组键值对的结构，具有极快的查找速度。

    ```
    var m = new Map([['Michael', 95], ['Bob', 75], ['Tracy', 85]]);
    m.get('Michael'); // 95
    var m = new Map(); // 空Map
    m.set('Adam', 67); // 添加新的key-value
    m.set('Bob', 59);
    m.has('Adam'); // 是否存在key 'Adam': true
    m.get('Adam'); // 67
    m.delete('Adam'); // 删除key 'Adam'
    m.get('Adam'); // undefined
    ```
> Set和Map类似，也是一组key的集合，但不存储value。
```
var s1 = new Set(); // 空Set
var s2 = new Set([1, 2, 3]); // 含1, 2, 3
s.add(4);
s; // Set {1, 2, 3, 4}
s.delete(3);
```
### 2.8 iterable
Array、Map和Set都属于iterable类型  
> 具有iterable类型的集合可以通过新的for ... of循环来遍历

```
var a = ['A', 'B', 'C'];
var s = new Set(['A', 'B', 'C']);
var m = new Map([[1, 'x'], [2, 'y'], [3, 'z']]);
for (var x of a) { // 遍历Array
    console.log(x);
}
for (var x of s) { // 遍历Set
    console.log(x);
}
for (var x of m) { // 遍历Map
    console.log(x[0] + '=' + x[1]);
}
```
> 更好的方式是直接使用iterable内置的forEach方法，它接收一个函数，每次迭代就自动回调该函数。
```
var a = ['A', 'B', 'C'];
a.forEach(function (element, index, array) {
    // element: 指向当前元素的值
    // index: 指向当前索引
    // array: 指向Array对象本身
    console.log(element + ', index = ' + index);
});

```
## 3. 函数
### 3.1 函数定义和调用
#### 3.1.1 定义函数
```
在JavaScript中，定义函数的方式如下：

function abs(x) {
    if (x >= 0) {
        return x;
    } else {
        return -x;
    }
}

上述abs()函数的定义如下：

    function指出这是一个函数定义；
    abs是函数的名称；
    (x)括号内列出函数的参数，多个参数以,分隔；
    { ... }之间的代码是函数体，可以包含若干语句，甚至可以没有任何语句。
```
#### 3.1.2 调用函数
```
调用函数时，按顺序传入参数即可

要避免收到undefined，可以对参数进行检查：

function abs(x) {
    if (typeof x !== 'number') {
        throw 'Not a number';
    }
    if (x >= 0) {
        return x;
    } else {
        return -x;
    }
}

```
#### 3.1.3 arguments
```
关键字arguments，它只在函数内部起作用，并且永远指向当前函数的调用者传入的所有参数。arguments类似Array
function abs() {
    if (arguments.length === 0) {
        return 0;
    }
    var x = arguments[0];
    return x >= 0 ? x : -x;
}

abs(); // 0
abs(10); // 10
abs(-9); // 9
```
#### 3.1.4 rest参数
```
function foo(a, b, ...rest) {
    console.log('a = ' + a);
    console.log('b = ' + b);
    console.log(rest);
}

foo(1, 2, 3, 4, 5);
// 结果:
// a = 1
// b = 2
// Array [ 3, 4, 5 ]

foo(1);
// 结果:
// a = 1
// b = undefined
// Array []
```
### 3.2 变量作用域与解构赋值
```
如果一个变量在函数体内部申明，则该变量的作用域为整个函数体，在函数体外不可引用该变量。
JavaScript的函数定义有个特点，它会先扫描整个函数体的语句，把所有申明的变量“提升”到函数顶部。
在函数内部定义变量时，请严格遵守“在函数内部首先申明所有变量”这一规则
```
#### 3.2.1 全局作用域
```
不在任何函数内定义的变量就具有全局作用域。实际上，JavaScript默认有一个全局对象window，全局
作用域的变量实际上被绑定到window的一个属性

任何变量（函数也视为变量），如果没有在当前函数作用域中找到，就会继续往上查找，最后如果在全局
作用域中也没有找到，则报ReferenceError错误。
```
#### 3.2.2 名字空间
```
// 唯一的全局变量MYAPP:
var MYAPP = {};

// 其他变量:
MYAPP.name = 'myapp';
MYAPP.version = 1.0;

// 其他函数:
MYAPP.foo = function () {
    return 'foo';
};

把自己的代码全部放入唯一的名字空间MYAPP中，会大大减少全局变量冲突的可能。
```
#### 3.2.3 局部作用域
为了解决块级作用域，ES6引入了新的关键字let，用let替代var可以申明一个块级作用域的变量
#### 3.2.4 常量
ES6标准引入了新的关键字const来定义常量，const与let都具有块级作用域
#### 3.2.5 解构赋值
```
var [x, y, z] = ['hello', 'JavaScript', 'ES6'];
var person = {
    name: '小明',
    age: 20,
    gender: 'male',
    passport: 'G-12345678',
    school: 'No.4 middle school'
};
var {name, age, passport} = person;
```
### 3.3 方法
绑定到对象上的函数称为方法
> apply和call  
apply方法，它接收两个参数，第一个参数就是需要绑定的this变量，第二个参数是Array，表示函数本身的参数。
```
function getAge() {
    var y = new Date().getFullYear();
    return y - this.birth;
}

var xiaoming = {
    name: '小明',
    birth: 1990,
    age: getAge
};

xiaoming.age(); // 25
getAge.apply(xiaoming, []); // 25, this指向xiaoming, 参数为空
```
> 装饰器
```
利用apply()，我们还可以动态改变函数的行为
var count = 0;
var oldParseInt = parseInt; // 保存原函数

window.parseInt = function () {
    count += 1;
    return oldParseInt.apply(null, arguments); // 调用原函数
};

// 测试:
parseInt('10');
parseInt('20');
parseInt('30');
count; // 3

```
### 3.4 高阶函数
编写高阶函数，就是让函数的参数能够接收别的函数
#### 3.4.1 map/reduce
```
'use strict';

function pow(x) {
    return x * x;
}
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var results = arr.map(pow); // [1, 4, 9, 16, 25, 36, 49, 64, 81]
console.log(results);

var arr = [1, 3, 5, 7, 9];
arr.reduce(function (x, y) {
    return x + y;
}); // 25
```
#### 3.4.2 filter
filter()把传入的函数依次作用于每个元素，然后根据返回值是true还是false决定保留还是丢弃该元素。
```
利用filter，可以巧妙地去除Array的重复元素
'use strict';

var
    r,
    arr = ['apple', 'strawberry', 'banana', 'pear', 'apple', 'orange', 'orange', 'strawberry'];
r = arr.filter(function (element, index, self) {
    return self.indexOf(element) === index;
});
console.log(r.toString());
```
#### 3.4.3 sort
默认情况下，对字符串排序，是按照ASCII的大小比较的，现在，我们提出排序应该忽略大小写，按照字母序排序。
```
var arr = ['Google', 'apple', 'Microsoft'];
arr.sort(function (s1, s2) {
    x1 = s1.toUpperCase();
    x2 = s2.toUpperCase();
    if (x1 < x2) {
        return -1;
    }
    if (x1 > x2) {
        return 1;
    }
    return 0;
}); // ['apple', 'Google', 'Microsoft']
```
### 3.5 闭包
返回闭包时牢记的一点就是：返回函数不要引用任何循环变量，或者后续会发生变化的变量。

闭包就是携带状态的函数，并且它的状态可以完全对外隐藏起来。

闭包还可以把多参数的函数变成单参数的函数。
```
'use strict';

function make_pow(n) {
    return function (x) {
        return Math.pow(x, n);
    }
}
// 创建两个新函数:
var pow2 = make_pow(2);
var pow3 = make_pow(3);

console.log(pow2(5)); // 25
console.log(pow3(7)); // 343
```
### 3.6 箭头函数
```
x => x * x

上面的箭头函数相当于：

function (x) {
    return x * x;
}

// 两个参数:
(x, y) => x * x + y * y

// 无参数:
() => 3.14

// 可变参数:
(x, y, ...rest) => {
    var i, sum = x + y;
    for (i=0; i<rest.length; i++) {
        sum += rest[i];
    }
    return sum;
}
```
### 3.7 generator
generator可以在执行过程中多次返回，所以它看上去就像一个可以记住执行状态的函数，利用这一点，写一个generator就可以实现需要用面向对象才能实现的功能
```
function* fib(max) {
    var
        t,
        a = 0,
        b = 1,
        n = 1;
    while (n < max) {
        yield a;
        t = a + b;
        a = b;
        b = t;
        n ++;
    }
    return a;
}

var f = fib(5);
f.next(); // {value: 0, done: false}
f.next(); // {value: 1, done: false}
f.next(); // {value: 1, done: false}
f.next(); // {value: 2, done: false}
f.next(); // {value: 3, done: true}

for (var x of fib(5)) {
    console.log(x); // 依次输出0, 1, 1, 2
}
```
## 4. 标准对象
```
* 不要使用new Number()、new Boolean()、new String()创建包装对象；
* 用parseInt()或parseFloat()来转换任意类型到number；
* 用String()来转换任意类型到string，或者直接调用某个对象的toString()方法；
* 通常不必把任意类型转换为boolean再判断，因为可以直接写if (myVar) {...}；
* typeof操作符可以判断出number、boolean、string、function和undefined；
* 判断Array要使用Array.isArray(arr)；
* 判断null请使用myVar === null；
* 判断某个全局变量是否存在用typeof window.myVar === 'undefined'；
* 函数内部判断某个变量是否存在用typeof myVar === 'undefined'。
```
### 4.1 Date
#### 4.1.1 获取当前系统日期
```
var now = new Date();
now; // Wed Jun 24 2015 19:49:22 GMT+0800 (CST)
now.getFullYear(); // 2015, 年份
now.getMonth(); // 5, 月份，注意月份范围是0~11，5表示六月
now.getDate(); // 24, 表示24号
now.getDay(); // 3, 表示星期三
now.getHours(); // 19, 24小时制
now.getMinutes(); // 49, 分钟
now.getSeconds(); // 22, 秒
now.getMilliseconds(); // 875, 毫秒数
now.getTime(); // 1435146562875, 以number形式表示的时间戳
```
#### 4.1.2 获取指定日期
```
var d = new Date(2015, 5, 19, 20, 15, 30, 123);
d; // Fri Jun 19 2015 20:15:30 GMT+0800 (CST)

var d = Date.parse('2015-06-24T19:49:22.875+08:00');
d; // 1435146562875
var d = new Date(1435146562875);
d; // Wed Jun 24 2015 19:49:22 GMT+0800 (CST)
d.getMonth(); // 5
```
#### 4.1.3 时区
```
var d = new Date(1435146562875);
d.toLocaleString(); // '2015/6/24 下午7:49:22'，本地时间（北京时区+8:00），显示的字符串与操作系统设定的格式有关
d.toUTCString(); // 'Wed, 24 Jun 2015 11:49:22 GMT'，UTC时间，与本地时间相差8小时

获取当前时间戳，可以用：
if (Date.now) {
    console.log(Date.now()); // 老版本IE没有now()方法
} else {
    console.log(new Date().getTime());
}
```
### 4.2 RegExp
#### 4.2.1 正则表达式规则

正则表达式是一种用来匹配字符串的强有力的武器。它的设计思想是用一种描述性的语言来给字符串定义
一个规则，凡是符合规则的字符串，我们就认为它“匹配”了，否则，该字符串就是不合法的。
```
正则表达式规则：
如果直接给出字符，就是精确匹配。
用\d可以匹配一个数字，
\w可以匹配一个字母或数字
\s可以匹配一个空格（也包括Tab等空白符）
.可以匹配任意字符
用*表示任意个字符（包括0个）
用+表示至少一个字符
用?表示0个或1个字符
用{n}表示n个字符，用{n,m}表示n-m个字符

进阶
要做更精确地匹配，可以用[]表示范围，比如：
[0-9a-zA-Z\_]可以匹配一个数字、字母或者下划线；
[0-9a-zA-Z\_]+可以匹配至少由一个数字、字母或者下划线组成的字符串，比如'a100'，'0_Z'，'Py3000'等等；
[a-zA-Z\_][0-9a-zA-Z\_]*可以匹配由字母或下划线开头，后接任意个由一个数字、字母或者下划线组
成的字符串，也就是Python合法的变量；
[a-zA-Z\_][0-9a-zA-Z\_]{0, 19}更精确地限制了变量的长度是1-20个字符（前面1个字符+后面最多19个字符）。
A|B可以匹配A或B，所以(P|p)ython可以匹配'Python'或者'python'。
^表示行的开头，^\d表示必须以数字开头。
$表示行的结束，\d$表示必须以数字结束。
```
#### 4.2.2 正则表达式使用
```
var re1 = /ABC\-001/;
var re2 = new RegExp('ABC\\-001');

re1; // /ABC\-001/
re2; // /ABC\-001/

var re = /^\d{3}\-\d{3,8}$/;
re.test('010-12345'); // true
re.test('010-1234x'); // false
re.test('010 12345'); // false
```
> 切分字符串
```
'a,b;; c  d'.split(/[\s\,\;]+/); // ['a', 'b', 'c', 'd']
```
> 分组,提取子串
```
var re = /^(\d{3})-(\d{3,8})$/;
re.exec('010-12345'); // ['010-12345', '010', '12345']
re.exec('010 12345'); // null
exec()方法在匹配成功后，会返回一个Array，第一个元素是正则表达式匹配到的整个字符串，后面的字符串表示匹配成功的子串。

exec()方法在匹配失败时返回null。

var re = /^(0[0-9]|1[0-9]|2[0-3]|[0-9])\:(0[0-9]|1[0-9]|2[0-9]|3[0-9]|4[0-9]|5[0-9]|[0-9])\:(0[0-9]|1[0-9]|2[0-9]|3[0-9]|4[0-9]|5[0-9]|[0-9])$/;
re.exec('19:05:30'); // ['19:05:30', '19', '05', '30']
```
> 贪婪匹配
```
var re = /^(\d+)(0*)$/;
re.exec('102300'); // ['102300', '102300', '']

必须让\d+采用非贪婪匹配（也就是尽可能少匹配），才能把后面的0匹配出来，加个?就可以让\d+采用非贪婪匹配：
var re = /^(\d+?)(0*)$/;
re.exec('102300'); // ['102300', '1023', '00']
```
> 全局搜索
```
var s = 'JavaScript, VBScript, JScript and ECMAScript';
var re=/[a-zA-Z]+Script/g;

// 使用全局匹配:
re.exec(s); // ['JavaScript']
re.lastIndex; // 10

re.exec(s); // ['VBScript']
re.lastIndex; // 20

re.exec(s); // ['JScript']
re.lastIndex; // 29

re.exec(s); // ['ECMAScript']
re.lastIndex; // 44

re.exec(s); // null，直到结束仍没有匹配到
```
### 4.3 JSON
JSON是JavaScript Object Notation的缩写，它是一种数据交换格式。  
JSON还定死了字符集必须是UTF-8，表示多语言就没有问题了。为了统一解析，JSON的字符串规定必须用双引号""，Object的键也必须用双引号""。
#### 4.3.1 序列化
```
'use strict';

var xiaoming = {
    name: '小明',
    age: 14,
    gender: true,
    height: 1.65,
    grade: null,
    'middle-school': '\"W3C\" Middle School',
    skills: ['JavaScript', 'Java', 'Python', 'Lisp']
};
var s = JSON.stringify(xiaoming);
console.log(s);
//{"name":"小明","age":14,"gender":true,"height":1.65,"grade":null,"middle-school":"\"W3C\" Middle School","skills":["JavaScript","Java","Python","Lisp"]}
```
#### 4.3.2 反序列化
```
JSON.parse('[1,2,3,true]'); // [1, 2, 3, true]
JSON.parse('{"name":"小明","age":14}'); // Object {name: '小明', age: 14}
JSON.parse('true'); // true
JSON.parse('123.45'); // 123.45

var obj = JSON.parse('{"name":"小明","age":14}', function (key, value) {
    if (key === 'name') {
        return value + '同学';
    }
    return value;
});
console.log(JSON.stringify(obj)); // {name: '小明同学', age: 14}

```
## 5. 面向对象编程
[参考资料](http://www.ruanyifeng.com/blog/2010/05/object-oriented_javascript_encapsulation.html)  
JavaScript通过原型（prototype）来实现面向对象编程
```
JavaScript的原型链和Java的Class区别就在，它没有“Class”的概念，所有对象都是实例，所谓继承关
系不过是把一个对象的原型指向另一个对象而已.

// 原型对象:
var Student = {
    name: 'Robot',
    height: 1.2,
    run: function () {
        console.log(this.name + ' is running...');
    }
};

function createStudent(name) {
    // 基于Student原型创建一个新对象:
    var s = Object.create(Student);
    // 初始化新对象:
    s.name = name;
    return s;
}

var xiaoming = createStudent('小明');
xiaoming.run(); // 小明 is running...
xiaoming.__proto__ === Student; // true
```
### 5.1 创建对象
JavaScript对每个创建的对象都会设置一个原型，指向它的原型对象。
```
当我们用obj.xxx访问一个对象的属性时，JavaScript引擎先在当前对象上查找该属性，如果没有找到，
就到其原型对象上找，如果还没有找到，就一直上溯到Object.prototype对象，最后，如果还没有找到，就只能返回undefined。

创建一个Array对象：

var arr = [1, 2, 3];

其原型链是：

arr ----> Array.prototype ----> Object.prototype ----> null
```
> 方法一

    直接用{ ... }创建一个对象
> 方法二
```
构造函数
function Student(props) {
    this.name = props.name || '匿名'; // 默认值为'匿名'
    this.grade = props.grade || 1; // 默认值为1
}

Student.prototype.hello = function () {
    alert('Hello, ' + this.name + '!');
};

function createStudent(props) {
    return new Student(props || {})
}

var xiaoming = createStudent({
    name: '小明'
});

xiaoming.grade; // 1
```
### 5.2 原型继承
JavaScript的原型继承实现方式就是
1. 定义新的构造函数，并在内部用call()调用希望“继承”的构造函数，并绑定this；

2. 借助中间函数F实现原型链继承，最好通过封装的inherits函数完成；

3. 继续在新的构造函数的原型上定义新方法。

```javascript
function inherits(Child, Parent) {
    var F = function () {};
    F.prototype = Parent.prototype;
    Child.prototype = new F();
    Child.prototype.constructor = Child;
}

function Student(props) {
    this.name = props.name || 'Unnamed';
}

Student.prototype.hello = function () {
    alert('Hello, ' + this.name + '!');
}

function PrimaryStudent(props) {
    Student.call(this, props);
    this.grade = props.grade || 1;
}

// 实现原型继承链:
inherits(PrimaryStudent, Student);

// 绑定其他方法到PrimaryStudent原型:
PrimaryStudent.prototype.getGrade = function () {
    return this.grade;
};
```
### 5.3 class继承
```javascript
class Student {
    constructor(name) {
        this.name = name;
    }

    hello() {
        alert('Hello, ' + this.name + '!');
    }
}
var xiaoming = new Student('小明');
xiaoming.hello();

class PrimaryStudent extends Student {
    constructor(name, grade) {
        super(name); // 记得用super调用父类的构造方法!
        this.grade = grade;
    }

    myGrade() {
        alert('I am at grade ' + this.grade);
    }
}
```
## 6. 浏览器
### 6.1 浏览器对象
#### 6.1.1 window
```
window对象有innerWidth和innerHeight属性，可以获取浏览器窗口的内部宽度和高度。
对应的，还有一个outerWidth和outerHeight属性，可以获取浏览器窗口的整个宽高。
```
#### 6.1.2 navigator
```
navigator对象表示浏览器的信息，最常用的属性包括：

    navigator.appName：浏览器名称；
    navigator.appVersion：浏览器版本；
    navigator.language：浏览器设置的语言；
    navigator.platform：操作系统类型；
    navigator.userAgent：浏览器设定的User-Agent字符串。
```
#### 6.1.3 screen
```
screen对象表示屏幕的信息，常用的属性有：

    screen.width：屏幕宽度，以像素为单位；
    screen.height：屏幕高度，以像素为单位；
    screen.colorDepth：返回颜色位数，如8、16、24。
```
#### 6.1.4 location
```
location对象表示当前页面的URL信息。可以用location.href获取。

location.protocol; // 'http'
location.host; // 'www.example.com'
location.port; // '8080'
location.pathname; // '/path/index.html'
location.search; // '?a=1&b=2'
location.hash; // 'TOP'

if (confirm('重新加载当前页' + location.href + '?')) {
    location.reload();
} else {
    location.assign('/'); // 设置一个新的URL地址
}
```
#### 6.1.5 document
```
document对象表示当前页面。由于HTML在浏览器中以DOM形式表示为树形结构，document对象就是整个DOM树的根节点。

要查找DOM树的某个节点，需要从document对象开始查找。最常用的查找是根据ID和Tag Name。
```
#### 6.1.6 history
```
history对象保存了浏览器的历史记录，JavaScript可以调用history对象的back()或forward ()，相
当于用户点击了浏览器的“后退”或“前进”按钮。任何情况，你都不应该使用history这个对象了。
```
### 6.2 操作DOM
```
在操作一个DOM节点前，我们需要通过各种方式先拿到这个DOM节点。最常用的方法是 
document.getElementById()和document.getElementsByTagName()，以及CSS选择器 document.getElementsByClassName()。

第二种方法是使用querySelector()和querySelectorAll()，需要了解selector语法，然后使用条件来获取节点，更加方便
```
#### 6.2.1 更新DOM
> 一种是修改innerHTML属性
```javascript
// 获取<p id="p-id">...</p>
var p = document.getElementById('p-id');
// 设置文本为abc:
p.innerHTML = 'ABC'; // <p id="p-id">ABC</p>
// 设置HTML:
p.innerHTML = 'ABC <span style="color:red">RED</span> XYZ';
// <p>...</p>的内部结构已修改
```
> 第二种是修改innerText或textContent属性
```javascript
// 获取<p id="p-id">...</p>
var p = document.getElementById('p-id');
// 设置文本:
p.innerText = '<script>alert("Hi")</script>';
// HTML被自动编码，无法设置一个<script>节点:
// <p id="p-id">&lt;script&gt;alert("Hi")&lt;/script&gt;</p>
```
#### 6.2.2 插入DOM
> 一个是使用appendChild，把一个子节点添加到父节点的最后一个子节点。
```javascript
var d = document.createElement('style');
d.setAttribute('type', 'text/css');
d.innerHTML = 'p { color: red }';
document.getElementsByTagName('head')[0].appendChild(d);
```
> insertBefore
```
可以使用parentElement.insertBefore(newElement, referenceElement);，子节点会插入到referenceElement之前。
```
#### 6.2.3 删除DOM
```javascript
// 拿到待删除节点:
var self = document.getElementById('to-be-removed');
// 拿到父节点:
var parent = self.parentElement;
// 删除:
var removed = parent.removeChild(self);
removed === self; // true
```
#### 6.2.4 遍历DOM
```javascript
var
    i, c,
    list = document.getElementById('list');
for (i = 0; i < list.children.length; i++) {
    c = list.children[i]; // 拿到第i个子节点
}
```
### 6.3 操作表单
```
<!-- HTML -->
<form id="login-form" method="post" onsubmit="return checkForm()">
    <input type="text" id="username" name="username">
    <input type="password" id="input-password">
    <input type="hidden" id="md5-password" name="password">
    <button type="submit">Submit</button>
</form>

<script>
function checkForm() {
    var input_pwd = document.getElementById('input-password');
    var md5_pwd = document.getElementById('md5-password');
    // 把用户输入的明文变为MD5:
    md5_pwd.value = toMD5(input_pwd.value);
    // 继续下一步:
    return true;
}
</script>
```
### 6.4 操作文件
```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width" />
        <title>文件api</title>
        <style>
            #test-image-preview {
                width:500px;
                height:500px;
                border:1px solid #ff0000;
            }

        </style>
        <script src="fileapi.js"></script>
    </head>
    <body>
        <div id="test-file-info"></div>
        <div id="test-image-preview"></div>
        <form action=""><input id="test-image-file" type="file"></form>
    </body>
</html>
```

```javascript
'use strict'

window.onload=function(){
    var fileInput = document.getElementById('test-image-file');
    var info = document.getElementById('test-file-info');
    var preview = document.getElementById('test-image-preview');


    fileInput.addEventListener('change',function(){
        console.log('change...');
        preview.style.backgroundImage='';
        if (!fileInput.value){
            info.innerHTML = '没有选择文件';
            return ;
        }
        var file = fileInput.files[0];
        info.innerHTML = '文件:' + file.name + '<br>'+'大小:'+file.size+'<br>'+'修改:'+file.lastModifiedDate;
        if(file.type !== 'image/jpeg' && file.type !== 'image/png' && file.type !== 'image/gif'){
            alert('不是有效的图片文件!');
            return;
        }

        var reader = new FileReader();
        reader.onload=function(e){
            console.log('reader.onload');
            var data = e.target.result;
            preview.style.backgroundImage='url('+ data +')';
        };
        reader.readAsDataURL(file);
    });
};
```

### 6.5 `AJAX`
[参考资料](http://www.cnblogs.com/dowinning/archive/2012/04/19/json-jsonp-jquery.html)

```javascript
function success(text) {
    var textarea = document.getElementById('test-response-text');
    textarea.value = text;
}

function fail(code) {
    var textarea = document.getElementById('test-response-text');
    textarea.value = 'Error code: ' + code;
}

var request = new XMLHttpRequest(); // 新建XMLHttpRequest对象

request.onreadystatechange = function () { // 状态发生变化时，函数被回调
    if (request.readyState === 4) { // 成功完成
        // 判断响应结果:
        if (request.status === 200) {
            // 成功，通过responseText拿到响应的文本:
            return success(request.responseText);
        } else {
            // 失败，根据响应码判断失败原因:
            return fail(request.status);
        }
    } else {
        // HTTP请求还在继续...
    }
}

// 发送请求:
request.open('GET', '/api/categories',false);
request.send();

alert('请求已发送，请等待响应...');
```
#### 6.5.1 安全限制
默认情况下，JavaScript在发送AJAX请求时，URL的域名必须和当前页面完全一致。  
JavaScript请求外域的方法：
1. 通过Flash插件发送HTTP请求，这种方式可以绕过浏览器的安全限制，但必须安装Flash，并且跟Flash交互。不过Flash用起来麻烦，而且现在用得也越来越少了。
2. 通过在同源域名下架设一个代理服务器来转发，JavaScript负责把请求发送到代理服务器,代理服务器再把结果返回，这样就遵守了浏览器的同源策略。这种方式麻烦之处在于需要服务器端额外做开发。
3. JSONP，它有个限制，只能用GET请求，并且要求返回JavaScript。这种方式跨域实际上是利用了浏览器允许跨域引用JavaScript资源.
4. CORS,全称Cross-Origin Resource Sharing，是HTML5规范定义的如何跨域访问资源。
### 6.6 `Promise`(难点)
“承诺将来会执行”的对象在JavaScript中称为Promise对象。
[参考资料](http://wiki.jikexueyuan.com/project/es6/promise.html)

### 6.7 Canvas
一个Canvas定义了一个指定尺寸的矩形框，在这个范围内我们可以随意绘制：
```
<canvas id="test-stock" width="300" height="200">
    <p>Current Price: 25.51</p>
</canvas>
```
#### 6.7.1 绘制形状
```javascript
'use strict';

var
    canvas = document.getElementById('test-shape-canvas'),
    ctx = canvas.getContext('2d');
ctx.clearRect(0, 0, 200, 200); // 擦除(0,0)位置大小为200x200的矩形，擦除的意思是把该区域变为透明
ctx.fillStyle = '#dddddd'; // 设置颜色
ctx.fillRect(10, 10, 130, 130); // 把(10,10)位置大小为130x130的矩形涂色
// 利用Path绘制复杂路径:
var path=new Path2D();
path.arc(75, 75, 50, 0, Math.PI*2, true);
path.moveTo(110,75);
path.arc(75, 75, 35, 0, Math.PI, false);
path.moveTo(65, 65);
path.arc(60, 65, 5, 0, Math.PI*2, true);
path.moveTo(95, 65);
path.arc(90, 65, 5, 0, Math.PI*2, true);
ctx.strokeStyle = '#0000ff';
ctx.stroke(path);
```
#### 6.7.2 绘制文本
```
'use strict';

var
    canvas = document.getElementById('test-text-canvas'),
    ctx = canvas.getContext('2d');
ctx.clearRect(0, 0, canvas.width, canvas.height);
ctx.shadowOffsetX = 2;
ctx.shadowOffsetY = 2;
ctx.shadowBlur = 2;
ctx.shadowColor = '#666666';
ctx.font = '24px Arial';
ctx.fillStyle = '#333333';
ctx.fillText('带阴影的文字', 20, 40);

```
## 7. jQuery
使用jQuery只需要在页面的<head>引入jQuery文件即可.  
$是著名的jQuery符号。实际上，jQuery把所有功能全部封装在一个全局变量jQuery中，而$也是一个合法的变量名，它是变量jQuery的别名。  
$本质上就是一个函数，但是函数也是对象，于是$除了可以直接调用外，也可以有很多其他属性。
```
window.jQuery; // jQuery(selector, context)
window.$; // jQuery(selector, context)
$ === jQuery; // true
typeof($); // 'function'
```
### 7.1 选择器
选择器是jQuery的核心。一个选择器写出来类似$('#dom-id')。  
jQuery的选择器就是帮助我们快速定位到一个或多个DOM节点。
#### 7.1.1 按ID查找
```
// 查找<div id="abc">:
var div = $('#abc');
```
#### 7.1.2 按tag查找
```
var ps = $('p'); // 返回所有<p>节点
ps.length; // 数一数页面有多少个<p>节点
```
#### 7.1.3 按class查找
```
var a = $('.red'); // 所有节点包含`class="red"`都将返回
var a = $('.red.green'); // 注意没有空格！
// 符合条件的节点：
// <div class="red green">...</div>
// <div class="blue green red">...</div>
```
#### 7.1.4 按属性查找
```javascript
var email = $('[name=email]'); // 找出<??? name="email">
var a = $('[items="A B"]'); // 找出<??? items="A B">
var icons = $('[name^=icon]'); // 找出所有name属性值以icon开头的DOM
var names = $('[name$=with]'); // 找出所有name属性值以with结尾的DOM
var icons = $('[class^="icon-"]'); // 找出所有class包含至少一个以`icon-`开头的DOM
// 例如: class="icon-clock", class="abc icon-home"
```
#### 7.1.5 组合查找
```
var emailInput = $('input[name=email]'); // 不会找出<div name="email">
var tr = $('tr.red'); // 找出<tr class="red ...">...</tr>
```
#### 7.1.6 多项选择器
```
$('p,div'); // 把<p>和<div>都选出来
$('p.red,p.green'); // 把<p class="red">和<p class="green">都选出来
```
#### 7.1.7 层级选择器
```
$('ul.lang li.lang-javascript'); // [<li class="lang-javascript">JavaScript</li>]
```
#### 7.1.8 子选择器
```
$('ul.lang>li.lang-javascript');
```
#### 7.1.9 表单相关特殊选择器
```
:input：可以选择<input>，<textarea>，<select>和<button>；

:file：可以选择<input type="file">，和input[type=file]一样；

:checkbox：可以选择复选框，和input[type=checkbox]一样；

:radio：可以选择单选框，和input[type=radio]一样；

:focus：可以选择当前输入焦点的元素，例如把光标放到一个<input>上，用$('input:focus')就可以选出；

:checked：选择当前勾上的单选框和复选框，用这个选择器可以立刻获得用户选择的项目，如$('input[type=radio]:checked')；

:enabled：可以选择可以正常输入的<input>、<select>
等，也就是没有灰掉的输入；

:disabled：和:enabled正好相反，选择那些不能输入的。
$('div:visible'); // 所有可见的div
$('div:hidden'); // 所有隐藏的div
```
### 7.2 过滤器
```
$('ul.lang li'); // 选出JavaScript、Python和Lua 3个节点

$('ul.lang li:first-child'); // 仅选出JavaScript
$('ul.lang li:last-child'); // 仅选出Lua
$('ul.lang li:nth-child(2)'); // 选出第N个元素，N从1开始
$('ul.lang li:nth-child(even)'); // 选出序号为偶数的元素
$('ul.lang li:nth-child(odd)'); // 选出序号为奇数的元素

```
### 7.3 查找和过滤
#### 7.3.1 查找
* 使用find()方法，它本身又接收一个任意的选择器。
* parent()方法
* next()和prev()方法
#### 7.3.2 过滤
> filter()方法
```javascript
var langs = $('ul.lang li'); // 拿到JavaScript, Python, Swift, Scheme和Haskell
langs.filter(function () {
    return this.innerHTML.indexOf('S') === 0; // 返回S开头的节点
}); // 拿到Swift, Scheme
```
> first()、last()和slice()方法可以返回一个新的jQuery对象
```javascript
var langs = $('ul.lang li'); // 拿到JavaScript, Python, Swift, Scheme和Haskell
var js = langs.first(); // JavaScript，相当于$('ul.lang li:first-child')
var haskell = langs.last(); // Haskell, 相当于$('ul.lang li:last-child')
var sub = langs.slice(2, 4); // Swift, Scheme, 参数和数组的slice()方法一致
```
> map()方法把一个jQuery对象包含的若干DOM节点转化为其他对象
```javascript
var langs = $('ul.lang li'); // 拿到JavaScript, Python, Swift, Scheme和Haskell
var arr = langs.map(function () {
    return this.innerHTML;
}).get(); // 用get()拿到包含string的Array：['JavaScript', 'Python', 'Swift', 'Scheme', 'Haskell']
```
### 7.4 操作DOM
#### 7.4.1 修改Text和HTML
jQuery对象的text()和html()方法分别获取节点的文本和原始HTML文本
```
<!-- HTML结构 -->
<ul id="test-ul">
    <li class="js">JavaScript</li>
    <li name="book">Java &amp; JavaScript</li>
</ul>
分别获取文本和HTML：

$('#test-ul li[name=book]').text(); // 'Java & JavaScript'
$('#test-ul li[name=book]').html(); // 'Java &amp; JavaScript'
```
无参数调用text()是获取文本，传入参数就变成设置文本
```
'use strict';
var j1 = $('#test-ul li.js');
var j2 = $('#test-ul li[name=book]');
j1.html('<span style="color: red">JavaScript</span>');
j2.text('JavaScript & ECMAScript');
```
#### 7.4.2 修改CSS
调用jQuery对象的css('name', 'value')方法
```
$('#test-css li.dy>span').css('background-color', '#ffd351').css('color', 'red');

var div = $('#test-div');
div.css('color'); // '#000033', 获取CSS属性
div.css('color', '#336699'); // 设置CSS属性
div.css('color', ''); // 清除CSS属性
```
修改class属性
```
var div = $('#test-div');
div.hasClass('highlight'); // false， class是否包含highlight
div.addClass('highlight'); // 添加highlight这个class
div.removeClass('highlight'); // 删除highlight这个class
```
#### 7.4.3 显示和隐藏DOM
```
var a = $('a[target=_blank]');
a.hide(); // 隐藏
a.show(); // 显示
```
#### 7.4.4 获取DOM信息
```
// 浏览器可视窗口大小:
$(window).width(); // 800
$(window).height(); // 600

// HTML文档大小:
$(document).width(); // 800
$(document).height(); // 3500

// 某个div的大小:
var div = $('#test-div');
div.width(); // 600
div.height(); // 300
div.width(400); // 设置CSS属性 width: 400px，是否生效要看CSS是否有效
div.height('200px'); // 设置CSS属性 height: 200px，是否生效要看CSS是否有效
```
attr()和removeAttr(),prop()方法
```
// <div id="test-div" name="Test" start="1">...</div>
var div = $('#test-div');
div.attr('data'); // undefined, 属性不存在
div.attr('name'); // 'Test'
div.attr('name', 'Hello'); // div的name属性变为'Hello'
div.removeAttr('name'); // 删除name属性
div.attr('name'); // undefined

var radio = $('#test-radio');
radio.attr('checked'); // 'checked'
radio.prop('checked'); // true
```
#### 7.4.5 操作表单
对于表单元素，jQuery对象统一提供val()方法获取和设置对应的value属性
```javascript
/*
    <input id="test-input" name="email" value="">
    <select id="test-select" name="city">
        <option value="BJ" selected>Beijing</option>
        <option value="SH">Shanghai</option>
        <option value="SZ">Shenzhen</option>
    </select>
    <textarea id="test-textarea">Hello</textarea>
*/
var
    input = $('#test-input'),
    select = $('#test-select'),
    textarea = $('#test-textarea');

input.val(); // 'test'
input.val('abc@example.com'); // 文本框的内容已变为abc@example.com

select.val(); // 'BJ'
select.val('SH'); // 选择框已变为Shanghai

textarea.val(); // 'Hello'
textarea.val('Hi'); // 文本区域已更新为'Hi'
```
#### 7.4.6 修改DOM结构
append()把DOM添加到最后，prepend()则把DOM添加到最前。同级节点可以用after()或者before()方法。
```javascript
/* 
<div id="test-div">
    <ul>
        <li><span>JavaScript</span></li>
        <li><span>Python</span></li>
        <li><span>Swift</span></li>
    </ul>
</div>
 */
var ul = $('#test-div>ul');
ul.append('<li><span>Haskell</span></li>');

// 创建DOM对象:
var ps = document.createElement('li');
ps.innerHTML = '<span>Pascal</span>';
// 添加DOM对象:
ul.append(ps);

// 添加jQuery对象:
ul.append($('#scheme'));

// 添加函数对象:
ul.append(function (index, html) {
    return '<li><span>Language - ' + index + '</span></li>';
});
```
要删除DOM节点，拿到jQuery对象后直接调用remove()方法就可以了
```
var li = $('#test-div>ul>li');
li.remove(); // 所有<li>全被删除
```
### 7.5 事件
```javascript
/* HTML:
 *
 * <a id="test-link" href="#0">点我试试</a>
 *
 */

// 获取超链接的jQuery对象:
var a = $('#test-link');
a.on('click', function () {
    alert('Hello!');
});

a.click(function () {
    alert('Hello!');
});
// 两者完全等价。我们通常用后面的写法。
```
#### 7.5.1 鼠标事件
```
click: 鼠标单击时触发；
dblclick：鼠标双击时触发；
mouseenter：鼠标进入时触发；
mouseleave：鼠标移出时触发；
mousemove：鼠标在DOM内部移动时触发；
hover：鼠标进入和退出时触发两个函数，相当于mouseenter加上mouseleave。
```
#### 7.5.2 键盘事件
```
键盘事件仅作用在当前焦点的DOM上，通常是<input>和<textarea>。

keydown：键盘按下时触发；
keyup：键盘松开时触发；
keypress：按一次键后触发。
```
#### 7.5.3 其他事件
```
focus：当DOM获得焦点时触发；
blur：当DOM失去焦点时触发；
change：当<input>、<select>或<textarea>的内容改变时触发；
submit：当<form>提交时触发；
ready：当页面被载入并且DOM树完成初始化后触发。


由于ready事件使用非常普遍，所以可以这样简化：

$(document).ready(function () {
    // on('submit', function)也可以简化:
    $('#testForm).submit(function () {
        alert('submit!');
    });
});
甚至还可以再简化为：

$(function () {
    // init...
});
```
#### 7.5.4 事件参数
所有事件都会传入Event对象作为参数，可以从Event对象上获取到更多的信息：
```
$(function () {
    $('#testMouseMoveDiv').mousemove(function (e) {
        $('#testMouseMoveSpan').text('pageX = ' + e.pageX + ', pageY = ' + e.pageY);
    });
});
```
#### 7.5.5 取消绑定
```
function hello() {
    alert('hello!');
}

a.click(hello); // 绑定事件

// 10秒钟后解除绑定:
setTimeout(function () {
    a.off('click', hello);
}, 10000);

off('click')一次性移除已绑定的click事件的所有处理函数。
```
#### 7.5.6 浏览器安全限制
在浏览器中，有些JavaScript代码只有在用户触发下才能执行，例如，window.open()函数
### 7.6 动画
#### 7.6.1 jQuery内置的几种动画样式
* show()和hide(),toggle()
* slideUp()和slideDown(),slideToggle()
* fadeIn()和fadeOut(),fadeToggle()
#### 7.6.2 自定义动画
animate()，它可以实现任意动画效果，我们需要传入的参数就是DOM元素最终的CSS状态和时间
```javascript
var div = $('#test-animate');
div.animate({
    opacity: 0.25,
    width: '256px',
    height: '256px'
}, 3000, function () {
    console.log('动画已结束');
    // 恢复至初始状态:
    $(this).css('opacity', '1.0').css('width', '128px').css('height', '128px');
});
```
#### 7.6.3 串行动画
```javascript
var div = $('#test-animates');
// 动画效果：slideDown - 暂停 - 放大 - 暂停 - 缩小
div.slideDown(2000)
   .delay(1000)
   .animate({
       width: '256px',
       height: '256px'
   }, 2000)
   .delay(1000)
   .animate({
       width: '128px',
       height: '128px'
   }, 2000);
```
### 7.7 `AJAX`(难点)
```
jQuery在全局对象jQuery（也就是$）绑定了ajax()函数，可以处理AJAX请求。ajax(url, settings)函数需要接收一个URL和一个可选的settings对象，常用的选项如下：

async：是否异步执行AJAX请求，默认为true，千万不要指定为false；

method：发送的Method，缺省为'GET'，可指定为'POST'、'PUT'等；

contentType：发送POST请求的格式，默认值为'application/x-www-form-urlencoded; charset=UTF-8'，也可以指定为text/plain、application/json；

data：发送的数据，可以是字符串、数组或object。如果是GET请求，data将被转换成query附加到URL上，如果是POST请求，根据contentType把data序列化成合适的格式；

headers：发送的额外的HTTP头，必须是一个object；

dataType：接收的数据格式，可以指定为'html'、'xml'、'json'、'text'等，缺省情况下根据响应的Content-Type猜测。

'use strict';

function ajaxLog(s) {
    var txt = $('#test-response-text');
    txt.val(txt.val() + '\n' + s);
}

$('#test-response-text').val('');
var jqxhr = $.ajax('/api/categories', {
    dataType: 'json'
}).done(function (data) {
    ajaxLog('成功, 收到的数据: ' + JSON.stringify(data));
}).fail(function (xhr, status) {
    ajaxLog('失败: ' + xhr.status + ', 原因: ' + status);
}).always(function () {
    ajaxLog('请求完成: 无论成功或失败都会调用');
});

```
常用的AJAX操作
> get
```
var jqxhr = $.get('/path/to/resource', {
    name: 'Bob Lee',
    check: 1
});
```
> post
```
var jqxhr = $.post('/path/to/resource', {
    name: 'Bob Lee',
    check: 1
});
```
> getJSON
```
var jqxhr = $.getJSON('/path/to/resource', {
    name: 'Bob Lee',
    check: 1
}).done(function (data) {
    // data已经被解析为JSON对象了
});
```
### 7.8 扩展：编写jQuery插件
给jQuery对象绑定一个新方法是通过扩展$.fn对象实现的。
```javascript
$.fn.highlight1 = function () {
    // this已绑定为当前jQuery对象:
    this.css('backgroundColor', '#fffceb').css('color', '#d85030');
    return this;
}

$.fn.highlight2 = function (options) {
    // 要考虑到各种情况:
    // options为undefined
    // options只有部分key
    var bgcolor = options && options.backgroundColor || '#fffceb';
    var color = options && options.color || '#d85030';
    this.css('backgroundColor', bgcolor).css('color', color);
    return this;
}

$.fn.highlight = function (options) {
    // 合并默认值和用户设定值:
    var opts = $.extend({}, $.fn.highlight.defaults, options);
    this.css('backgroundColor', opts.backgroundColor).css('color', opts.color);
    return this;
}

// 设定默认值:
$.fn.highlight.defaults = {
    color: '#d85030',
    backgroundColor: '#fff8de'
}
```
编写一个jQuery插件的原则：

1. 给$.fn绑定函数，实现插件的代码逻辑；
1. 插件函数最后要return this;以支持链式调用；
1. 插件函数要有默认值，绑定在$.fn.<pluginName>.defaults上；
1. 用户在调用时可传入设定值以便覆盖默认值。
## 错误处理
## underscore
## Node