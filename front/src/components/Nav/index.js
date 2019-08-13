import React, { useState } from "react"
import Sidebar from "react-sidebar"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

export default () => {
  const [sidebarOpen, setSideBar] = useState(false)

  const onSetSidebarOpen = open => setSideBar(open)

  return (
    <Sidebar
      sidebar={<b>Sidebar content</b>}
      open={sidebarOpen}
      onSetOpen={onSetSidebarOpen}
      styles={{ sidebar: { background: "white" } }}
    >
      <a onClick={() => onSetSidebarOpen(true)}><FontAwesomeIcon icon={faBars} size="2x" /></a>
    </Sidebar>
  )
}
