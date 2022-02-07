import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

const Chat = () =>{
    return(
        <View style={Styles.container}>
            <Text>Hellow to Chat Screen</Text>
        </View>
    )
}
export default Chat;

const Styles = StyleSheet.create({
    container:{
        height:'100%',
    }
})