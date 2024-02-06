import React from 'react'

import { Outlet } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <center>
        <Outlet />
      </center>
    </div>
  )
}

export default App