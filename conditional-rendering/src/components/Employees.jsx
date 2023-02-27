import React from 'react';
import Item from './Item'

export default function Employees({employeelist}) {
    if (!employeelist) {
        return null;
    }
  return (
    <div>
        <ul>
            {employeelist.map(item =>(
                <Item key={item.firstName} item={item}></Item>
            ))}
        </ul>
    </div>
  )
}
