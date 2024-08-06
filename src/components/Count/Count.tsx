interface CountProps{
    count: number;
}

export default function Count({count}:CountProps) {
  return (
    <div className='text-2xl font-semibold'>{count}</div>
  )
}
