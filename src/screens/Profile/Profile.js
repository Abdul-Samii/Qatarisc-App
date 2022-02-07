import React from 'react'
import {View, Text, Image,StyleSheet,ScrollView} from 'react-native'
import { Button, Header } from '../../components'
import { COLORS, hp, ICONS, IMAGES, wp } from '../../constants'
import { Comments } from '../components'

const Profile = () =>{
    const comments1 = [
        {username:"James Bond",time:"5h",commentText:"Hi there, I am intrested kindly DM me.",postImg:IMAGES.background1,likes:12},
        {username:"James Bond",time:"1h",commentText:"Hi there, I am intrested kindly DM me.",postImg:IMAGES.background1,likes:12},
        {username:"James Bond",time:"2h",commentText:"Hi there, I am intrested kindly DM me.",postImg:IMAGES.background1,likes:12},
        
    ]
    const comments = [
        {dp:IMAGES.user1,username:"James Bond",time:"5h",commentText:"Hi there, I am intrested kindly DM me.",postImg:IMAGES.background1,likes:12},
        {dp:IMAGES.user1,username:"James Bond",time:"1h",commentText:"Hi there, I am intrested kindly DM me.",postImg:IMAGES.background1,likes:12},
        {dp:IMAGES.user1,username:"James Bond",time:"2h",commentText:"Hi there, I am intrested kindly DM me.",postImg:IMAGES.background1,likes:12},
        
    ]
    return(
        <ScrollView>
            <Header title="PROFILE"/>

            <View style={Styles.header2}>
                <Image source={IMAGES.user1} style={Styles.userdp}/>
                <Text style={Styles.heading}>Personal Information</Text>
            </View>

            <View style={Styles.personalInfo}>
 {/* name */}
                <View style={Styles.row}>
                    <Text style={Styles.leftItem}>Display Name</Text>
                    <Text style={Styles.rightItem}>Gian Lorenzo Oyales</Text>
                </View>
{/* description */}
                <View style={{...Styles.row,height:hp(6)}}>
                    <Text style={Styles.leftItem}>Description</Text>
                    <View>
                        <Text style={Styles.rightItem}>Nurse By Day, Wanderer By Night </Text>
                        <Text style={Styles.rightItem}>IG : Gianlorenzo</Text>
                    </View>
                </View>
{/* DOB */}
                <View style={Styles.row}>
                    <Text style={Styles.leftItem}>Date Of Birth</Text>
                    <Text style={Styles.rightItem}>01-JAN-2001</Text>
                </View>
{/* Home country */}
                <View style={Styles.row}>
                    <Text style={Styles.leftItem}>Home Country</Text>
                    <Text style={Styles.rightItem}>Italy</Text>
                </View>
{/* Profession */}
                <View style={Styles.row}>
                    <Text style={Styles.leftItem}>Profession</Text>
                    <Text style={Styles.rightItem}>Nurse</Text>
                </View>
            </View>

            <Text style={Styles.heading}>Settings</Text>
            <View style={Styles.colorRow}>
                <Text style={Styles.letOthers}>Let Others Message Me</Text>
                <Text style={{fontWeight:'bold',color:COLORS.white,marginLeft:wp(8)}}>Yes</Text>
            </View>

{/* Comments */}
            
            <View style={{elevation:1,backgroundColor:COLORS.white,marginTop:hp(3)}}>
                <Comments comments={comments1} commentCount="10 Comments" heading="My Posts & Comments"/>
                <View style={{flexDirection:'row',height:hp(6)}}>
                    <ICONS.AntDesign name="switcher" size={14} style={Styles.viewAll} />
                    <Text style={{...Styles.viewAll,marginLeft:wp(1),marginTop:hp(1.7)}}>View All</Text>
                </View>
            </View>

{/* Saved posts */}
            <View style={{elevation:1,backgroundColor:COLORS.white,marginTop:hp(3)}}>
                <Comments comments={comments} commentCount="10 Comments" heading="Saved Posts"/>
                <View style={{flexDirection:'row',height:hp(6)}}>
                <ICONS.AntDesign name="switcher" size={14} style={Styles.viewAll} />
                    <Text style={{...Styles.viewAll,marginLeft:wp(1),marginTop:hp(1.7)}}>View All</Text>
                </View>
            </View>
{/* Buttons */}
            <View style={Styles.btn}>
                <Button 
                    title="Save"
                    btnStyle={Styles.btnStyle}
                />
                <Button
                    title="Logout"
                    btnStyle={Styles.btnStyle}
                />
            </View>

        </ScrollView>
    )
}

export default Profile

const Styles = StyleSheet.create({
    userdp:{
        height:hp(10),
        width:wp(18),
        borderRadius:hp(1),
        marginHorizontal:wp(41)
    },
    header2:{
        marginTop:hp(3)
    },
    heading:{
        fontSize:16,
        textAlign:'center',
        marginTop:hp(2),
        fontWeight:'bold',
        color:COLORS.facebook1
    },
    personalInfo:{
        height:hp(36),
        backgroundColor:COLORS.facebook1,
        marginTop:hp(1)
    },
    row:{
        flexDirection:'row',
        borderBottomWidth:1,
        borderColor:COLORS.white,
        height:hp(5),
        marginTop:hp(2)
    },
    leftItem:{
        color:COLORS.offwhite,
        fontWeight:'bold',
        marginLeft:wp(8),
        position:'absolute'
    },
    rightItem:{
        color:COLORS.white,
        fontWeight:'bold',
        marginLeft:wp(40)
    },
    colorRow:{
        backgroundColor:COLORS.facebook1,
        height:hp(7),
        marginTop:hp(1.5)
    },
    letOthers:{
        color:COLORS.offwhite,
        fontWeight:'bold',
        marginLeft:wp(8),
        marginTop:hp(1)
    },
    viewAll:{
        marginLeft:wp(40),
        fontSize:14,
        marginTop:hp(2),
        
    },
    btn:{
        flexDirection:'row',
        marginTop:hp(2)
    },
    btnStyle:{
        backgroundColor:COLORS.facebook1,
        width:wp(40),
        marginLeft:wp(6.5),
        borderRadius:wp(4)
    }
})