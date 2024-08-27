

// Define the props type

import { decrement, increment } from "@/redux/counter/action";
import { useDispatch, useSelector } from "react-redux";

export default function CounterComponent() {
    const count = useSelector((state: {value:number})=>  state.value)

    const dispatch = useDispatch();

    
  return (
    <div className="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow">
      <div className="text-2xl font-semibold">{count}</div>
      <div className="flex space-x-3">
        <button
          className="bg-indigo-400 text-white px-3 py-2 rounded shadow"
          onClick={()=> dispatch(increment(5))} // Increment by 2
        >
          Increment
        </button>
        <button
          className="bg-red-400 text-white px-3 py-2 rounded shadow"
          onClick={() => dispatch(decrement(6))} // Decrement by 1
        >
          Decrement
        </button>
      </div>
    </div>
  );
}

// const mapStateToProps = (state: RootState , {id} : {id:number}) => {
//     // console.log(id)
//   return {
//     count: state.value + id,
//   };
// };

// const mapDispatchToProps = (dispatch: Dispatch) => {
//   return {
//     increment: (value: number) => dispatch(increment(value)),
//     decrement: (value: number) => dispatch(decrement(value)),
//   };
// };

// // Connector for TypeScript typing
// const connector = connect(mapStateToProps, mapDispatchToProps);


// export default connector(CounterComponent);
