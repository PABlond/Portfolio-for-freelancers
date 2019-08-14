import React from "react"
import queryString from 'query-string'

export default ({ location }) => {
    console.log(queryString.parse(location.search))
    return (
  <div>
    <h1>Hi from the second page</h1>
    
  </div>
)}
