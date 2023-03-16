import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { decrement, increment, set } from "./action";
import { SetCounter } from "./SetCounter";

export const Counter = () => {
  const incident = "Incident";
  const dispatchFn = useDispatch();
  const count = useSelector((state) => state.count);

  const action = bindActionCreators({ increment, decrement, set }, dispatchFn);

  return (
    <main className="Counter">
      <h1>Days Since Last {incident}</h1>
      <p className="count">{count}</p>
      <section className="controls">
        <button onClick={() => action.increment()}>Increment</button>
        <button onClick={() => action.set(0)}>Reset</button>
        <button onClick={() => action.decrement()}>Decrement</button>
      </section>
      <SetCounter></SetCounter>
    </main>
  );
};

export default Counter;
