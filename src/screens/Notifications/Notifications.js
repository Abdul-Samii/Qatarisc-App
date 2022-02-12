import React from 'react'
import {View, Text,StyleSheet, FlatList} from 'react-native'
import { Header } from '../../components'
import { COLORS, hp, wp } from '../../constants'

const Notifications = () =>{
    const notificaitons = [
        {text:"James bond has created a post 'an unused brand new bicycle is for giveaway'",time:'11 hours ago',new:true},
        {text:"James bond has created a post 'an unused brand new bicycle is for giveaway'",time:'2 hours ago',new:true},
        {text:"James bond has created a post 'an unused brand new bicycle is for giveaway'",time:'12 hours ago',new:false},
        {text:"James bond has created a post 'an unused brand new bicycle is for giveaway'",time:'21 hours ago',new:false},
        {text:"James bond has created a post 'an unused brand new bicycle is for giveaway'",time:'22 hours ago',new:false},
        {text:"James bond has created a post 'an unused brand new bicycle is for giveaway'",time:'23 hours ago',new:false},
        {text:"James bond has created a post 'an unused brand new bicycle is for giveaway'",time:'24 hours ago',new:false},
        {text:"James bond has created a post 'an unused brand new bicycle is for giveaway'",time:'1 day ago',new:false},
        {text:"James bond has created a post 'an unused brand new bicycle is for giveaway'",time:'2 days ago',new:false},

    ]

    const handleFlatlist = (item) =>{
        return(
            <View style={Styles.NotificationRow}>
                <View
                    style={item.new?{...Styles.circle,backgroundColor:COLORS.facebook1}:Styles.circle}
                />
                <View style={Styles.notificationItems}>
                    <Text style={Styles.notificationText}>{item.text}</Text>
                    <Text style={Styles.notificationTime}>{item.time}</Text>
                </View>
            </View>
        )
    }
    return(
        <View style={Styles.container}>
            <Header title="NOTIFICATIONS"/>
            <FlatList
                data={notificaitons}
                keyExtractor={(item)=>item.time}
                renderItem={(data)=>handleFlatlist(data.item)}
            />
        </View>
    )
}

export default Notifications

const Styles = StyleSheet.create({
    container:{
        height:'100%',
    },
    NotificationRow:{
        flexDirection:'row',
        elevation:0.1,
        height:hp(10),
        backgroundColor:COLORS.white,
        marginTop:hp(0.1)
        
    },
    notificationItems:{
        marginLeft:wp(3),
        justifyContent:'center',
    },
    notificationText:{
        color:COLORS.facebook1
    },
    notificationTime:{
        fontSize:12,
        color:COLORS.gray1
    },
    circle:{
        
        height:hp(1.5),
        width:wp(3),
        marginLeft:wp(3),
        marginTop:hp(4),
        backgroundColor:COLORS.facebook2,
        borderRadius:hp(3)
    }
})