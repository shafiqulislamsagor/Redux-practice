// old redux state 
import { decrement, increment } from "@/redux/counter/action";
import { connect, ConnectedProps } from "react-redux";
import { RootState } from "@/redux/store"; // Assuming you have a RootState type defined
import { Dispatch } from "redux";

// Define the props type
type CounterProps = ConnectedProps<typeof connector>;

function HooksCounter({ count, increment, decrement }: CounterProps) {
  return (
    <div className="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow">
      <div className="text-2xl font-semibold">{count}</div>
      <div className="flex space-x-3">
        <button
          className="bg-indigo-400 text-white px-3 py-2 rounded shadow"
          onClick={() => increment(2)} // Increment by 2
        >
          Increment
        </button>
        <button
          className="bg-red-400 text-white px-3 py-2 rounded shadow"
          onClick={() => decrement(1)} // Decrement by 1
        >
          Decrement
        </button>
      </div>
    </div>
  );
}

const mapStateToProps = (state: RootState , {id} : {id:number}) => {
    // console.log(id)
  return {
    count: state.value + id,
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    increment: (value: number) => dispatch(increment(value)),
    decrement: (value: number) => dispatch(decrement(value)),
  };
};

// Connector for TypeScript typing
const connector = connect(mapStateToProps, mapDispatchToProps);


export default connector(HooksCounter);
