import { bindActionCreators, createStore } from "redux";

const initialState = { value: 0 };

const incrementAction = { type: "INCREMENT" };

const increment = () => ({ type: "INCREMENT" });
const add = (num) => ({ type: "ADD", payload: num });

const reducer = (state = initialState, action) => {
  if (action.type === "INCREMENT") {
    return { value: state.value + 1 };
  }
  if (action.type === "ADD") {
    return { value: state.value + action.payload };
  }
  return state;
};

const store = createStore(reducer);

const subscriber = () => console.log("구독자", store.getState());

store.subscribe(subscriber);

store.dispatch(increment());
// 구독자 {value: 1} 출력
store.dispatch(increment());
// 구독자 {value: 2} 출력
store.dispatch(add(100));
// 구독자 {value: 102} 출력

const [dispatchIncrement, dispatchAdd] = [increment, add].map((fn) => {
  return compose(store.dispatch, fn);
});
dispatchIncrement();
dispatchIncrement();
dispatchAdd(100);

const actions = bindActionCreators({ increment, add }, store.dispatch);
actions.increment();
actions.increment();
actions.add(100);
