import * as SecureStore from "expo-secure-store";
import hasTokenExpired from "@utils/hasTokenExpired";

export async function saveAuthtoken(token: string) {
  const checkTokenExpiry = hasTokenExpired(token);
  if (!checkTokenExpiry) {
    await SecureStore.setItemAsync("secure_auth_token", token);
  }
}

export async function getAuthtoken() {
  const authToken = await SecureStore.getItemAsync("secure_auth_token");
  return authToken;
}
