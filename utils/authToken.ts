import * as SecureStore from "expo-secure-store";
import hasTokenExpired from "./hasTokenExpired";

export async function saveAuthtoken(token: any) {
    if (token === null || undefined) return;
    const checkTokenExpiry = hasTokenExpired(token);
    if (!checkTokenExpiry) {
        await SecureStore.setItemAsync("secure_auth_token", token);
    }
}

export async function getAuthtoken() {
    try {
        const authToken = await SecureStore.getItemAsync("secure_auth_token");
        return authToken;
    } catch (e) {
        console.log("error", e);
        return null;
    }
}

export async function saveToStorage(name: string, item: any) {
    const itemStringified = JSON.stringify(item);
    console.log("itemStringified", itemStringified);
    return await SecureStore.setItemAsync(name, itemStringified);
}

export async function getFromStorage(name: string): Promise<any> {
    return await SecureStore.getItemAsync(name);
}
