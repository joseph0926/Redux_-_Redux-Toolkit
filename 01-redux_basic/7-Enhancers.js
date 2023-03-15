import { compose } from "redux";

const reducer = (state) => state;

const monitorReducerEnhancer = (createStore) => (reducer, initialState, enhancer) => {
  const monitoredReducer = (state, action) => {
    const start = performance.now();
    const newState = reducer(state, action);
    const end = performance.now();
    const diff = round(end - start);

    console.log("Reducer process time:", diff);

    return newState;
  };

  return createStore(monitoredReducer, initialState, enhancer);
};

const logEnhancer = (createStore) => (reducer, initialState, enhancer) => {
  // Do stuff like wrap the reducer in a higher-order function.
  const reducerWithConsoleLogs = (previousState, action) => {
    const nextState = reducer(previousState, action);
    console.log({ action, previousState, nextState });
    return nextState;
  };

  return createStore(reducerWithConsoleLogs, initialState, enhancer);
};

const store = createStore(reducer, compose(monitorReducerEnhancer, logEnhancer));
