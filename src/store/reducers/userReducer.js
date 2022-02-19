import { startClock } from "react-native-reanimated";
import { types } from "../actionTypes";

const initialState = {
    isLoading:false,
    msg:'',
    posts:[],
};

export const userReducer = (state=initialState,{type,payload})=>{
    switch(type){
        case types.CREATE_POST_START:
            return {...state, isLoading:true}
        case types.CREATE_POST_SUCCESS:
            return {...state, isLoading:false, msg:payload}
        case types.CREATE_POST_FAILED:
            return {...state, isLoading:false}
        
        case types.GET_POST_START:
            return {...state,isLoading:true}
        case types.GET_POST_SUCCESS:
            return {...state,isLoading:false,posts:payload}
        case types.GET_POST_FAILED:
            return {...state,isLoading:false}
        default:
            return state; 
    }
}