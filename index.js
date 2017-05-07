var superagent = require("superagent")
var request = superagent.agent()

var baseUrl = "http://diory-server.herokuapp.com/v1/"
var type = "diories/"
var id = "5652"
var authToken = "diomber-room-1"

var promise = request
  .get(baseUrl + type + id)
  .set("Accept", "application/vnd.api+json")
  .set("Authorization", authToken)

var response = promise.then((res, err) => {
  return JSON.stringify(res.body)
})

response.then(res => {
  console.log(res)
})
