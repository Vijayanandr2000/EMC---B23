let a = [1, 2, 3, 4];

// let mul = [];

// for (let i = 0; i < a.length; i++) {
//   let data = a[i] * 2;

//   mul.push(data);
// }

// console.log(mul);

// let mul = a.map((data, idx, a) => {
//   return data * 2;
// });

Array.prototype.sum = function () {
  //   let sum = 0;
  //   for (let i = 0; i < this.length; i++) {
  //     sum += this[i];
  //   }
  //   return sum;
  return this.reduce((acc, curr) => {
    return acc + curr;
  }, 0);
};

console.log(a.sum());

// console.log(mul);
