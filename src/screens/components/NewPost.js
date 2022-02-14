import React,{useState} from 'react'
import {View, Text, StyleSheet, TouchableOpacity, StatusBar, TextInput, Image} from 'react-native'
import { Button, HeaderHome } from '../../components'
import { COLORS, hp, wp,ICONS, IMAGES } from '../../constants'
import { connect } from 'react-redux';
import { CreatePost } from '../../store/actions';



const NewPost = (props) =>{
    const [type,setType] = useState(true)
    const [text,setText] = useState()
    const [userId,setUserIs] = useState("1223abc")
    const handleType=()=>{
        setType(!type);
    }


    const newPost=()=>{
        const obj={
            text,
            userId
        }
        props.CreatePost(obj);
    }
    console.log(text)
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
                            style={{marginTop:hp(4),marginLeft:wp(5),width:wp(65),height:hp(8)}}
                        />
                        <TouchableOpacity style={{marginLeft:wp(-5),marginTop:hp(1)}} onPress={()=>newPost()}><Text style={{fontSize:12}}>Post</Text></TouchableOpacity>
                        </View>
                            
                        }
                </View>           
                         </TouchableOpacity>

                <TouchableOpacity style={Styles.newImg}>
                    <ICONS.MaterialCommunityIcons name="image-plus" size={22} style={{marginLeft:wp(40),marginTop:hp(1)}}/>
                    <Text style={{fontSize:16,marginLeft:wp(2),marginTop:hp(1)}}>Photo</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}



const mapStateToProps = props => {
    // console.log("HERE "+props.user.users)
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
       flexDirection:'row'
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
   }
})