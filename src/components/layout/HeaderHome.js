import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity, StatusBar, TextInput} from 'react-native'
import { COLORS, hp, wp,ICONS } from '../../constants'

const HeaderHome = () =>{
    return(
        <View>
            <StatusBar
          barStyle="light-content"
          backgroundColor={COLORS.facebook1}
        />
            <View style={Styles.container}>
                <Text style={Styles.heading}>FREE STUFF</Text>
                <View style={{flexDirection:'row'}}>
                            <TextInput placeholder='Search...' style={Styles.search}/>
                            <TouchableOpacity onPress={()=>alert('searching')} style={Styles.searchIcon}>
                                <ICONS.Ionicons name="search-sharp"  size={22} />
                            </TouchableOpacity>
                        </View>
            </View>
        </View>
    )
}

export default HeaderHome

const Styles = StyleSheet.create({
    container:{
        height:hp(15),
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
    search:{
        
        borderColor:COLORS.white,
        backgroundColor:COLORS.facebook2,
        height:hp(6),
        marginHorizontal:wp(5),
        borderRadius:wp(1),
        marginTop:hp(1),
        width:wp(90),
        marginLeft:wp(4),
        color:'white'
    },
    searchIcon:{
        position:'absolute',
        marginLeft:wp(83),
        marginTop:hp(2.5)
    }
})