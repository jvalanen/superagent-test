var superagent = require("superagent")
var request = superagent.agent()

function dioryApi() {}

dioryApi.get = function(type, id) {
  var authToken;
  var baseUrl = "http://diory-server.herokuapp.com/v1/"

  try { 
    var diographAuth = require("diograph-authentication")
    authToken = diographAuth.token
  } 
  catch(e) {
    authToken = "diomber-room-1"
  }

  type = type + "/"

  var promise = request
    .get(baseUrl + type + id)
    .set("Accept", "application/vnd.api+json")
    .set("Authorization", authToken)

  return promise.then((res, err) => {
    return JSON.stringify(res.body)
  }).catch(err => {
    throw JSON.stringify(err.response.body)
  })

}

dioryApi.get("diories", "5652").then(res => {
  console.log(res)
}).catch(err => {
  console.log(err)
})

/*dioryApi.get("connections", "9979").then(res => {
  console.log(res)
})*/

/*dioryApi.get("connections", "invalid id").then(res => {
  console.log(res)
}).catch(err => {
  console.log(err)
})*/

/*dioryApi.get("connections", "5652").then(res => {
  console.log(res)
}).catch(err => {
  console.log(err)
})*/


