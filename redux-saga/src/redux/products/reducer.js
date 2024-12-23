import * as types from "./action.js"
const initialState={
    count:1,
    data:[],
    loading:true,
    error:false
}
const reducer=(state=initialState,action)=>{
    switch(action.type){
        case types.INCREMENT:
            return {...state,count:state.count+1}
        case types.DECREMENT:
            return {...state,count:state.count-1}
        case types.LOADING:
            return {...state,loading:true,error:false};
        case types.ERROR:
            return {...state,loading:false,error:action.payload}
        case types.FETCH_DATA:
            return {...state,data:action.payload,loading:false} 
        default:
            return state
        
        }
}
export default reducer;