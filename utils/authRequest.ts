import axiosInstance from "network/axiosInstance";
import showToast from "./showToast";

export async function signupUser(
    email: string,
    password: string,
): Promise<string | undefined> {
    let token;
    await axiosInstance
        .post("/api/store/register", { email, password })
        .then((response) => {
            console.log("response", response);
            showToast(response?.data.message);
            token = response.data.token;
            return token;
        })
        .catch((error) => {
            console.log("error", error.response);
            showToast(error.response.data?.message);
            token = null;
            return token;
        });
    return token;
}

export async function loginUser(
    email: string,
    password: string,
): Promise<string | undefined> {
    console.log("email", email, "password", password);
    let token;
    await axiosInstance
        .post("/api/store/login", { email, password })
        .then((response) => {
            console.log("response", response);
            console.log("response", response.data.token);
            showToast(response?.data.message);
            token = response.data.token;
            return token;
        })
        .catch((error) => {
            showToast(error.response.data?.message);
            console.log("error", error.response?.data);
            token = null;
            return token;
        });
    return token;
}
