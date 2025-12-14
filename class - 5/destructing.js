// let arr = [1, 2, "string", true, [4, 5]];

// // arr[idx]

// // console.log(arr[4][1]);
// // console.log(arr[2]);
// // console.log(arr[2][3]);

// let [a, b, c, d, e, f, g] = [1, 2, "string", true, [4, 5]];

// console.log(a);
// console.log(f);

let obj = {
  name: "vijay",
  age: 25,
  place: "chennai",
};

// console.log(obj.name, obj["name"]);

let {
  age,
  place,
  name: userName,
  dob,
} = {
  name: "vijay",
  age: 25,
  place: "chennai",
};

console.log(userName, age, place, dob);
