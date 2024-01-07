// 3.10

// 1.

// let n = 3;

// const getSum = (n) => {
//   let odd = 1;
//   let even = 1;
//   for (let i = 1; i <= 2 * n; i++) {
//     if (i % 2 == 0) {
//       even *= i;
//     } else {
//       odd *= i;
//     }
//   }
//   return odd + even
// };

// console.log(getSum(n));

// 2.

// let arr = [1589, 31851, 512, 180975, 78];

// const getHighestNumberOfDigits = (arr) => arr.sort((a, b) => b.toString().length - a.toString().length)[0];

// console.log(getHighestNumberOfDigits(arr));

// 3.

// let arr = [1, "Abdulaziz", "Elbek", false, [], "Jurabek", {}];

// const getStringArr = (arr) => {
//   let res = [];
//   for (const el of arr) {
//     if (typeof el === "string") {
//       res.push(el);
//     }
//   }
//   return res;
// };

// console.log(getStringArr(arr));

// 4.

// let str = "Hello! How are you? I'm doing great. What's new?";
// const punctuationSigns = ['!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '\\', ']', '^', '_', '`', '{', '|', '}', '~', "'"];
// let count = 0;

// const getPunctuationNumber = (str) => {
//   str.split("").map((el) => {
//     if (punctuationSigns.includes(el)) {
//       count++;
//     }
//   });
//   return count;
// };

// console.log(getPunctuationNumber(str));

// 5.

// let str = "Abdulaziz Programmer";

// const switchLetters = (str) => {
//   return str
//     .split("")
//     .map((el) => {
//       let temp = el;
//       if (temp == el.toUpperCase()) {
//         return el.toLowerCase();
//       } else {
//         return el.toUpperCase();
//       }
//     })
//     .join("");
// };

// console.log(switchLetters(str));

// 6.

// let obj = { a: 1, b: 2, c: 3 };

// const changeObjToArr = (obj) => {
//   let res = [];
//   for (const el in obj) {
//     res.push(el + obj[el]);
//   }
//   return res;
// };

// console.log(changeObjToArr(obj));

// 7.

// let students = [
//   { name: "Jurabek", isGrant: false },
//   { name: "Elbek", isGrant: true },
//   { name: "Shamshod", isGrant: false },
//   { name: "Kamola", isGrant: false },
//   { name: "Gulnoza", isGrant: true },
//   { name: "Savlatbek", isGrant: false },
// ];

// const seperateStudents = (students) => {
//   let grant = [];
//   let contract = [];
//   for (const el of students) {
//     if (el.isGrant) {
//       grant.push(el.name);
//     } else {
//       contract.push(el.name);
//     }
//   }
//   return { grant, contract };
// };

// console.log(seperateStudents(students));

// 8.

// const books = [
//   { name: "The Great Gatsby", pages: 180, isReadFinished: true },
//   { name: "To Kill a Mockingbird", pages: 336, isReadFinished: false },
//   { name: "Atom habits", pages: 328, isReadFinished: true },
//   { name: "Pride and Prejudice", pages: 432, isReadFinished: false },
//   { name: "The Catcher in the Rye", pages: 224, isReadFinished: true },
//   { name: "The Hobbit", pages: 310, isReadFinished: false },
//   { name: "The Lord of the Rings", pages: 1178, isReadFinished: true },
//   { name: "Harry Potter", pages: 320, isReadFinished: true },
//   { name: "Fahrenheit 451", pages: 249, isReadFinished: false },
//   { name: "To the Lighthouse", pages: 209, isReadFinished: true },
// ];

// const getTotalPages = (books) => {
//   return books.reduce((acc, el) => {
//     if (el.isReadFinished) {
//       acc += el.pages;
//     }
//     return acc;
//   }, 0);
// };

// console.log(getTotalPages(books));

// 5.10

// 1.

// let n = 30;

// const getOddDividersSum = (n) => {
//   let res = 0;
//   for (let i = 1; i <= n / 2; i++) {
//     if (i % 2 !== 0 && n % i == 0) {
//       res += i;
//     }
//   }
//   return res;
// };

// console.log(getOddDividersSum(n));

// 2.

// let arr = [
//   "Abdulaziz",
//   "Shahobiddin",
//   "Shohrux",
//   "Shukurjon",
//   "Azamat",
//   "Rahmatulla",
// ];
// let str = "az";

// const search = (arr, str) => {
//   let res = [];
//   for (const el of arr) {
//     if (el.toLowerCase().search(str) != -1) {
//       res.push(el);
//     }
//   }
//   return res;
// };

// console.log(search(arr, str));

// 3.

// let n = 5;
// let arr = [2, 5, 7, 10, 0, 18, 15];

// const getDividersSum = (arr, n) => {
//   return arr.reduce((acc, el) => {
//     if (el % n == 0) {
//       acc += el;
//     }
//     return acc;
//   }, 0);
// };

// console.log(getDividersSum(arr, n));

// 4.

// let str = "Abdulaziz programmer is full-stack developer.";

// const checkSentence = (str) => {
//   if (
//     str.charCodeAt(0) >= 65 &&
//     str.charCodeAt(0) <= 90 &&
//     str.charCodeAt(str.length - 1) == 46
//   ) {
//     return true;
//   } else {
//     return false;
//   }
// };

// console.log(checkSentence(str));

// 5.

// let str = "Abdulaziz Programmer";

// const getNumberOfCases = (str) => {
//   return str.split("").reduce(
//     (acc, el) => {
//       if (el.charCodeAt(0) >= 65 && el.charCodeAt(0) <= 90) {
//         acc.uppercase++;
//       } else if (el.charCodeAt(0) >= 97 && el.charCodeAt(0) <= 122) {
//         acc.lowercase++;
//       }
//       return acc;
//     },
//     { uppercase: 0, lowercase: 0 }
//   );
// };

// console.log(getNumberOfCases(str));

// 6.

// let obj = { a: 1, b: 2, c: 3 };

// const changeObjToString = (obj) => Object.keys(obj).concat(Object.values(obj)).join("");

// console.log(changeObjToString(obj));

// 7.

// const products = [
//   { id: 1, name: "Bike", price: 100 },
//   { id: 2, name: "TV", price: 400 },
//   { id: 3, name: "Album", price: 800 },
//   { id: 4, name: "Book", price: 600 },
//   { id: 5, name: "Phone", price: 500 },
//   { id: 6, name: "Computer", price: 1000 },
//   { id: 7, name: "Skate", price: 300 },
//   { id: 8, name: "Keyboard", price: 200 },
//   { id: 9, name: "Bottle", price: 700 },
// ];

// const getProductsSum = (...rest) => {
//   let res = 0;
//   rest.forEach((i) => {
//     res += products.reduce((acc, el) => {
//       return i == el.id ? acc + el.price : acc;
//     }, 0);
//   });
//   return res;
// };

// console.log(getProductsSum(4, 6, 9));

// 8.

// let n = 3;
// const products = [
//   { id: 1, name: "Bike", price: 100 },
//   { id: 2, name: "TV", price: 400 },
//   { id: 3, name: "Album", price: 800 },
//   { id: 4, name: "Book", price: 600 },
//   { id: 5, name: "Phone", price: 500 },
//   { id: 6, name: "Computer", price: 1000 },
//   { id: 7, name: "Skate", price: 300 },
//   { id: 8, name: "Keyboard", price: 200 },
//   { id: 9, name: "Bottle", price: 700 },
// ];

// const getTopProducts = (products, n) => products.sort((a, b) => b.price-a.price).splice(0, n).map(el => el.name);

// console.log(getTopProducts(products, n));
