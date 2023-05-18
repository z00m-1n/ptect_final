import React, { useCallback, useState } from "react";
import { Alert, Image, Pressable, SafeAreaView, StyleSheet, Text, View } from "react-native";
import GeneralStatusBar from "../../components/general_status_bar";
import messaging from "@react-native-firebase/messaging";
import notifee from "@notifee/react-native";


import MainLogo from "@images/main.png";
const AuthHome: React.FunctionComponent = ({ navigation }: any) => {

  const [token, setToken] = useState('');
  async function getFcmToken (){
    const fcmToken = await messaging().getToken();
    await console.log(fcmToken);
    setToken(fcmToken);

  }
  async function onDisplayNotification() {
    // Request permissions (required for iOS)
    await notifee.requestPermission()

    // Create a channel (required for Android)
    const channelId = await notifee.createChannel({
      id: 'default',
      name: 'Default Channel',
    });

    // Display a notification
    await notifee.displayNotification({
      title: 'Notification Title',
      body: 'Main body content of the notification',
      android: {
        channelId,
        smallIcon: 'ic_launcher', // optional, defaults to 'ic_launcher'.
        // pressAction is needed if you want the notification to open the app when pressed
        actions: [
          {
            title: 'test1',
            pressAction: {
              id: 't1',
            },
          },
          {
            title: 'test2',
            pressAction: {
              id: 't2',
            },
          },
        ],
      },
    });
  }
  return (
    <SafeAreaView style={styles.container}>
      <GeneralStatusBar backgroundColor="#4B0082"  barStyle="light-content"/>
      <View style={styles.upper}>
        <Image source={MainLogo} />
      </View>
      <View style={styles.lower}>
        <Pressable style={[styles.normalBtn, {marginTop:0}]}
         onPress={()=> navigation.push('Register')}
        >
          <Text style={styles.btnText}>회원가입</Text>
        </Pressable>

        <Pressable style={[styles.normalBtn, {marginTop:20}]}
                   onPress={()=> navigation.push('Login')}>
          <Text style={styles.btnText}>로그인</Text>
        </Pressable>
        <Pressable style={[styles.normalBtn, {marginTop:20}]}
                   onPress={getFcmToken}>
          <Text style={styles.btnText}>토큰</Text>
        </Pressable>
        <Pressable style={[styles.normalBtn, {marginTop:20}]}
                   onPress={onDisplayNotification}>
          <Text style={styles.btnText}>notifee</Text>
        </Pressable>

      </View>

    </SafeAreaView>

  );
};

const styles = StyleSheet.create({
  container : {
    flex:1,
    backgroundColor : '#4B0082'
  },
  upper: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    bottom : 40
  },
  maintext:{
    fontSize : 36,
    color:'#FFFFFF',
    fontWeight : 'bold'

  },
  normalBtn:{
    marginLeft : 20,
    marginRight : 20,
    backgroundColor : '#D9D9D9',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 25,
    paddingHorizontal: 32,
    elevation: 3,
    borderRadius: 10,
  },
  btnText : {
    fontSize : 15,
    color: '#000000'
  },
  lower: {
    flex:1
  },

});
export default AuthHome;
