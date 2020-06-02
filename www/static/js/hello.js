'use strict';

// var s = 'Hello, world!'
// console.log(s.toUpperCase());
// console.log(s.indexOf('world'));

// var ss = s.substring(s.indexOf('wo'), s.indexOf('!'));
// console.log(ss);

// ss = 'you';
// console.log(ss);
// console.log(s);


// var arr = [1, 2.1, Infinity, NaN, 'Hello', null, undefined, true, {name: 'Bob', age: 20}];
// console.log(arr)
// console.log(arr.length)
// console.log(arr.indexOf(null))
// console.log(arr.slice(2, 5))


// var arr = ['A', 'B', 'C', 'D'];
// var aCopy = arr.slice();
// console.log(aCopy);
// console.log(aCopy === arr);

// arr.push('AA', 'BB');
// console.log(arr);

// var a = arr.pop();
// console.log(a, arr);

// arr.unshift('CC', 'DD');
// console.log(arr);

// var b = arr.shift();
// console.log(b, arr);

// arr.sort();
// console.log(arr);

// arr.reverse();
// console.log(arr);


// var arr = ['MS', 'AP', 'YH', 'AL', 'EX', 'OR'];
// arr.splice(2,3,'GG','FB');
// console.log(arr);
// arr.splice(2,2);
// console.log(arr);
// arr.splice(2,0,'GO','FB');
// console.log(arr);


// var arr = ['A','B','C'];
// var added = arr.concat([1,2,3], 2, 4);
// console.log(arr, added);
// console.log(arr.join('--'));


// var arr = [[1,2,3],[400,500,600],'-'];
// console.log(arr[1][1]);

// var arr = ['Min','Hong','Jun','Huang'];
// var tail = arr.splice(2,2);
// tail = tail.join(' And ');
// arr.push(tail);
// console.log(arr);
// var head = arr.shift();
// var newarr = [].concat(`Welcome ${head}`, arr);
// var str = newarr.join(', ');
// console.log(str + '!');


// var xiaoming = {
//     name: 'xiaoming',
//     birth: 1990,
//     score: null,
//     'middle-school': 'No.1 School'
// };

// console.log(xiaoming.name);
// console.log(xiaoming['middle-school']);
// console.log(xiaoming.age);

// xiaoming.age = 18;
// console.log(xiaoming.age);

// delete xiaoming.age;
// console.log(xiaoming.age);

// console.log('name' in xiaoming);
// console.log(xiaoming.hasOwnProperty('toString'));


// var height = parseFloat(prompt('Please enter height(m): '));
// var weight = parseFloat(prompt('Please enter weight(kg): '));
// var bmi = weight/(height**2);
// if(bmi < 18.5)
// {
//     console.log('Overlight');
// }
// else if(bmi < 25)
// {
//     console.log('Common');
// }
// else if(bmi < 28)
// {
//     console.log('Overweight');
// }
// else if(bmi < 32)
// {
//     console.log('Fat');
// }
// else
// {
//     console.log('Too Fat');
// }


// var x = 1;
// var i;
// for(i = 1; i <= 10; i++)
// {
//     x = x * i;
// }
// console.log(x);


// var o = {
//     name: 'Jack',
//     age: 20,
//     city: 'Beijing'
// };

// for(var key in o)
// {
//     if(o.hasOwnProperty(key))
//     {
//         console.log(key);
//     }
// }


// var arr = ['A','B','C'];
// for(var i in arr)
// {
//     console.log(i);
// }


// var arr = ['Bart', 'Lisa', 'Adam'];
// for(var i=arr.length-1; i >= 0; i--)
// {
//     console.log(arr[i]);
// }