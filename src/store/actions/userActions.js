import { types } from "../actionTypes";
import { httpRequest } from "../../config";
import qs from "qs";


export const CreatePost=(data)=>async dispatch=>{

    try{
        dispatch({type:types.CREATE_POST_START});
        let queryData = qs.stringify(data);
        const response = await httpRequest.post('post',queryData);
        const result = response.data;
        console.log(result);

        if(result.message === 'Post Created'){
            dispatch({type:types.CREATE_POST_SUCCESS,payload:result});
            
        }
        else{
            dispatch({type:types.CREATE_POST_FAILED})
        }
    }
    catch(err)
    {
        console.log("Error in input : -------------------------------------------------------------",err);
        dispatch({type:types.CREATE_POST_FAILED});
    }

}