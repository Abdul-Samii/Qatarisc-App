import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity, StatusBar, TextInput, Image} from 'react-native'
import { HeaderHome } from '../../components'
import { COLORS, hp, wp,ICONS, IMAGES } from '../../constants'

const NewPost = () =>{
    return(
        <View>
            <View style={Styles.postNew}>
                <View style={Styles.flex}>
                    <Image source={IMAGES.user1} style={Styles.userImg}/>
                    <Text style={Styles.topText}>WHAT'S ON YOUR MIND?</Text>
                </View>
                <TouchableOpacity style={Styles.newImg}>
                    <ICONS.MaterialCommunityIcons name="image-plus" size={22} style={{marginLeft:wp(40),marginTop:hp(1)}}/>
                    <Text style={{fontSize:16,marginLeft:wp(2),marginTop:hp(1)}}>Photo</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default NewPost

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