import React from 'react'
import {View, Text, StyleSheet, Image,ScrollView} from 'react-native'
import { Button, Header } from '../../components'
import { COLORS, hp, ICONS, IMAGES, wp } from '../../constants'
import { Comments } from '../components'

const OthersProfile = () =>{
    const comments1 = [
        {username:"James Bond",time:"5h",commentText:"Hi there, I am intrested kindly DM me.",postImg:IMAGES.background1,likes:12},
        {username:"James Bond",time:"1h",commentText:"Hi there, I am intrested kindly DM me.",postImg:IMAGES.background1,likes:12},
        {username:"James Bond",time:"2h",commentText:"Hi there, I am intrested kindly DM me.",postImg:IMAGES.background1,likes:12},
        
    ]
    return(
        <ScrollView style={Styles.container}>
            <Header title="PROFILE"/>
        <View style={Styles.card}>
            <View style={Styles.dpArea}>
                <Image source={IMAGES.user1} style={Styles.userdp}/>
                <View style={Styles.details}>
                    <Text style={Styles.name}>Gian Lorenzo Oyales</Text>
                    <Text style={Styles.bio}>Nurse By Day, Wanderer By Night</Text>
                    <Text style={Styles.ig}>IG : Gianlorenzo</Text>
                </View>
            </View>

 {/* Buttons */}
            <View style={Styles.buttons}>
                <Button
                    title="Follow"
                    btnStyle={Styles.btn}
                    onPress={()=>alert("Followed")}
                />
                <Button
                    title="Message"
                    btnStyle={Styles.btn}
                    onPress={()=>alert("Message")}
                />
            </View>
        </View>

{/* Follower */}
        <View style={Styles.followingData}>
            <View style={Styles.item}>
                <Text style={Styles.number}>83</Text>
                <Text style={Styles.numberTitle}>Posts</Text>
            </View>
            <View style={Styles.item}>
                <Text style={Styles.number}>221</Text>
                <Text style={Styles.numberTitle}>Followers</Text>
            </View>
            <View style={Styles.item}>
                <Text style={Styles.number}>9</Text>
                <Text style={Styles.numberTitle}>Following</Text>
            </View>
        </View>

{/* posts & comments */}
        <View style={Styles.commentCard}>
            <Comments heading="Recent Posts & Comments" commentCount="90 Comments" comments={comments1}/>
            <View style={{flexDirection:'row',height:hp(6)}}>
                    <ICONS.AntDesign name="switcher" size={14} style={Styles.viewAll} />
                    <Text style={{...Styles.viewAll,marginLeft:wp(1),marginTop:hp(1.7)}}>View All</Text>
                </View>
        </View>
        </ScrollView>
    )
}

export default OthersProfile

const Styles = StyleSheet.create({
    container:{
        height:'100%'
    },
    userdp:{
        height: hp(12),
        width:wp(22),
        borderRadius:wp(2)
    },
    dpArea:{
        flexDirection:"row",
        marginTop:hp(4),
        marginLeft:wp(5)
    },
    details:{
        marginLeft:wp(8),
        marginTop:hp(3)
    },
    name:{
        fontSize:20,
        fontWeight:'bold'
    },
    bio:{
        fontSize:15,
        width:wp(47),
        marginTop:hp(1)
    },
    ig:{
        fontSize:15,
        marginTop:hp(1)
    },
    buttons:{
        flexDirection:'row'
    },
    btn:{
        width:wp(35),
        marginLeft:wp(10),
        borderRadius:wp(4),
        marginTop:hp(3),
        backgroundColor:COLORS.facebook1
    },
    card:{
        elevation:0.3,
        backgroundColor:COLORS.white,
        height:hp(32),
        marginTop:hp(1)
    },
    followingData:{
        flexDirection:'row'
    },
    item:{
        marginHorizontal:wp(0.1),
        elevation:0.3,
        backgroundColor:COLORS.white,
        width:wp(33),
        height:hp(7),
        marginTop:hp(0.1)
    },
    number:{
        textAlign:'center',
        fontSize:20,
        fontWeight:'bold'
    },
    numberTitle:{
        textAlign:'center',
        fontWeight:'bold'
    },
    commentCard:{
        height:hp(45),
        marginTop:hp(1),
        backgroundColor:COLORS.white,
        elevation:0.3
    },
    viewAll:{
        marginLeft:wp(40),
        fontSize:14,
        marginTop:hp(2),
        
    },
})