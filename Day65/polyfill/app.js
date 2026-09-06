// agar js me kuchh aisa upadate hua hai jo abhi browser implement nahi kiya hai and wo browser me wo js changes ka feature use karna hai to polyfill likhte hai uske liye.

//agar browser ke andar sum() method ko adapt nahi kiya hai tabhi chalega ye polyfill wala code.
if (!Array.prototype.hasOwnProperty("sum")) {
  Array.prototype.sum = function () {
    let s = 0;
    for (let item of this) {
      s += item;
    }
    return s;
  };
}

const h1 = document.getElementById("heading");

let arr = [4, 4.5, 5, 6, 8, 7, 9];

// let sum = 0;

/*
for (let i = 0; i <= arr.length - 1; i++) {
  sum += arr[i];
}
let avg = (sum / arr.length).toFixed(2);
*/

let avg = arr.sum() / arr.length; // ham ekk sum method bana rahe hai js me khud se. ye exist nahi karta hai js me agar karta bhi hai to ye browser me abhi wo feature implement nahi hui hai.

h1.innerText = `Average Package= ${avg}`;

// ⭐⭐⭐⭐⭐⭐⭐

/*
//yaha ulta kaam karega aise hi ham polyfil likh sakte hai, toLowerCase() ke liye ham ekk polyfill likhe hai uske andar se return kiye hai toUpperCase(). abb toLowerCase() toUpperCase() ke jaisa kamm karega.

String.prototype.toLowerCase = function () {
  return this.toUpperCase();
};

let str = "Abcd";
console.log(str.toLowerCase());
*/

// ⭐⭐⭐⭐⭐⭐⭐

// yaha binarySearch() ke liye ekk polyfill banaye hai.
Array.prototype.binarySearch = function (t) {
  let s = 0;
  let e = this.length - 1;

  while (s <= e) {
    let mid = Math.floor((s + e) / 2);

    if (this[mid] == t) {
      return mid;
    } else if (this[mid] < t) {
      s = mid + 1;
    } else {
      e = mid - 1;
    }
  }
  return -1;
};

let arrs = [1, 2, 3, 4, 5, 6];
console.log(arrs.binarySearch(6));

// ⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐
// interview questions for polyfill.

// 🔥🔥🔥🔥🔥🔥1. write polyfill for Map()

// if isiliye lagate hai agar aisa method browser nahi adapt kiya hai tabhi chalega ye polyfill.
if (!Array.prototype.hasOwnProperty("myMap")) {
  Array.prototype.myMap = function (callback) {
    let ans = [];
    for (let item of this) {
      ans.push(callback(item)); // ye callback(item) hai wo wlaa jo line 87 me hai (item) hai ye callback function hai naa.
    }
    return ans;
  };
}

let arrr = [1, 2, 3, 4];

// yaha dekho myMap(), Map() ke jaisa kamm kar raha hai.
let ans = arrr.myMap((item) => {
  return item ** 2;
});

console.log(ans);

// 🔥🔥🔥🔥🔥🔥2. write polyfill for Filter()

if (!Array.prototype.hasOwnProperty("myFilter")) {
  Array.prototype.myFilter = function (callback) {
    let filt = [];
    for (let item of this) {
      if (callback(item)) {
        filt.push(item);
      }
    }
    return filt;
  };
}

let filterArr = [1, 2, 3, 4, 5, 6];

let filtArrAns = filterArr.myFilter((item) => {
  return item % 2 === 0;
});

console.log(filtArrAns);

// 🔥🔥🔥🔥🔥🔥3. write polyfill for Reduce()

if (!Array.prototype.hasOwnProperty("myReduce")) {
  Array.prototype.myReduce = function (callback, initialVal) {
    let acc = initialVal;
    for (let item of this) {
      acc = callback(acc, item);
    }
    return acc;
  };
}

let redArr = [1, 2, 3, 4];

let redAnsArr = redArr.myReduce((acc, curr) => {
  return acc + curr;
}, 0);

console.log(redAnsArr);

/*
⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐
Pehle Reduce ka actual flow dekho

Tum:

let redArr = [1, 2, 3, 4];

redArr.myReduce((acc, curr) => {
  return acc + curr;
}, 0);

de rahe ho.

Initial:

acc = 0

Then:

curr = 1
0 + 1 = 1

Ab result 1 next acc ban jayega:

acc = 1
curr = 2
1 + 2 = 3

Then:

acc = 3
curr = 3
3 + 3 = 6

Then:

acc = 6
curr = 4
6 + 4 = 10

Final:

10
*/

// ⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐
/*
Map mein:

result.push(callback(item));

Filter mein:

if (callback(item)) {
  result.push(item);
}

Reduce mein:

acc = callback(acc, item);

Ye 3 lines yaad hain to Map, Filter aur Reduce ke polyfill ka core logic samajh aa gaya.
*/
