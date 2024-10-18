
// __________________________________________Foreach__________________________________

// 1.
// var arr = [1,2,3,5,84,64,8,564,]
// arr.forEach(function(value)  {
//     console.log(value)
// })

//2.
// var a = [1,5,8,6,1,5,52,55,5,]

// a.forEach(function(ar){
//     console.log(arr + 5)
// }) 

// 3.
// var ar = [1,2,54,33,8,9,654,5,5]

// ar.forEach(function (params) {
//    if(params % 2 == 1){
//     console.log(params)
//    }
// })

// 4.
// var ar = [1,5,7,9,62,8,8]
// var count = 0
// ar.forEach(function(a){
//     count ++
//     console.log(count)
// })


// 5. yangi massivni ekranga chiqarish uchun `forEach` metodidan foydalaning.



// __________________________________ map___________________
// 1. 
// var a = [6,5,1,5,4]
//      a.map(function (value) {
//         return value * 2
// //     })

// // 2. 
// var b = [6,5,1,5,4]

//      b.map(function (value) {
//         return value ** 2
//     })


// // 3. 
// var m = ['kmkml','kmlmlknji','nij']
// array.map(function (word) {
//         return word.toUpperCase()
//     })


// // 4.


// // 5.
// var c = [5,8,5,21,8]
//     array.map(function (value) {
//         return value + 3
//     })
// ____________________fiter_________________________________

// 1.
// var arr = [1,2,3,5,7]
// arr.filter(function (value) {
//     return value % 2 === 0
//     })

// // 2.
// var array = [1,2,3,5,7,86,-8,-5,-9,-65,-54]
// array.filter(function (value) {
//         return value > 0
//     })

// // 3.
//     var a = ['dsdsds','sd','dssd','dsds']
//     a.filter(function (word) {
//         return word.length > 5
//     })


// // 4. 
// var ages = [15, 20, 25, 18, 30, 12]

//  ages.filter(function(age) {
//     return age > 18
// });
// console.log(age)

// 5. 
// var numbers = [5, 12, 8, 20, 3, 10]

// numbers.filter(function(num) {
//     return num < 10
// })
// console.log(num)

// _______________________find_____________________
// 1.
// var numbers = [5, 12, 8, 20, 3, 10]
// numbers.find(function(num) {
//     return num > 10
// })
// console.log(num)

// 2.
// var numbers = [-5, 12, -8, 20, 3, 0]
// numbers.find(function(num) {
//     return num >= 0
// })
// console.log(num)
// 3.
// var words = ["jk", "mkde", "nmdk k", "kjewmdnkl"]
// words.find(function(word) {
//     return word.length > 4
// })
// console.log(word)
// 4.
// var numbers = [1, 2, 3, 4, 5, 6]
//  numbers.find(function(num) {
//     return num % 2 === 0
// })
// console.log(num)
// 5.
// var numbers = [-1, 0, 2, -3, 5]
// numbers.find(function(num) {
//     return num >= 0
// })
// console.log(Num)

// ___________________________________________ some/every  __________________________________
// 1.
// var numbers = [1, 2, -3, 4, 5]
// numbers.some(function(num) {
//     return num < 0
// })
// console.log(num)

// 2.
// var numbers = [1, 3, 5, 7]
//  numbers.some(function(num) {
//     return num % 2 === 0
// })
// console.log(num)

// 3.
// var words = ["jkadwn kj", "jkdwsnkj", "apple"];
// var hasApple = words.some(function(word) {
//     return word === "apple"
// })
// console.log(word)

// 4.
// var numbers = [1, 2, 3, 0, 5];a
// numbers.every(function(num) {
//     return num > 0
// })
// console.log(num)

// 5.
// var qarr = ["hello", "world", 42, 'cdn'];
//  qarr.every(function(a) {
//     return typeof a === 'string'
// })
// console.log(a)

// 6.
// var numbers = [1, 50, 99, 100]
// numbers.every(function(num) {
//     return num < 100
// })
// console.log(num)
