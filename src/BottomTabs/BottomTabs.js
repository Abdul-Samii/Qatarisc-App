import React from 'react'
import { StyleSheet, Text, View,StatusBar } from 'react-native'
import { COLORS, ICONS, wp,hp } from '../constants'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Home, HowandWhere, Inbox, Notifications, Profile } from '../screens';
import { NavigationContainer } from '@react-navigation/native';
const Tab = createBottomTabNavigator();



const BottomTabs = () => {
    return (
        // later we will wrap this route inside redux provider to access the store all over the application
      <>
            <Tab.Navigator 
    screenOptions={({ route }) => ({
      
      tabBarIcon: ({color, size }) => {
        let iconName;

        if (route.name === 'freestuff') {
          iconName = 'md-file-tray-full-outline'        
        }
        else if(route.name === 'how&where')
        {
          iconName= 'megaphone-outline'
        }
        else if(route.name === 'notifications')
        {
          iconName= 'notifications-outline'
        }
        else if(route.name === 'messages')
        {
          iconName= 'ios-chatbubbles-outline'
          return <View style={{flexDirection:'row'}}><ICONS.Ionicons name={iconName} size={25} color={color} />
          <Text style={{backgroundColor:COLORS.google1,color:COLORS.white,width:wp(4),height:hp(2),fontSize:10,fontWeight:'bold',textAlign:'center',borderRadius:10,marginLeft:wp(-3)}}>2</Text>
          </View>

        }
        else if(route.name === 'profile')
        {
          iconName = 'person'
        }
        // You can return any component that you like here!
        return <Text ><ICONS.Ionicons name={iconName} size={25} color={color} /></Text>
     
      },
      tabBarActiveTintColor: COLORS.white,
      tabBarActiveBackgroundColor:COLORS.facebook1,
    //   tabBarInactiveTintColor: COLORS.google1,
      // tabBarStyle: {
      //   backgroundColor: COLORS.white
      // }
      
    })}
    
    
    >
      <Tab.Screen name='freestuff'  component={Home} options={{headerShown:false,title:"Free Stuff"}} />
      <Tab.Screen name="how&where" component={HowandWhere} options={{headerShown:false,title:"How & Where"}}/>
      <Tab.Screen name="messages" component={Inbox} options={{headerShown:false,title:"Messages"}}/>
      <Tab.Screen name="notifications" component={Notifications} options={{headerShown:false,title:"Notifications"}}/>
      <Tab.Screen name="profile" component={Profile} options={{headerShown:false,title:"Profile"}}/>
    </Tab.Navigator >
  
      </>
    )
}

export default BottomTabs;

const styles = StyleSheet.create({})