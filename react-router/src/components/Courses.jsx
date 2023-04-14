import React from 'react'
import { Outlet, NavLink } from 'react-router-dom'

export default function Courses() {
  const courseList = ["React", "React Native", "Angular", "Vue"];
  const randomCourseName = courseList[Math.floor(Math.random() * courseList.length)];
  console.log(randomCourseName);

  return (
    <div>
        <h1>Courses Lists</h1>
        <h4>Courses</h4>

        <NavLink style={({isActive}) =>{
          return {
            backgroundColor: isActive ? "blue" : "red"
          }
        }}
        className="btn btn-primary mx-2" to={`/learn/courses/${randomCourseName}`}>
          {randomCourseName}
        </NavLink>

        <NavLink className="btn btn-success" to={`/learn/courses/tests`}>
          Test
        </NavLink>

        <Outlet/>
    </div>
  )
}
