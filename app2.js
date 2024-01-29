function getdata(data) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, 1000);
  });
}

getdata(1)
  .then((res) => {
    console.log(res);

    return getdata(2);
  })
  .then((res) => {
    console.log(res);

    return getdata(3);
  })
  .then((res) => {
    console.log(res);

    return getdata(4);
  })
  .then((res) => {
    console.log(res);

    return getdata(5);
  })
  .then((res) => {
    console.log(res);
    return getdata(6);
  })
  .then((res) => {
    console.log(res);

    console.log("all data's fecthed");
  });

// function asyncFunc1() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("fecthing data 1");
//       resolve("success");
//     }, 2000);
//   });
// }

// function asyncFunc2() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("  fetching data 2...");
//       resolve("success");
//     }, 2000);
//   });
// }

// function asyncFunc3() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("  fetching data 3...");
//       resolve("success");
//     }, 2000);
//   });
// }

// asyncFunc1().then((res) => {
//   console.log(res);
//   asyncFunc2().then((res) => {
//     console.log(res);
//     asyncFunc3().then((res) => {
//       console.log(res);
//     });
//   });
// });

// console.log("fecthing data 2...");
// let P2 = asyncFunc2();
// P2.then((res) => {
//   console.log(res);
// })
