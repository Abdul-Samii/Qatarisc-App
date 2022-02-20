import React,{useState} from 'react'
import {View, Text, StyleSheet, TouchableOpacity, Modal, TextInput, Image} from 'react-native'
import { Button, HeaderHome } from '../../components'
import { COLORS, hp, wp,ICONS, IMAGES } from '../../constants'
import { connect } from 'react-redux';
import { CreatePost } from '../../store/actions';
import { launchCamera,launchImageLibrary } from 'react-native-image-picker'



const NewPost = (props) =>{
    const [type,setType] = useState(true)
    const [text,setText] = useState()
    const [modal,setModal] = useState(false)
    const [userId,setUserIs] = useState("6211ee121233c42bacc5174a")
    const [images,setImage] = useState()


    const handleType=()=>{
        setType(!type);
    }

    const newPost=()=>{
        const obj={
            text,
            userId,
            images
        }
        props.CreatePost(obj);
    }


    const handleCamera=async()=>{
        const result = await launchCamera({mediaType:'mix'})
        setImage(result)
        handleModal()
    }
    const handleGallery=async()=>{
        const result = await launchImageLibrary({mediaType:'mix'})
        setImage(result)
        handleModal()
    }



    const handleModal=()=>{
        setModal(!modal)
    }

    return(
        <View>
            <View style={Styles.postNew}>
            <TouchableOpacity onPress={()=>handleType()}><View style={Styles.flex}>
                    <Image source={IMAGES.user1} style={Styles.userImg}/>
                        {type?<Text style={Styles.topText}>WHAT'S ON YOUR MIND?</Text>
                        :
                        <View style={{flexDirection:'row'}}>
                        <TextInput
                            value={text}
                            onChangeText={(item)=>setText(item)}
                            placeholder='Type...' 
                            multiline
                            style={Styles.inputPost}
                        />
                        <TouchableOpacity style={{marginLeft:wp(-5),marginTop:hp(1)}} onPress={()=>newPost()}>
                            <ICONS.Ionicons name="send-outline" style={{marginLeft:wp(8),marginTop:hp(5)}} size={17}/>
                        </TouchableOpacity>
                        </View>
                            
                        }
                </View>           
                         </TouchableOpacity>

                <TouchableOpacity style={Styles.newImg} onPress={()=>handleModal()}>
                    <ICONS.MaterialCommunityIcons name="image-plus" size={22} style={{marginLeft:wp(40),marginTop:hp(1)}}/>
                    <Text style={{fontSize:16,marginLeft:wp(2),marginTop:hp(1)}}>Photo</Text>
                </TouchableOpacity>
            </View>








            <Modal visible={modal} transparent>
                
                <View style={Styles.modalContainer}>
                <TouchableOpacity onPress={()=>handleModal()}>
                    <ICONS.AntDesign name="caretdown" size={10} color={COLORS.white} style={{marginLeft:wp(87),marginTop:hp(1)}}/>
                </TouchableOpacity>
                    <View style={Styles.modalItem}>
                        <TouchableOpacity style={Styles.item} onPress={()=>handleCamera()}>
                            <ICONS.Ionicons name="camera" color={COLORS.white} size={24} />
                            <Text style={Styles.modalText}>Camera</Text>
                         </TouchableOpacity>

                         <TouchableOpacity style={Styles.item} onPress={()=>handleGallery()}>
                            <ICONS.Ionicons name="image" color={COLORS.white} size={24} />
                            <Text style={Styles.modalText}>Gallery</Text>
                         </TouchableOpacity>
                    </View>

                </View>
            </Modal>







        </View>
    )
}



const mapStateToProps = props => {
    return {
        msg:  props.user.msg
      
    }
}
export default connect(mapStateToProps,{CreatePost})(NewPost)

const Styles = StyleSheet.create({
    container:{
        
    },
   userImg:{
       height:hp(10),
       width:wp(20),
       borderRadius:wp(4),
       marginTop:hp(2.3),
       marginLeft:wp(4)
   },
   flex:{
       flexDirection:'row',
   },
   topText:{
       marginLeft:wp(5),
       marginTop:hp(5.5),
       fontWeight:'bold'
   },
   postNew:{
       marginTop:hp(2),
       elevation:1,
       backgroundColor:COLORS.white,
       height:hp(15)
   },
   newImg:{
       flexDirection:'row',
       backgroundColor:COLORS.white,
       marginTop:hp(2.75),
       elevation:1,
       height:hp(5)
   },
   inputPost:{
    marginTop:hp(2),
    marginLeft:wp(5),
    width:wp(62),
    height:hp(10),
    borderWidth:0.3,
    borderRadius:wp(2),
    marginLeft:wp(2)
   },




   modalContainer:{
    height:hp(10),
    backgroundColor:COLORS.facebook1,
    marginTop:hp(90),
},
    modalItem:{
        marginTop:hp(1),
        height:hp(5),
        flexDirection:'row'
    },
    modalText:{
        fontSize:20,
        color:COLORS.white,
        marginLeft:wp(2),
        marginTop:hp(-0.2)
    },
    item:{
    marginLeft:wp(15),
    flexDirection:'row'
    }
})