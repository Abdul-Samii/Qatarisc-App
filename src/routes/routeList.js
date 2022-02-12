import BottomTabs from "../BottomTabs/BottomTabs";
import { AuthMenu, Chat, Home, HowandWhere, Inbox, Login, Notifications, OthersProfile, Signup } from "../screens";

// export const initialRouteName = 'splash';
export const initialRouteName = 'authmenu';  //for sample test right now I set the initialRoute to login


export const RouteList = [
  // {name: 'splash', component: SplashScreen},

    {name:"authmenu",component:AuthMenu},
    {name:'login',component:Login},
    {name:'signup',component: Signup},
    {name:'home',component:Home},
    {name:'othersprofile',component: OthersProfile},
    {name:'inbox',component:Inbox},
    {name:'chat',component:Chat},
    {name:'notifications',component:Notifications},
    {name:'howandwhere',component:HowandWhere},
    
    {name:'bottomtabs',component:BottomTabs}
  
];