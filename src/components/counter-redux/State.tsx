import React from 'react'
interface StateProps {
    count: number;
}

export default function State({count}: StateProps) {
  return (
    <div>
        <h1 className='text-3xl text-gray-700 font-bold mt-4 text-center'>Total Count: {count}</h1>
    </div>
  )
}
