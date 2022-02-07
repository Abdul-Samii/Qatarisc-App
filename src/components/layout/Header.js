import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity, StatusBar, TextInput} from 'react-native'
import { COLORS, hp, wp,ICONS } from '../../constants'

const Header = ({title}) =>{
    return(
        <View>
            <StatusBar
          barStyle="light-content"
          backgroundColor={COLORS.facebook1}
        />
            <View style={Styles.container}>
                <Text style={Styles.heading}>{title}</Text>
            </View>
        </View>
    )
}

export default Header

const Styles = StyleSheet.create({
    container:{
        height:hp(12),
        width:wp(100),
        backgroundColor:COLORS.facebook1
    },
    heading:{
        fontSize:25,
        color:COLORS.white,
        fontWeight:'bold',
        marginTop:hp(2),
        marginLeft:wp(4)
    },
})