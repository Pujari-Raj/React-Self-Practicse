import React from 'react'

export default function ({item}) {
  return (
    <div>
        <li>
            {item.firstName} {item.lastName}
        </li>

    </div>
  )
}
