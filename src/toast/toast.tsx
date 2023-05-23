import { ToastAndroid } from "react-native";

export const showToastWithGravity = (txt:string) => {
  ToastAndroid.showWithGravity(
    txt,
    ToastAndroid.SHORT,
    ToastAndroid.BOTTOM,
  );
};