import React,{useState,useEffect} from 'react'
import {View, Text, StyleSheet, TouchableOpacity, Modal, Image,ScrollView, FlatList} from 'react-native'
import { HeaderHome } from '../../components'
import { COLORS, hp, wp,ICONS, IMAGES } from '../../constants'
import { Comments, NewPost } from '../components'

import { GetAllPosts } from '../../store/actions'
import { connect } from 'react-redux'

const Home = (props) =>{
    const [commentOpen,setCommentOpen] = useState(false);
    const [modal,setModal] = useState(false)
    const [like,setLike] = useState(false)
    const [likenum,setLikenum] = useState()

    const postss = [
        {dp:IMAGES.user1,username:"James Bond",time:"23 Min",postText:"An unused brand new bicycle is for giveaway. Please comment below",postImg:IMAGES.cycle,likes:12,comments:6},
        {dp:IMAGES.user1,username:"James Bond",time:"23 Min",postText:"An unused brand new bicycle is for giveaway. Please comment below",postImg:IMAGES.cycle,likes:12,comments:5},
        {dp:IMAGES.user1,username:"James Bond",time:"23 Min",postText:"An unused brand new bicycle is for giveaway. Please comment below",postImg:IMAGES.background1,likes:12,comments:4},
        
    ]
    
    const posts = props.postt
    const comments = [
        {dp:IMAGES.user1,username:"James Bond",time:"23 Min",commentText:"Hi there, I am intrested kindly DM me.",postImg:IMAGES.background1,likes:12},
        {dp:IMAGES.user1,username:"James Bond",time:"1h",commentText:"Hi there, I am intrested kindly DM me.",postImg:IMAGES.background1,likes:12},
        {dp:IMAGES.user1,username:"James Bond",time:"2h",commentText:"Hi there, I am intrested kindly DM me.",postImg:IMAGES.background1,likes:12},
        
    ]

    const getPosts=async()=>{
         await props.GetAllPosts()
    }

useEffect(()=>{
        getPosts()
},[])
    console.log("ooooooooooooooooooooooooooooooo",posts)

    const handleComments=()=>{
        setCommentOpen(!commentOpen);
    }
    const handleModal=()=>{
        setModal(!modal);
    }
    const handleLike=(item)=>{
        setLike(!like);

    }
    const LikeCount=(item)=>{
        setLikenum(item.likes)
    }


    //FlatList Posts
    const handleFlatlist=(item)=>{
        // console.log("ITEMMMMMMMMMMMMMMMMM------------------------------------",item)
        // LikeCount(item)
        return(
            <View style={Styles.post}>
                
                <View style={Styles.flex}>
                    <Image source={item.dp} style={Styles.userdp}/>
                    <View style={Styles.name}>
                        <TouchableOpacity onPress={()=>props.navigation.navigate('othersprofile')}>
                            <Text style={Styles.namePost}>{item.userId}</Text>
                        </TouchableOpacity>
                        <Text style={Styles.timePost}>{item.time}</Text>
                    </View>
                    <TouchableOpacity onPress={()=>handleModal()} style={{marginTop:hp(1.2),position:'absolute',marginLeft:wp(80)}}>
                        <ICONS.Entypo name="dots-three-horizontal" size={17} />
                    </TouchableOpacity>
                    <TouchableOpacity style={{marginTop:hp(1),position:'absolute',marginLeft:wp(90)}}>
                    <ICONS.Entypo name="cross" size={17} />
                    </TouchableOpacity>
                </View>
                <Text style={Styles.postText}>{item.text}</Text>

                {item.postImg&&<Image source={item.postImg} style={Styles.postImg}/>}


                <View style={Styles.likeComment}>
                    
                    <ICONS.AntDesign name="like2" size={15} style={Styles.likes} /><Text style={Styles.total}>{likenum}</Text>
                    <ICONS.AntDesign name="message1" size={14} style={Styles.comments} /><Text style={Styles.total}>{item.comments}</Text>

                </View>
                

                <View
                    style={{borderWidth:0.19,opacity:0.1,marginTop:hp(2)}}
                />
                <View style={{...Styles.likeComment,marginLeft:wp(0)}}>
                    <TouchableOpacity onPress={()=>handleLike()} style={Styles.likeComment}>
                            <ICONS.AntDesign name={like?"like1":"like2"} color={like&&COLORS.facebook1}  size={22} style={Styles.likes} />
                            <Text style={Styles.iconlikeText}>Like</Text>
                   </TouchableOpacity>
                    <TouchableOpacity onPress={()=>handleComments()} style={Styles.likeComment}>
                        <ICONS.MaterialCommunityIcons name="message-processing-outline" size={22} style={{...Styles.comments,marginLeft:wp(35)}} />
                        <Text style={Styles.iconText}>Comment</Text>
                    </TouchableOpacity>

                </View>
                <View
                    style={{borderWidth:0.2,opacity:0.3,marginTop:hp(2)}}
                />

                {commentOpen&&<Comments comments={comments}/>}                
            </View>
        )
    }

//Flatlist







    return(
        <View style={Styles.container}>
            <HeaderHome/>
            <ScrollView >
            <NewPost/>
            <View
                style={{marginTop:hp(5)}}
            />
            <View>
                <Text>{posts.text}</Text>
          <FlatList
                data={posts}
                keyExtractor={(item)=>item._id}
                renderItem={(data)=>handleFlatlist(data.item)}
            />
            </View>
            </ScrollView>
            <Modal visible={modal} transparent>
                
                <View style={Styles.modalContainer}>
                <TouchableOpacity onPress={()=>handleModal()}>
                    <ICONS.AntDesign name="caretdown" size={10} color={COLORS.white} style={{marginLeft:wp(87),marginTop:hp(1)}}/>
                </TouchableOpacity>
                    <View style={Styles.modalItem}>
                        <TouchableOpacity style={Styles.item}>
                            <ICONS.Ionicons name="share-social-outline" color={COLORS.white} size={24} />
                            <Text style={Styles.modalText}>Share Post</Text>
                         </TouchableOpacity>
                    </View>

                    <View style={Styles.modalItem}>
                        <TouchableOpacity style={Styles.item}>
                            <ICONS.Ionicons name="star-outline" color={COLORS.white} size={24} />
                            <Text style={Styles.modalText}>Save Post</Text>
                         </TouchableOpacity>
                    </View>

                    <View style={Styles.modalItem}>
                        <TouchableOpacity style={Styles.item}>
                            <ICONS.Ionicons name="megaphone-outline" color={COLORS.white} size={24} />
                            <Text style={Styles.modalText}>Subscribe to this Post</Text>
                         </TouchableOpacity>
                    </View>

                    <View style={Styles.modalItem}>
                        <TouchableOpacity style={Styles.item}>
                            <ICONS.Ionicons name="md-information-circle-outline" color={COLORS.white} size={24} />
                            <Text style={Styles.modalText}>Report this Post</Text>
                         </TouchableOpacity>
                    </View>

                    <View style={Styles.modalItem}>
                        <TouchableOpacity style={Styles.item}>
                            <ICONS.MaterialCommunityIcons name="comment-alert-outline" color={COLORS.white} size={24} />
                            <Text style={Styles.modalText}>Disbale Comments</Text>
                         </TouchableOpacity>
                    </View>

                </View>
            </Modal>
        </View>
    )
}


