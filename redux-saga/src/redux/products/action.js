export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const LOADING = 'LOADING';
export const ERROR = 'ERROR';
export const FETCH_DATA = 'FETCH_DATA';
export const FETCH_DATA_SAGA = 'FETCH_DATA_SAGA';

export const increment = () => ({ type: INCREMENT });
export const decrement = () => ({ type: DECREMENT });
export const loading = () => ({ type: LOADING });
export const error = (message) => ({ type: ERROR, payload: message });
export const actionFetchData = (data) => ({ type: FETCH_DATA, payload: data });
export const fetchData = () => ({ type: FETCH_DATA_SAGA })