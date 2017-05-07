var superagent = require("superagent")
var request = superagent.agent()

function dioryApi() {}

dioryApi.get = function(type, id) {

  var baseUrl = "http://diory-server.herokuapp.com/v1/"
  var authToken = "diomber-room-1"

  type = type + "/"

  var promise = request
    .get(baseUrl + type + id)
    .set("Accept", "application/vnd.api+json")
    .set("Authorization", authToken)

  return promise.then((res, err) => {
    return JSON.stringify(res.body)
  })

}

dioryApi.get("diories", "5652").then(res => {
  console.log(res)
})
