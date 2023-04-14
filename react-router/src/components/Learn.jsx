import React from 'react'
import { Link, Outlet } from 'react-router-dom'

    export default function () {
  return (
    <div>
        <h1>Learn this Courses for Free</h1>
        <h2>React</h2>
        <h2>React Native</h2>
        <Link className="btn btn-success" to="/learn/courses">courses</Link> |  
        <Link className="btn btn-primary" to="/learn/bundles">bundles</Link>
        {/* Outlet Tag is used to add child component inside the parent component */}
        <Outlet/>
    </div>
  )
}
