import { useState } from "react"
import { Button } from "./ui/button";
import Count from "./Count";

export default function Counter() {
    const [count , setCount] = useState(0);

    const handleIncrement = ()=> {
        setCount((prevCount) => prevCount + 1);
    };

    const handleDecrement = () =>{
        setCount((prevCount) => prevCount - 1);
    }
  return (
    <div className="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow">
        <Count count={count}/>
        <div className="flex space-x-3">
            <Button onClick={handleIncrement}>Increment</Button>
            <Button onClick={handleDecrement}>Decrement</Button>
        </div>
    </div>
  )
}
