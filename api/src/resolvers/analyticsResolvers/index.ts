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
    const response = await reqAnalyticsData({
      "start-date": from,
      "end-date": to,
      metrics: "ga:pageviews, ga:avgTimeOnPage",
      dimensions: "ga:date"
    })
        
    return response.rows.map(data => ({
      date: data[0],
      pageViews: parseInt(data[1]),
      timeOnPage: parseInt(data[2])
    }))
  }
}
