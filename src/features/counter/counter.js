import { useSelector, useDispatch } from "react-redux";

import { increment, decrement } from "./counterSlice";

export function Counter() {
  // we can read data from the 'store' with 'useSelector' hook
  const count = useSelector((state) => state.counter.value);

  // we can dispatch 'actions' using 'useDispatch' hook
  const dispatch = useDispatch();

  return (
    <div>
      <div
        style={{
          display: "table-cell",
          width: "100vw",
          height: "80vh",
          verticalAlign: "middle",
        }}
      >
        <button
          style={{ padding: "2rem", fontSize: "2rem" }}
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>

        <span
          style={{ padding: "2rem", fontSize: "3rem", verticalAlign: "middle" }}
        >
          {count}
        </span>

        <button
          style={{ padding: "2rem", fontSize: "2rem" }}
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
  );
}
