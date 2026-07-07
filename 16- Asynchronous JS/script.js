const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Promise resolved value!');
  }, 10000);
});

// function getData() {
//   p.then(res => console.log(res));
// }
// getData();

// await can only be used inside async function
async function handlePromise() {
  console.log('Hello World');

  // Js Engine will wait for the promise to be resolved first.
  const val = await p;
  console.log(val);
  console.log('ifeanyi Javascript');

  const val2 = await p;
  console.log('ifeanyi Javascript');
  console.log(val2);
}
handlePromise();
