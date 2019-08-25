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
    const data = await reqAnalyticsData({
      "start-date": from,
      "end-date": to,
      metrics: "ga:pageviews, ga:sessionDuration",
      dimensions: "ga:userType"
    })
    if (data.rows) {
    }
    return data.rows
      ? {
          new: data.rows[0][1],
          returning: data.rows[1][1]
        }
      : {
          new: 0,
          returning: 0
        }
  }
}
