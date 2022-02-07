import React from 'react'
import {View,Text,ImageBackground,StyleSheet,TouchableOpacity} from 'react-native'
import { Button } from '../../../components'
import {COLORS, hp, IMAGES, wp} from '../../../constants'

const AuthMenu = ({navigation}) =>{
    return(
        <View>
            <ImageBackground 
                source={IMAGES.background1}
                style={Styles.backImg}
            >
            <View style={Styles.detail}>
                <Text style={Styles.AppName}>QATARISC</Text>
                <Text style={Styles.slogan}>Helping the community</Text>
            </View>

            <View style={Styles.buttons}>
                <Button
                    title="Sign in with Facebook"
                    btnStyle={Styles.btn}
                    btnTextStyle={Styles.btnTxt}
                    onPress={()=>navigation.navigate('bottomtabs')}
                />

                <Button
                    title="Sign in with Google"
                    btnStyle={{...Styles.btn,backgroundColor:COLORS.google1}}
                    btnTextStyle={Styles.btnTxt}
                    onPress={()=>alert("Google Login")}
                />
            </View>
            </ImageBackground>
        </View>
    )
}

export default  AuthMenu

const Styles = StyleSheet.create({
    container:{
        height:'100%',
    },
    backImg:{
        height:'100%',
        width:'100%'
    },
    detail:{
        marginTop:hp(30),
        marginLeft:wp(4)
    },
    AppName:{
        fontSize:45,
        fontWeight:'900',
        marginLeft:wp(20),
        color:COLORS.white,
        borderRadius:1,
        borderColor:'black'
    },
    slogan:{
        fontSize:18,
        color:COLORS.white,
        marginLeft:wp(23)
    },
    buttons:{
        marginLeft:wp(5.5),
        marginTop:hp(5)
    },
    btn:{
        backgroundColor:COLORS.facebook1,
        width:wp(90),
        marginTop:hp(3),
        borderWidth:1
    },
    btnTxt:{
        fontSize:18
    }

})