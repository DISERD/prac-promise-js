const isSuccess = true;

const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (isSuccess) {
      resolve(5);
    } else {
      reject("error - 404");
    }
  }, 2000);
});

myPromise
  .then((result) => {
    console.log(result);
    return result * 2;
  })
  .then((result) => {
    console.log(result);
    return result + 10;
  })
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("delete spiner");
  });