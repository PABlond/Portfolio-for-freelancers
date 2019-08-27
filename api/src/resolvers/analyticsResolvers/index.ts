import reqAnalyticsData from "./../../utils/reqAnalyticsData"
import checkToken from "./../../utils/checkToken"

export const getPageViews = async (
  root: any,
  args: any,
  context: any,
  info: any
) => {
  // console.log("getPageViews", args)
  const { from, to, token } = args
  if (await checkToken(token)) {
    const [response, responseOp] = await reqAnalyticsData(
      {
        "start-date": from,
        "end-date": to,
        metrics: "ga:pageviews, ga:avgTimeOnPage",
        dimensions: "ga:date"
      },
      {
        "start-date": from,
        "end-date": to,
        metrics: "ga:pageviews",
        dimensions: "ga:operatingSystem"
      }
    )
    console.log({
      traffic: response.rows.map(data => ({
        date: data[0],
        pageViews: parseInt(data[1]),
        timeOnPage: parseInt(data[2])
      })),
      op: responseOp.rows.map(data => ({
        device: data[0],
        count: data[1]
      }))
    })

    return {
      traffic: response.rows.map(data => ({
        date: data[0],
        pageViews: parseInt(data[1]),
        timeOnPage: parseInt(data[2])
      })),
      op: responseOp.rows.map(data => ({
        device: data[0],
        count: data[1]
      }))
    }
  }
}
