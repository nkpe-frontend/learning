# Learning Redux-Saga and Redux with React

This document explains how to set up Redux, Redux-Saga, and manage state in a React application. We will walk through the process of handling side effects using Redux-Saga and connecting them to a React component to fetch data asynchronously.

---

## 1. **Setting Up Redux-Saga**

### **`src/redux/saga.js`**

In this file, we define the saga that listens for an action to fetch data from an external API and dispatches other actions based on the success or failure of the API call.

```javascript
// src/redux/saga.js
import { all, call, put, takeEvery } from "redux-saga/effects";
import { actionFetchData, error, loading } from "./products/action";

// Async function to fetch data from the API
const fetchData = async () => {
    const res = await fetch('https://fakestoreapi.com/products');
    return await res.json();
};

// Worker saga: Fetches data and dispatches actions accordingly
function* fetchDataSaga() {
    try {
        // Dispatch loading action before making the API call
        yield put(loading());

        // Call the API function to fetch data
        const data = yield call(fetchData);

        // Dispatch action to store the fetched data
        yield put(actionFetchData(data));
    } catch (err) {
        // Dispatch error action if something goes wrong
        yield put(error(err.message));
    }
}

// Watcher saga: Listens for FETCH_DATA_SAGA action to trigger fetchDataSaga
export default function* watchFetchData() {
    yield all([
        takeEvery('FETCH_DATA_SAGA', fetchDataSaga), // Listen for the FETCH_DATA_SAGA action
    ]);
}

# Explanation

### 1. fetchData function
- The `fetchData` function makes an API call to fetch product data from a public API (`fakestoreapi.com`).

### 2. fetchDataSaga function
- The `fetchDataSaga` is a generator function that dispatches actions to handle loading, success, and error states.
  
### 3. watchFetchData function
- The `watchFetchData` function listens for the `FETCH_DATA_SAGA` action and triggers the `fetchDataSaga` when dispatched.

---

## 2. Setting Up the Redux Store with Saga Middleware

### `src/redux/store.js`
In this file:
- We configure the Redux store.
- Apply the Redux-Saga middleware.
- Run the saga to handle side effects.

```javascript
// src/redux/store.js
import { applyMiddleware, legacy_createStore } from "redux";
import rootReducer from "./rootReducer.js"; // Combine reducers here
import createSagaMiddleware from "redux-saga";
import saga from "./saga.js"; // Import the saga

// Create the saga middleware
const middleware = createSagaMiddleware();

// Create the Redux store and apply the saga middleware
const store = legacy_createStore(rootReducer, applyMiddleware(middleware));

// Run the saga
middleware.run(saga);

export default store;

# Explanation

### 1. Saga Middleware
- The saga middleware is created using `createSagaMiddleware()`.

### 2. Store Creation
- The Redux store is created using `legacy_createStore` and the saga middleware is applied using `applyMiddleware`.

### 3. Running the Saga
- The saga is run with `middleware.run(saga)` to handle asynchronous actions.

---

## 3. Creating Redux Actions

### `src/redux/products/action.js`
In this file:
- We define actions to handle counter functionality, fetching data, and managing loading and error states.

```javascript
// src/redux/products/action.js

export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const LOADING = 'LOADING';
export const ERROR = 'ERROR';
export const FETCH_DATA = 'FETCH_DATA';
export const FETCH_DATA_SAGA = 'FETCH_DATA_SAGA';

// Action creators for various actions
export const increment = () => ({ type: INCREMENT });
export const decrement = () => ({ type: DECREMENT });
export const loading = () => ({ type: LOADING });
export const error = (message) => ({ type: ERROR, payload: message });
export const actionFetchData = (data) => ({ type: FETCH_DATA, payload: data });
export const fetchData = () => ({ type: FETCH_DATA_SAGA }); // Action to trigger the saga


# Explanation

### 1. `FETCH_DATA_SAGA`
- Action that triggers the saga to fetch data.

### 2. `loading`
- Action that indicates the loading state.

### 3. `error`
- Action that sets the error message if something goes wrong.

### 4. `actionFetchData`
- Action that stores the fetched data in the Redux store.

---

## 4. Creating the Reducer

### `src/redux/products/reducer.js`
The reducer listens for dispatched actions and updates the Redux store accordingly.


```javascript
// src/redux/products/reducer.js
import * as types from "./action.js";

const initialState = {
    count: 1,
    data: [],
    loading: true,
    error: false,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case types.INCREMENT:
            return { ...state, count: state.count + 1 };
        case types.DECREMENT:
            return { ...state, count: state.count - 1 };
        case types.LOADING:
            return { ...state, loading: true, error: false };
        case types.ERROR:
            return { ...state, loading: false, error: action.payload };
        case types.FETCH_DATA:
            return { ...state, data: action.payload, loading: false };
        default:
            return state;
    }
};

export default reducer;

# Explanation

### 1. Handling Actions
- The reducer handles actions like `INCREMENT`, `DECREMENT`, `FETCH_DATA`, `LOADING`, and `ERROR`.

### 2. State Updates
- Based on the dispatched action, the state is updated, including the loading state and data once the fetch is complete.

---

## 5. React Component: Counter

In this section, we use the Redux store in a React component to display the counter and fetch data asynchronously using the saga.

### `src/components/Counter.js`

```javascript
// src/components/Counter.js
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, fetchData, increment } from '../redux/products/action';

function Counter() {
  // Accessing count and data from the Redux store
  const { count, data } = useSelector((state) => state.counter);
  
  const dispatch = useDispatch();
  
  // Dispatch actions to increment or decrement the counter
  const handleIncrease = () => dispatch(increment());
  const handleDecrease = () => dispatch(decrement());
  
  useEffect(() => {
    // Dispatch fetchData action to trigger the saga and fetch data on component mount
    dispatch(fetchData());
  }, [dispatch]);
  
  return (
    <>
      <h2>Counter {count}</h2>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleDecrease}>Decrease</button>
      <div>
        {/* Display the fetched data */}
        {data && data.length > 0 ? (
          <ul>
            {data.map(item => (
              <li key={item.id}>{item.title}</li>
            ))}
          </ul>
        ) : (
          <p>No data available</p>
        )}
      </div>
    </>
  );
}

export default Counter;

# Explanation

### 1. React Component
- The `Counter` component allows the user to increment and decrement the counter.

### 2. `useSelector`
- `useSelector` accesses the Redux state to get the current `count` and `data`.

### 3. `useDispatch`
- `useDispatch` dispatches the `increment`, `decrement`, and `fetchData` actions to modify the Redux state and trigger the saga.

### 4. `useEffect`
- `useEffect` dispatches the `fetchData` action to trigger the saga on component mount and fetch data from the API.


