const getbtn = document.getElementById("getbtn");
const sendbtn = document.getElementById("sendbtn");

const sendRequest = (method, url, data) => {
  const promise = new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.responseType = "json";
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(data);

    xhr.onload = () => {
      resolve(xhr.response);
    };

    xhr.onerror = () => {
      reject("you have some problem dude...");
    };
  });
  return promise;
};

const getData = () => {
  sendRequest("get", "https://jsonplaceholder.typicode.com/todos/1").then(
    (responseItem) => {
      console.log(responseItem);
    }
  );
};

const sendData = () => {
  sendRequest(
    "POST",
    "https://jsonplaceholder.typicode.com/posts",
    JSON.stringify({
      title: "new title",
      body: "bom",
      userId: 2003,
    })
  )
    .then((responseItem) => {
      console.log(responseItem);
    })
    .catch((err) => {
      console.log(err);
    });
};

getbtn.addEventListener("click", getData);
sendbtn.addEventListener("click", sendData);
