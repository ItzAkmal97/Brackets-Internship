import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import {
  increment,
  decrement,
  showCounter,
  increaseByAmount,
} from "../features/CounterSlice";

function Counter(): JSX.Element {
  const count = useSelector<RootState, number>((state) => state.counter.counter);
  const show = useSelector<RootState, boolean>((state) => state.counter.showCounter);
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col gap-2 justify-center items-center pt-12">
      {show && (
        <div className="flex gap-2 items-center text-white font-semibold text-xl">
          <button
            onClick={() => dispatch(decrement())}
            className="px-8 py-2 bg-purple-500 rounded-xl hover:bg-purple-900"
          >
            -
          </button>
          <p className="text-2xl text-purple-800">{count}</p>
          <button
            onClick={() => dispatch(increment())}
            className="px-8 py-2 bg-purple-500 rounded-xl hover:bg-purple-900"
          >
            +
          </button>
        </div>
      )}

      <div className="flex gap-2 mt-8 text-white">
        <button
          onClick={() =>
            dispatch(
              increaseByAmount({ amount: 5 } as const)
            )
          }
          className="px-8 py-2 bg-purple-500 rounded-xl hover:bg-purple-900"
        >
          Increase By 5
        </button>
        <button
          onClick={() => dispatch(showCounter())}
          className="px-8 py-2 bg-purple-500 rounded-xl hover:bg-purple-900"
        >
          Show Counter
        </button>
      </div>
    </div>
  );
}

export default Counter;
