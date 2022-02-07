import React, { useState, useCallback, useEffect } from 'react'
import { Bubble, GiftedChat, InputToolbar } from 'react-native-gifted-chat'
import {View, Text, StyleSheet} from 'react-native'
import { Header } from '../../components';
import { COLORS, hp, ICONS, IMAGES, wp } from '../../constants';

const Chat =(props)=> {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Good Luck with The Friends In 3..2..1',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: IMAGES.user1,
        },
      },
    ])
  }, [])

  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
  }, [])

  return (
      
      <>
          <Header title="MESSAGES"/>
          <View style={{backgroundColor:COLORS.white,flex:1}}>
    <GiftedChat
      messages={messages}
      onSend={messages => onSend(messages)}
      user={{
        _id: 1,
      }}
      renderInputToolbar={props=>{
          return(
              <>
              <View style={{flexDirection:'row',marginTop:hp(2),borderTopWidth:1}}>
                <ICONS.AntDesign name="camerao" size={20} color={COLORS.facebook1} style={{marginLeft:wp(1)}}/>
                <ICONS.AntDesign name="picture" size={20} color={COLORS.facebook1} style={{marginLeft:wp(1)}}/>
                <ICONS.AntDesign name="enviromento" size={20} color={COLORS.facebook1} style={{marginLeft:wp(1)}}/>
                </View>
                <InputToolbar containerStyle={{marginLeft:wp(17),width:wp(70)}} />
              </>
          )
      }}
      renderBubble={props => {
        return (
          <Bubble
            {...props}
            timeTextStyle={{
              right: { color: 'yellow' }
            }}
            wrapperStyle={{
                left:{backgroundColor:"#D7FFEC"}
            }}
          />
        );
      }}
    />
</View>
    </>
  )
}

export default Chat