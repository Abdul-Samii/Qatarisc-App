import { types } from "../actionTypes";
import { httpRequest } from "../../config";
import qs from "qs";


export const CreatePost=(data)=>async dispatch=>{

    try{
        dispatch({type:types.CREATE_POST_START});
        let queryData = qs.stringify(data);
        console.log("---------------",data.images)
        const response = await httpRequest.post('post',data ,{
            headers:{
                "Content-Type":data.images.type
                
            }
        });
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



//Get Posts
export const GetAllPosts = (data)=>async dispatch=>{
    try{
        dispatch({type:types.GET_POST_START});
        let queryData = qs.stringify(data);
        const response = await httpRequest.get('post',data);
        const result = response.data;
        console.log("here",result)
        dispatch({type:types.GET_POST_SUCCESS,payload:result});
    }
    catch(err)
    {
        dispatch({type:types.GET_POST_FAILED});
    }
}