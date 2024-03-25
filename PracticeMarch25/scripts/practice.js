/***Question 1***/
// Initialize array to hold users
var users = [];

function User(n, a) {
  this.name = n;
  this.age = a;
}

function makeObj() {
  var name = document.getElementById("name").value;
  var age = document.getElementById("age").value;

  users.push(new User(name, age));

  document.getElementById("name").value = "";
  document.getElementById("age").value = "";
}

function displayObj() {
  //clear display
  var displayArea = document.getElementById("displayArea");
  displayArea.innerHTML = "";

  users.forEach(function (user) {
    displayArea.innerHTML +=
      "Name: " + user.name + "<br>Age: " + user.age + "<br><br>";
  });
}

document.getElementById("makeButton").onclick = makeObj;
document.getElementById("displayButton").onclick = displayObj;

/***Question 2***/
function showJson() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      var user = JSON.parse(this.responseText);
      var displayElement = document.getElementById("q2");
      displayElement.innerHTML = `Name: ${user.name}<br>Age: ${user.company}<br>`;
    }
  };
  xhttp.open("GET", "./data/user.json", true);

  xhttp.send();
}

document.getElementById("btnq2").addEventListener("click", showJson);

/*** Question 3***/
function showTodos() {
  fetch("https://jsonplaceholder.typicode.com/todos")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Unable to fetch todos- Netowrk response not OK");
      }
      return response.json();
    })
    .then((todos) => {
      var displayElement = document.getElementById("q3");
      displayElement = document.getElementById("q3");
      displayElement.innerHTML = "";

      var list = document.createElement("ul");
      todos.forEach((todo) => {
        var listItem = document.createElement("li");
        listItem.className = "todo-list";
        listItem.innerHTML = `Task: ${todo.title} - Completed: ${
          todo.completed ? "Yes" : "No"
        }`;
        list.appendChild(listItem);
      });
      displayElement.appendChild(list);
    })
    .catch((error) => {
      console.error("There is a problem fetching the data", error);
    });
}
document.getElementById("btnq3").addEventListener("click", showTodos);
