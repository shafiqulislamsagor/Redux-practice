import React from 'react'

export default function Count({count}: {count: number}) {
  return (
    <h1 className='text-4xl'>{count}</h1>
  )
}
