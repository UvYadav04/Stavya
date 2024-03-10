import React, { useContext } from 'react'
import { context1 } from './ContextReducer'
export default function Changer() {
    const dispatch = useContext(context1)
    return (
        <>
            <button onClick={() => dispatch({ title: "chtireakla" })}> Change</button >
        </>
    )
}
