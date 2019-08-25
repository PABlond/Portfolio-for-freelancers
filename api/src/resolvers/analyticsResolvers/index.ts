import reqAnalyticsData from "./../../utils/reqAnalyticsData"

export const getPageViews = async (
  root: any,
  args: any,
  context: any,
  info: any
) => {
  console.log("getPageViews")
  const data = await reqAnalyticsData({
    "start-date": "30daysAgo",
    "end-date": "today",
    metrics: "ga:pageviews, ga:sessionDuration",
    dimensions: "ga:userType"
  })

  return {
    new: data.rows[0][1],
    returning: data.rows[1][1]
  }
}
