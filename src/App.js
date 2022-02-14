import React,{useEffect} from 'react'
import {View,Text} from 'react-native'
import Route from './routes'
import { LogBox } from 'react-native';
import BottomTabs from './BottomTabs/BottomTabs';
import { Provider } from 'react-redux';
import { Store } from './store/Store';

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you\'re using an old API with gesture components, check out new Gestures system!",
  "    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);  "
]);


const App = () =>{
  useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
}, [])
    return (
        <Provider store={Store}>
            <Route/>
        </Provider>
            // <BottomTabs/>
    )
}
export default App;