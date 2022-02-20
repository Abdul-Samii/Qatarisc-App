import React, { useState } from 'react'
import {View, Text, StyleSheet, TouchableOpacity, TextInput, Image,ScrollView, FlatList} from 'react-native'
import { connect } from 'react-redux'
import { LikeComment,NewComment } from '../../store/actions'
import { COLORS, hp, wp,ICONS, IMAGES } from '../../constants'

const Comments = (props) =>{
const {itemComment,post,heading} = props;
console.log("________________________________",itemComment)
const [userId,setUserId] = useState("62127f8e7871cafa90809ebe")
const [newcomment,setNewcomment] = useState()

const handlLikeComment=(ci)=>{
    console.log(ci)
const obj={
    postId:post,
    commentId:ci,
    userId
}
props.LikeComment(obj)
}



const handleNewComment=()=>{
    const obj={
        postId:post,
        userId,
        text:newcomment
    }
    props.NewComment(obj)
}


    const handleFlatlist=(item)=>{
            console.log("________________________________",item)

        return(
           

            <View>
                <View style={{flexDirection:'row'}}>
                    <Image source={item.dp} style={Styles.commentdp}/>
                    <View style={Styles.commentContainer}>
                        <Text style={Styles.commentName}>{item.user.name}</Text>
                        <Text style={Styles.commentText}>{item.text}</Text>
                    </View>
                </View>

                <View style={Styles.commentReactions}>
                    <TouchableOpacity onPress={()=>handlLikeComment(item._id)}>
                    <Text style={Styles.likeCommentButton}>Like</Text>
                    </TouchableOpacity>

                    <Text style={Styles.timeComment}>{item.time}</Text>
                    <ICONS.AntDesign name="like2" size={12} style={Styles.likeiconComment} />
                    <Text style={Styles.totalCommentLikes}>{item.likes.length}</Text>
                </View>

                <View
                    style={{height:hp(2)}}
                />

            </View>


        )
    }
    return(
        <View style={Styles.container}>
            
            <View>
            <Text style={Styles.recentComments}>{heading}</Text>
            <FlatList
                data={itemComment}
                keyExtractor={(item)=>item.time}
                renderItem={(data)=>handleFlatlist(data.item)}
            />
            
{/* write a comment */}
<View style={Styles.writeCommentContainer}>
                <TextInput
                    placeholder='Write a comment...'
                    value={newcomment}
                    onChangeText={(item)=>setNewcomment(item)}
                    style={Styles.writeComment}
                />
                 <TouchableOpacity style={{marginLeft:wp(-5),marginTop:hp(1)}} onPress={()=>handleNewComment()}>
                            <ICONS.Ionicons name="send-outline" style={{marginLeft:wp(-3),marginTop:hp(3)}} size={17}/>
                </TouchableOpacity>
                </View>
                <View
                    style={{height:hp(2)}}
                />
            </View>
            
        </View>
    )
}


const mapStateToProps=props=>{
    // console.log("****************",props.user.posts.text)
      return {
          postt : props.user.posts
      }
}
export default connect(mapStateToProps,{LikeComment,NewComment})(Comments)

const Styles = StyleSheet.create({
   commentdp:{
    height:hp(4),
    width:wp(8),
    borderRadius:wp(1.5),
    marginTop:hp(2),
    marginLeft:wp(4)
    },
    commentContainer:{
        minHeight:hp(8),
        width:wp(70),
        marginLeft:wp(2),
        marginTop:hp(2),
        borderRadius:hp(1.5),
        backgroundColor:COLORS.comment1,
    },
    recentComments:{
        fontWeight:'bold',
        marginLeft:wp(5),
        marginTop:hp(1)
    },
    commentName:{
        fontWeight:'bold',
        marginLeft:wp(2),
        marginTop:hp(1),
    },
    commentText:{
        marginLeft:wp(2)
    },
    commentReactions:{
        flexDirection:'row',
        marginLeft:wp(17),
    },
    likeCommentButton:{
        fontSize:12,
    },
    timeComment:{
        fontSize:12,
        marginLeft:wp(7)
    },
    likeiconComment:{
        marginLeft:wp(33)
    },

    totalCommentLikes:{
    fontSize:10,
    marginLeft:wp(0.5),
    },
    writeComment:{
        borderWidth:0.2,
        width:wp(77),
        height:hp(10),
        marginHorizontal:wp(10),
        borderRadius:wp(1)
    },
    writeCommentContainer:{
        flexDirection:'row'
    }
})