const mapStateToProps=props=>{
    // console.log("****************",props.user.posts.text)
      return {
          postt : props.user.posts
      }
}

export default connect(mapStateToProps,{GetAllPosts})(Home)

const Styles = StyleSheet.create({
    container:{
        height:'100%'
    },
   userdp:{
       height:hp(7),
       width:wp(14),
       borderRadius:wp(3),
       marginTop:hp(2),
       marginLeft:wp(4)
   },
   post:{
       marginTop:hp(1),
       elevation:1,
       backgroundColor:COLORS.white,
       minHeight:hp(20),
   },
   flex:{
       flexDirection:'row',
   },
   postImg:{
    height:hp(40),
    width:'100%',
    marginTop:hp(1)
   },
   name:{
       marginLeft:wp(4),
       marginTop:hp(2.5)
   },
   namePost:{

   },
   timePost:{
       fontSize:10,
       marginLeft:wp(0.2)
   },
   postText:{
       marginHorizontal:wp(5),
       marginTop:hp(1)
   },
   likeComment:{
       flexDirection:'row',
       marginLeft:wp(10),
       marginTop:hp(0.7)
   },
   likes:{

   },
   comments:{
       marginLeft:wp(60)
   },
   total:{
       fontSize:10,
       marginLeft:wp(1),
       marginTop:hp(0.1)
   },
   iconText:{
       marginLeft:wp(1)
   },
   iconlikeText:{
       marginTop:hp(0.5),
       marginLeft:wp(1)
   },


   modalContainer:{
       height:hp(40),
       backgroundColor:COLORS.facebook1,
       marginTop:hp(60),
       borderTopLeftRadius:hp(3),
       borderTopRightRadius:hp(3)
   },
   modalItem:{
       borderBottomWidth:0.5,
       borderBottomColor:COLORS.white,
       marginTop:hp(1.5),
       height:hp(5)
   },
   modalText:{
       fontSize:20,
       color:COLORS.white,
       marginLeft:wp(4)
   },
   item:{
    marginLeft:wp(15),
    flexDirection:'row'
   }

})