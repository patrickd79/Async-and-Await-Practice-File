/* async function myFunction() {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Hello", 100));
  });
  let error;
  if (!error) {
    const response = await promise; //Wait until promise is resolved
    return response;
  } else {
    await Promise.reject(new Error("Something went wrong."));
  }
}

myFunction()
  .then(response => console.log(response))
  .catch(error => console.log(error));
 */

async function getUsers() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");

  const data = await response.json();
  return data;
}
getUsers().then(users => console.log(users));
