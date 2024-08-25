import ButtonCounts from './ButtonCounts';
import Count from './Count';

interface CounterProps {
    id:number ;
    decrement: (id:number) => void
    increment:(id:number)=>void ;
    count:number ;
}

export default function Counter({id,count, decrement , increment}: CounterProps) {
  return (
    <div>
        <Count count={count}/>
        <ButtonCounts handler={()=> increment(id)} label='Increment'/>
        <ButtonCounts handler={()=> decrement(id)} label='Decrement'/>
    </div>
  )
}
