import { types } from "../actionTypes";
import { httpRequest } from "../../config";
import qs from "qs";


export const CreatePost=(data)=>async dispatch=>{

    try{
        dispatch({type:types.CREATE_POST_START});
        let queryData = qs.stringify(data);
        const response = await httpRequest.post('user/post',queryData );
        const result = response.data;
        // console.log(result);

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
        const response = await httpRequest.get('user/post',data);
        const result = response.data;
        // console.log("here",result)
        dispatch({type:types.GET_POST_SUCCESS,payload:result});
    }
    catch(err)
    {
        dispatch({type:types.GET_POST_FAILED});
    }
}


//Get User
export const GetUser = (data)=>async dispatch=>{
    try{
        dispatch({type:types.GET_USER_START});
        let queryData = qs.stringify(data);
        console.log("here",queryData)

        const response = await httpRequest.post('user/getuser',queryData);
        const result = response.data;
        // console.log("here",result)
        dispatch({type:types.GET_USER_SUCCESS,payload:result});
    }
    catch(err)
    {
        dispatch({type:types.GET_USER_FAILED});
        console.log("___________________________FAILED ",err)
    }
}


//Like/Unlike a Post
export const LikePost=(data)=>async dispatch=>{

    try{
        dispatch({type:types.LIKE_START});
        let queryData = qs.stringify(data);
        console.log(queryData)
        const response = await httpRequest.post('user/likepost',queryData );
        const result = response.data;
        console.log(result);

            dispatch({type:types.LIKE_SUCCESS,payload:result});
            
    }
    catch(err)
    {
        console.log("Error in input : -------------------------------------------------------------",err);
        dispatch({type:types.LIKE_FAILED});
    }
}


//Like/Unlike a Comment
export const LikeComment=(data)=>async dispatch=>{
console.log("***********************************")
    try{
        dispatch({type:types.LIKE_COMMENT_START});
        let queryData = qs.stringify(data);
        console.log(queryData)
        const response = await httpRequest.post('user/likecomment',queryData );
        const result = response.data;
        console.log(result);

            dispatch({type:types.LIKE_COMMENT_SUCCESS,payload:result});
            
    }
    catch(err)
    {
        console.log("Error in input : -------------------------------------------------------------",err);
        dispatch({type:types.LIKE_COMMENT_FAILED});
    }
}



//New Comment

export const NewComment=(data)=>async dispatch=>{

    try{
        dispatch({type:types.ADD_COMMENT_START});
        let queryData = qs.stringify(data);
        const response = await httpRequest.post('user/comment',queryData );
        const result = response.data;
        // console.log(result);

        if(result.message === 'Post Created'){
            dispatch({type:types.ADD_COMMENT_SUCCESS,payload:result});
            
        }
        else{
            dispatch({type:types.ADD_COMMENT_FAILED})
        }
    }
    catch(err)
    {
        console.log("Error in input : -------------------------------------------------------------",err);
        dispatch({type:types.ADD_COMMENT_FAILED});
    }
}