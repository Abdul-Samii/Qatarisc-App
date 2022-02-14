import { types } from "../actionTypes";

export const setToast = (status, message, duration) =>{
    try{
        dispatchEvent({
            type:types.SHOW_TOAST,payload:{
                status,
                message,
                duration
            }
        })
    }
    catch(error){
        console.log('Toast Try Catch Error : ',error)
    }
}

export const clearToast = () =>dispatch=>{
    dispatch({type:types.HIDE_TOAST})
}