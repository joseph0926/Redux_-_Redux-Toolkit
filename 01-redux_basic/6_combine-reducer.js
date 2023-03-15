import { combineReducers, createStore } from "redux";

const initialState = {
  users: [
    { id: 1, name: "Messi" },
    { id: 2, name: "Pedri" },
  ],
  tasks: [{ title: "do someting~" }, { title: "dummy tasks" }],
};

const addTask = (title) => ({ type: "ADD_TASK", payload: title });
const addUser = (name) => ({ type: "ADD_USER", payload: name });

const userReducer = (userState = initialState.users, action) => {
  if (action.type === "ADD_USER") {
    return [...userState, action.payload];
  }
  return userState;
};
const taskReducer = (taskState = initialState.tasks, action) => {
  if (action.type === "ADD_TASK") {
    return [...taskState, action.payload];
  }
  return taskState;
};

const reducer = combineReducers({ users: userReducer, tasks: taskReducer });

const store = createStore(reducer);
