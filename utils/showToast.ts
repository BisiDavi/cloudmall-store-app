import {  ToastAndroid } from "react-native";

export default function showToast(message: string) {
  ToastAndroid.show(message, ToastAndroid.LONG);
}
