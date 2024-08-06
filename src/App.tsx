import { useState } from "react";
import Counter from "./components/Count/Counter";
import State from "./components/Count/State";

const initialCounter = [
  {
    id: 1,
    count: 0,
  },
  {
    id: 2,
    count: 0,
  },
];
function App() {
  const [counters, setCounters] = useState(initialCounter);

  const totalCount = counters.reduce((sum , currentValue)=> currentValue.count + sum , 0)

  const handleIncrement = (counterId: number) => {
    const updatedCounter = counters.map((counterItem) => {
      if (counterItem.id === counterId) {
        return { ...counterItem, count: counterItem.count + 1 };
      }
      return counterItem;
    });
    setCounters(updatedCounter);
  };

  const handleDecrement = (counterId:number) => {
    const updatedCounter = counters.map((counterItem) => {
      if (counterItem.id === counterId) {
        return { ...counterItem, count: counterItem.count - 1 };
      }
      return counterItem;
    });
    setCounters(updatedCounter);
  };

  return (
    <>
      <div className="w-screen h-screen p-10 bg-gray-100 text-slate-700">
        <h1 className="max-w-md mx-auto text-center text-2xl font-bold">
          Simple Counter Application
        </h1>
        <div className="max-w-md mx-auto mt-10 space-y-5">
          {counters.map((counter) => (
            <Counter key={counter.id} count={counter.count} handleDecrement={()=> handleDecrement(counter.id)} handleIncrement={()=> handleIncrement(counter.id)} />
          ))}
          <State count={totalCount} />
        </div>
      </div>
    </>
  );
}

export default App;
