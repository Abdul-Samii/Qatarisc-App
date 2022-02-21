import { startClock } from "react-native-reanimated";
import { types } from "../actionTypes";

const initialState = {
    isLoading:false,
    msg:'',
    posts:[],
    user:'',
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



        case types.ADD_COMMENT_START:
            return {...state,isLoading:true}
        case types.ADD_COMMENT_SUCCESS:
            return {...state,isLoading:false}
        case types.ADD_COMMENT_FAILED:
            return {...state,isLoading:false}


        case types.GET_USER_START:
            return {...state,isLoading:true}
        case types.GET_USER_SUCCESS:
            return {...state,isLoading:false,user:payload}
        case types.GET_USER_FAILED:
            return {...state,isLoading:false}
        default:
            return state; 
    }
}