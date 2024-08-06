import { Button } from "../ui/button";
import Count from "./Count";

interface CounterProps{
    count:number;
    handleIncrement: () => void;
    handleDecrement: () => void; 
}

export default function Counter({count , handleIncrement , handleDecrement}:CounterProps) {
 
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
