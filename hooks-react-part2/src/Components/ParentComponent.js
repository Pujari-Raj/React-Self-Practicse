import React, { useCallback, useState } from 'react'
import Button from './Button';
import Count from './Count';
import Title from './Title';

const ParentComponent = () => {

    const [age, setAge] = useState(25);
    const [salary, setSalary] = useState(180000);

    /* useCallback hook can be used to improve performance in our react application
        Eg-> If we want re-render only age component then using useCallback-hook 
        it will only re-render that component only.
    */
    const incrementAge = useCallback(() => {
        setAge(age+1);
    }, [age])
    
    const incrementSalary = useCallback(() => {
        setSalary(salary*2);
    }, [salary])

  return (
    <div>
        <Title/>
        <Count text="age"  count={age} />
        <Button handleClick={incrementAge}>Increment Age</Button>
        <Count text="salary"  count={salary} />
        <Button handleClick={incrementSalary}>Increment salary</Button>
    </div>
  )
}

export default ParentComponent