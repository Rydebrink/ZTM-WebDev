var ob = {
  username: "user",
  password: "password",
};

var database = [ob];

var newsFeed = [
  { username: "andy", timeline: "Timeline" },
  { username: "Bob", timeline: "Timeline" },
  { username: "Alice", timeline: "Timeline" },
];

var username = prompt("Whats ur username");
var password = prompt("PW?");

function signIn(uName, pWord) {
  if (uName === database[0].username && pWord === database[0].password) {
    console.log(newsFeed);
  } else {
    alert("Wrong username or pw");
  }
}

signIn(username, password);
