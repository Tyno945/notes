### 条件判断
> 计算BMI指数并判断
```javascript
'use strict';

var height = parseFloat(prompt('请输入身高(m):'));
var weight = parseFloat(prompt('请输入体重(kg):'));
var bmi = weight /Math.pow(height,2);
while(isNaN(bmi)){
    alert('Please write a number!');
    height = parseFloat(prompt('请输入身高(m):'));
    weight = parseFloat(prompt('请输入体重(kg):'));
    bmi = weight /Math.pow(height,2);
}
if (bmi < 18.5){
    alert("过轻");
} else if (bmi < 25){
    alert("正常");
} else if (bmi < 28){
    alert("过重");
} else if (bmi < 32){
    alert("肥胖");
} else {
    alert("严重肥胖");
}
```

### 循环
> 累加
```javascript
var x = 0;
var i;
for (i=1; i<=10000; i++) {
    x = x + i;
}
x; // 50005000
```
> 累积
```javascript
'use strict';

var x = 1;
var i;
for (i=1;i<=10;i++) {
    x = x * i;
}

if (x === 3628800) {
    console.log('1 x 2 x 3 x ... x 10 = ' + x);
}
else {
    console.log('计算错误');
}
```
> 遍历数组
```javascript
var arr = ['Apple', 'Google', 'Microsoft'];
var i, x;
for (i=0; i<arr.length; i++) {
    x = arr[i];
    console.log(x);
}
```
> 遍历对象
```javascript
var o = {
    name: 'Jack',
    age: 20,
    city: 'Beijing'
};
for (var key in o) {
    if (o.hasOwnProperty(key)) {
        alert(key); // 'name', 'age', 'city'
    }
}

var a = ['A', 'B', 'C'];
for (var i in a) {
    alert(i); // '0', '1', '2'
    alert(a[i]); // 'A', 'B', 'C'
}
```
> while循环
```javascript
var x = 0;
var n = 99;
while (n > 0) {
    x = x + n;
    n = n - 2;
}
x; // 2500
```
