import { google } from "googleapis"

export default async (optionsViews: any, optionsOp: any) => {
  const keys = require("./../../googleCredentials.json")
  const scopes = "https://www.googleapis.com/auth/analytics.readonly"

  const jwt = new google.auth.JWT(
    keys.client_email,
    null,
    keys.private_key,
    scopes
  )
  const view_id = "199452424"
  const response = await jwt.authorize()
  const result = await google.analytics("v3").data.ga.get({
    auth: jwt,
    ids: "ga:" + view_id,
    "start-date": "30daysAgo",
    "end-date": "today",
    ...optionsViews
  })

  const opSystem = await google.analytics("v3").data.ga.get({
    auth: jwt,
    ids: "ga:" + view_id,
    "start-date": "30daysAgo",
    "end-date": "today",
    ...optionsOp
  })
  console.log(opSystem)
  return [result.data, opSystem.data]
}
