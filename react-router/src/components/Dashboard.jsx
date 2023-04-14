import React from 'react'
import { useLocation } from 'react-router-dom'

export default function Dashboad() {
  const location = useLocation();
  return (
    <div>
        <p style={{color: "#fff"}}>Info from CourseID component is- {location.state}</p>
    </div>
  )
}
