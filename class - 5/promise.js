function delay(ms = 1000) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      //   rej(2);
      console.log(2);
      res();
    }, 1000 * 2);
  });
}

async function solve() {
  console.log(1);

  await delay(2000);

  console.log(3);
}

solve();

// console.log(1);

// delay(2000)
//   .then((data) => {
//     console.log(data);

//     return 3;
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
