import React from 'react'
import {View, Text, StyleSheet, Image, FlatList} from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { Header } from '../../components';
import { COLORS, hp, IMAGES, wp } from '../../constants';

const Inbox = ({navigation}) =>{
    const onlineUsers = [
        {name:"Gian Lorenzo",dp:IMAGES.user1},
        {name:"Natalie Dormer",dp:IMAGES.user1},
        {name:"Frank Castle",dp:IMAGES.user1},
    ]

    const messages = [
        {name:"Gian Lorenzo",dp:IMAGES.user1,message:"Stay Calm Mate!",time:"1h"},
        {name:"Natalie Dormer",dp:IMAGES.user1,message:"Wait there I am comming",time:"Yesterday"},
        {name:"Frank Castle",dp:IMAGES.user1,message:"Don't mention it to others",time:"2 Feb"},
        {name:"Gian2 Lorenzo",dp:IMAGES.user1,message:"Stay Calm Mate!",time:"1h"},
        {name:"Natalie2 Dormer",dp:IMAGES.user1,message:"Wait there I am comming",time:"Yesterday"},
        {name:"Frank2 Castle",dp:IMAGES.user1,message:"Don't mention it to others",time:"2 Feb"},
    ]



    const handleFlatList = (item) =>{
        return(
            <TouchableOpacity onPress={()=>navigation.navigate("chat")}>
            <View style={Styles.messageRow}>
                    <Image source={item.dp} style={Styles.imgMsg}/>
                    <View style={Styles.middle}>
                        <Text style={Styles.name}>{item.name}</Text>
                        <Text style={Styles.lastmessage}>{item.message}</Text>
                    </View>
                    <Text style={Styles.timemsg}>{item.time}</Text>
            </View>
            </TouchableOpacity>

        )
    }



    return(
        <ScrollView style={Styles.container}>
            <Header title="MESSAGES"/>
{/* online Users */}
            <View style={Styles.onlineCard}>
                {onlineUsers.map((item)=>{
                    return(
                        <View style={Styles.useronline}>
                            <Image source={IMAGES.user1} style={Styles.imgOnline}/>
                            <View style={Styles.online}/>
                            <Text style={Styles.onlinename}>{item.name}</Text>
                        </View>        
                    )
                })}
                
            </View>
{/* heading */}
            <Text style={Styles.heading}>Recent Messages</Text>
            
{/* messages */}
                <View style={Styles.messagesCard}>
                    <FlatList
                        data={messages}
                        keyExtractor={(item)=>item.name}
                        renderItem={(data)=>handleFlatList(data.item)}
                    />
                    <Text style={Styles.pressHold}>Press And Hold To Delete Or Archive</Text>
                </View>
                
                <Text style={Styles.heading}>Archived Messages</Text>
                <View style={{height:hp(2)}}/>
        </ScrollView>
    )
}
export default Inbox;

const Styles = StyleSheet.create({
    container:{
        height:'100%',
    },
    imgOnline:{
        height:hp(8),
        width:wp(16),
        borderRadius:wp(2)
    },
    imgMsg:{
        height:hp(10),
        width:wp(20),
        borderRadius:wp(2)
    },
    online:{
        height:hp(1.5),
        width:wp(3),
        borderRadius:wp(1.5),
        backgroundColor:COLORS.online,
        borderColor:COLORS.onlineBorder,
        borderWidth:hp(0.1),
        marginLeft:wp(6.5),
        marginTop:hp(-0.7)
    },
    useronline:{
        marginLeft:wp(6),
        marginTop:hp(2)
    },
    onlinename:{
        width:wp(20),
        // backgroundColor:'red',
        position:'absolute',
        marginTop:hp(9),
        fontWeight:'bold',
        fontSize:11,
        textAlign:'center',
        marginLeft:wp(-1.5)
    },
    onlineCard:{
        flexDirection:"row",
        marginTop:hp(2),
        elevation:0.1,
        backgroundColor:COLORS.white,
        height:hp(14)
    },
    heading:{
        fontSize:16,
        textAlign:'center',
        marginTop:hp(2),
        fontWeight:'bold',
        color:COLORS.facebook1
    },
    messagesCard:{
        backgroundColor:COLORS.white,
        elevation:0.1,
        height:'auto',
        marginTop:hp(2.5)
    },
    messageRow:{
        flexDirection:'row',
        marginLeft:wp(4),
        marginTop:hp(2)
    },
    middle:{
        marginLeft:wp(4),
        marginTop:hp(0.5)
    },
    name:{
        fontWeight:'bold',
        fontSize:16,
    },
    lastmessage:{
        marginTop:hp(1),
        fontSize:14
    },
    timemsg:{
        position:'absolute',
        marginLeft:wp(80),
        marginTop:hp(2),
        fontSize:10
    },
    pressHold:{
        textAlign:'center',
        marginTop:hp(3),
        height:hp(5),
        fontSize:12
    }
})