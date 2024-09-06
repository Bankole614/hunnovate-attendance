import React from 'react'
import { Link } from 'react-router-dom'

const Dashboard = () => {
  return (
    <div>
      <p>This is the dashboard</p>
      <Link to="/attendance">Go to products</Link>
    </div>
  )
}

export default Dashboard