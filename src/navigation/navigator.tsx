import { NavigationContainer, ParamListBase, useNavigation, useNavigationContainerRef } from "@react-navigation/native";
import { createNativeStackNavigator, NativeStackNavigationProp } from "@react-navigation/native-stack";
import React, { useEffect } from "react";
import AuthHome from "../screens/auth/auth_home";
import Register from "../screens/auth/register";
import Login from "../screens/auth/login";
import InitialLogin from "../screens/auth/initial_login";
import Home from "../screens/home";
import HistoryList from "../screens/history/historys";
import HistoryDetail from "../screens/history/history_detail";
import Report from "../screens/report/report";
import ReportComplete from "../screens/report/report_complete";
import Notification from "../screens/notification/notification";
import MyPageMain from "../screens/mypage/main";
import SelectStore from "../screens/auth/select_store";
import SelectWork from "../screens/auth/select_work";
import SelectComplete from "../screens/auth/select_complete";
import MyStoreList from "../screens/mypage/store/mystore_list";
import Historys from "../screens/history/historys";
import MyStoreView from "../screens/mypage/store/mystore_view";
import MyEmployeeView from "../screens/mypage/store/myemployee_view";
import StoreList from "../screens/mypage/store/store_list";
import StoreView from "../screens/mypage/store/store_view";
import MyPageInfo from "../screens/mypage/info/info";
import SelectOnPush from "../screens/push/select_on_push";
import messaging from "@react-native-firebase/messaging";
import RegisterStoreList from "../screens/auth/register_store_list";
import RegisterStore from "../screens/auth/register_store";



export type RootStackParamList = {

  SelectComplete : {isStore:boolean},
  SelectOnPush : {title:string,body:string},
  Home:undefined
  RegisterStore : {onClick: (name:string,address:string)=>void}
  SelectStore : {storeName:string}
  SelectWork : {storeName:string}

};
const Stack = createNativeStackNavigator();
const ParamStack = createNativeStackNavigator<RootStackParamList>();
export enum Screens {
  AuthHome = 'AuthHome',
  Register = 'Register',
  Login = 'Login',
  InitialLogin = 'InitialLogin',
  Home = 'Home',
  Historys = 'Historys',
  HistoryDetail = 'HistoryDetail',
  Report = 'Report',
  ReportComplete = 'ReportComplete',
  Notification = 'Notification',
  MyPageMain = 'MyPageMain',
  RegisterStoreList  = 'RegisterStoreList',
  SelectStore = 'SelectStore',
  SelectWork = 'SelectWork',
  SelectComplete = 'SelectComplete',
  MyStoreList = 'MyStoreList',
  MyStoreView = 'MyStoreView',
  MyEmployeeView = 'MyEmployeeView',
  StoreList = 'StoreList',
  StoreView = 'StoreView',
  MyPageInfo = 'MyPageInfo',
  SelectOnPush = 'SelectOnPush',
  RegisterStore = 'RegisterStore'

}



const RootStack = createNativeStackNavigator<RootStackParamList>();
const Navigator: React.FunctionComponent = () => {

  const navigationRef = useNavigationContainerRef();


  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator initialRouteName={'AuthHome'} >
        <Stack.Screen options={{
          headerShown: false,
        }} name={Screens.AuthHome} component={AuthHome} />
        <Stack.Screen options={{
          headerShown: false,
        }} name={Screens.Register} component={Register} />
        <Stack.Screen options={{
          headerShown: false,
        }} name={Screens.Login} component={Login} />
        <Stack.Screen options={{
          headerShown: false,
        }} name={Screens.InitialLogin} component={InitialLogin} />
        <Stack.Screen options={{
          headerShown: false,
        }} name={Screens.Home} component={Home} />
        <Stack.Screen options={{
          headerShown: false,
        }} name={Screens.Historys} component={Historys} />
        <Stack.Screen options={{
          headerShown: false,
        }} name={Screens.HistoryDetail} component={HistoryDetail} />
        <Stack.Screen options={{
          headerShown: false,
        }} name={Screens.Report} component={Report} />
        <Stack.Screen options={{
          headerShown: false,
        }} name={Screens.ReportComplete} component={ReportComplete} />
        <Stack.Screen options={{
          headerShown: false,
        }} name={Screens.Notification} component={Notification} />
        <Stack.Screen options={{
          headerShown: false,
        }} name={Screens.MyPageMain} component={MyPageMain} />
        
        <ParamStack.Screen options={{
          headerShown: false,
        }} name={Screens.SelectStore} component={SelectStore} />
        
        <ParamStack.Screen options={{
          headerShown: false,
        }} name={Screens.SelectWork} component={SelectWork} />
        <Stack.Screen options={{
          headerShown: false,
        }} name={Screens.MyStoreList} component={MyStoreList} />
        <Stack.Screen options={{
          headerShown: false,
        }} name={Screens.MyStoreView} component={MyStoreView} />
        <Stack.Screen options={{
          headerShown: false,
        }} name={Screens.MyEmployeeView} component={MyEmployeeView} />
        <Stack.Screen options={{
          headerShown: false,
        }} name={Screens.StoreList} component={StoreList} />
        <Stack.Screen options={{
          headerShown: false,
        }} name={Screens.StoreView} component={StoreView} />
        <Stack.Screen options={{
          headerShown: false,
        }} name={Screens.MyPageInfo} component={MyPageInfo} />

        <Stack.Screen options={{
          headerShown: false,
        }} name={Screens.RegisterStoreList} component={RegisterStoreList} />

        <ParamStack.Screen options={{
          headerShown: false,
        }} name={Screens.RegisterStore} component={RegisterStore} />
        <ParamStack.Screen options={{
          headerShown: false,
        }} name={Screens.SelectOnPush} component={SelectOnPush} initialParams={{title:"", body:""}}/>
        <ParamStack.Screen options={{
          headerShown: false,
        }} name={Screens.SelectComplete} component={SelectComplete} initialParams={{isStore:false}}/>

      </Stack.Navigator>

    </NavigationContainer>
    );
};
export default Navigator;
