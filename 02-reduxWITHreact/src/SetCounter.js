import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { set } from "./action";

export const SetCounter = () => {
  const count = useSelector((state) => state.count);
  const [inputCount, setInputCount] = useState(count);
  const dispatchFn = useDispatch();

  useEffect(() => {
    setInputCount(count);
  }, [count]);

  return (
    <section className="controls">
      <form
        onSubmit={(event) => {
          event.preventDefault();

          dispatchFn(set(inputCount));
        }}
      >
        <label htmlFor="set-to">Set Count</label>
        <input id="set-to" type="number" onChange={(event) => setInputCount(event.target.value)} />
        <input type="submit" />
      </form>
    </section>
  );
};
