import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

export default function Dev({number}) {
    const [count, setCount] = useState(number)
    console.log('Dev render');
    // useEffect(()=>{
    //     setCount(number);

    // }, [number])
    return (
    <div className="card">
        <p style={{color: "red", textAlign:"center"}}>{count}</p>
    </div>
  )
}
