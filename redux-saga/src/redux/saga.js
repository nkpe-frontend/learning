import { all, call, put, takeEvery } from "redux-saga/effects";
import {actionFetchData, error, loading} from "./products/action"
const fetchData=async()=>{
    const res=await fetch('https://fakestoreapi.com/products');
    return await res.json();
}
function* fetchDataSaga(){
    try{
        yield put(loading())
        const data=yield call(fetchData)
        yield put(actionFetchData(data)) 
    }catch(err){
        yield put(error(err.message))
    }
}
export default function* watchFetchData(){
    yield all([
        takeEvery('FETCH_DATA_SAGA', fetchDataSaga)
    ])
}