import { createStore } from "redux";

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

console.log(store);

// const dummy = {
//   title: "messi",
//   content: "asdasdasdas",
//   author: {
//     firstName: "asdf",
//     lastName: "qwer",
//     location: {
//       city: "Zxcv"
//     }
//   }
// }

// if (action.type === "CITY_UPDATE") {
//   return {
//     ...state,
//     author: {
//       ...state.author,
//       location: {
//         city: action.payload // 이부분을 업데이트하기 위한 코드
//       }
//     }
//   }
// }
