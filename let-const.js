/*
* @Author: lihaocheng
* @Date:   2018-07-17 10:47:04
* @Last Modified by:   lihaocheng
* @Last Modified time: 2018-07-17 10:57:36
*/
//变量和常量
let r=2;
r=4;
console.log(r);

const pi=3.14;
pi=12;
console.log(pi);

//不能重复定义
var foo=1;
var foo=2;
console.log(foo);

let bar=1;
let bar=2;
console.log(bar);

//块级作用域
if(true){
	var test=1;
}
console.log(test);

if(true){
	let test1=1;
}
console.log(test1);

//块级作用域2
var arr=[1,2,3,4];

let arr=[1,2,3,4];
for(var i=0;iLength=arr.length;i<iLength;i++){

}
console.log(i);

//不存在变量提升
console.log(foo);
var foo=1;

var foo;
console.log(foo);
foo=1;

console.log(bar);
let bar=1;