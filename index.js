var superagent = require("superagent")
var request = superagent.agent()

request
  .get("http://diory-server.herokuapp.com/v1/diories/5652")
  .set("Accept", "application/vnd.api+json")
  .set("Authorization", "diomber-room-1")
  .end((err, res) => {
    console.log(res) 
  })

console.log("Hello world!")