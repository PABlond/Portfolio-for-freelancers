export default `
type PageViews {
    date: String,
    pageViews: Int,
    timeOnPage: Int
}
type OpSystem {
    device: String,
    count: Int
}
type AnalyticsResponse {
    traffic: [PageViews],
    op: [OpSystem]
}`
