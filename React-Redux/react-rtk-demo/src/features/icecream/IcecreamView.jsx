import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ordered, restocked } from './icecreamSlice'
/*
    useSelector hook is used to read data from redux store (./app/store)
    it is sort of wrapper around store.getState()
*/

export const IcecreamView = () => {
    const numOfIcecreams = useSelector((state) => state.icecream.numOfIcecreams)
    const dispatch = useDispatch();
    const [value, setValue] = useState(1);

    return (
        <div>
            <h2>No.Of icecream- {numOfIcecreams}</h2>
            <button onClick={() => dispatch(ordered())}>Order icecream</button>

            <input type='number' value={value} onChange={(e) => setValue(parseInt(e.target.value))} />
            <button onClick={() => dispatch(restocked(value))}>Restock Ice cream</button>

            {/* <button onClick={() => dispatch(restocked(15))}>Restock Ice cream</button> */}
        </div>
    )
}
