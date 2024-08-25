import Counter from "@/components/counter-redux/Counter";
import State from "@/components/counter-redux/State";
import { useState } from "react";


const initialState = [
  {
    id:1,
    count: 0
  },
  {
    id:2,
    count: 0
  },
  {
    id:3,
    count: 0
  }
]
export default function CounterRedux() {
  const [state, setState] = useState(initialState)

  const increment = (id:number) =>{
    const updatedState = state.map(c => {
      if(c.id === id){
        return {...c , count: c.count + 1}
      }
      return {...c}
    })
    setState(updatedState)
  }
  const decrement = (id:number) =>{
    const updatedState = state.map(c => {
      if(c.id === id){
        return {...c , count: c.count - 1}
      }
      return {...c}
    })
    setState(updatedState)
  }

  const totalValue = state.reduce((total , value)=> total + value.count, 0)
  return (
    <div>
      <h1>1st counter</h1>
      {
        state.map(counters => <Counter
          key={counters.id}
          id={counters.id}
          count={counters.count}
          increment={increment}
          decrement={decrement}
        />)
      }
      <State count={totalValue} />
    </div>
  )
}
