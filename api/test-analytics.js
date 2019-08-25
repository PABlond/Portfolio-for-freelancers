const { google } = require("googleapis")
require("dotenv").config()
const keys = require("./googleCredentials.json")

const scopes = "https://www.googleapis.com/auth/analytics.readonly"

const jwt = new google.auth.JWT(
  keys.client_email,
  null,
  keys.private_key,
  scopes
)
const view_id = "199452424"

async function getData() {
  const response = await jwt.authorize()
  const result = await google.analytics("v3").data.ga.get({
    auth: jwt,
    ids: "ga:" + view_id,
    "start-date": "30daysAgo",
    "end-date": "today",
    metrics: "ga:pageviews, ga:sessionDuration",
    dimensions: "ga:userType"
  })

  const  {totalsForAllResults} = result.data
  const data = {
    new: result.data.rows[0][1],
    returning: result.data.rows[1][1]
  }
  console.log(data)
}

getData()
