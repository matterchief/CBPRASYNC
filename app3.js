// function api() {
//   return new promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Weather data obtained");
//       resolve(200);
//     }, 4000);
//   });
// }

// async function getWeatherData() {
//   await api();
//   await api();
// }

function getData(dataId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data", dataId);
      resolve("success");
    }, 4000);
  }); // return end
} //function end
//Async-Await

(async function () {
  console.log("getting data1 ....");
  await getData(1);
  console.log("getting data2 ....");
  await getData(2);
  console.log("getting data3 ....");
  await getData(3);
  console.log("getting data4 ....");
  await getData(4);
  console.log("getting data5 ....");
  await getData(5);
  console.log("getting data6 ....");
  await getData(6);
  console.log("getting data7 ....");
  await getData(7);
  console.log("All datas fetched");
})(); //end of async function
