import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity, TextInput, Image,ScrollView, FlatList} from 'react-native'
import { COLORS, hp, wp,ICONS, IMAGES } from '../../constants'

const Comments = ({comments,heading,commentCount}) =>{


    const handleFlatlist=(item)=>{
        return(
           

            <View>
                <View style={{flexDirection:'row'}}>
                    <Image source={item.dp} style={Styles.commentdp}/>
                    <View style={Styles.commentContainer}>
                        <Text style={Styles.commentName}>{item.username}</Text>
                        <Text style={Styles.commentText}>{item.commentText}</Text>
                    </View>
                </View>

                <View style={Styles.commentReactions}>
                    <Text style={Styles.likeCommentButton}>{commentCount?commentCount:"Like"}</Text>
                    <Text style={Styles.timeComment}>{item.time}</Text>
                    <ICONS.AntDesign name="like2" size={12} style={Styles.likeiconComment} />
                    <Text style={Styles.totalCommentLikes}>{item.likes}</Text>
                </View>
            </View>


        )
    }
    return(
        <View style={Styles.container}>
            
            <View>
            <Text style={Styles.recentComments}>{heading}</Text>
            <FlatList
                data={comments}
                keyExtractor={(item)=>item.time}
                renderItem={(data)=>handleFlatlist(data.item)}
            />
            </View>
            
        </View>
    )
}

export default Comments

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
        marginLeft:wp(17)
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
})