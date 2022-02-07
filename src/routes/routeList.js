import BottomTabs from "../BottomTabs/BottomTabs";
import { AuthMenu, Home, Login, OthersProfile, Signup } from "../screens";

// export const initialRouteName = 'splash';
export const initialRouteName = 'authmenu';  //for sample test right now I set the initialRoute to login


export const RouteList = [
  // {name: 'splash', component: SplashScreen},

    {name:"authmenu",component:AuthMenu},
    {name:'login',component:Login},
    {name:'signup',component: Signup},
    {name:'home',component:Home},
    {name:'othersprofile',component: OthersProfile},

    {name:'bottomtabs',component:BottomTabs}
  
];