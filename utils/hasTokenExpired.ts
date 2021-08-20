import jwtDecode from "jwt-decode";

export default function hasTokenExpired(token: string) {
  const decoded: { exp: number; iat: number } = jwtDecode(token);
  console.log("decoded", decoded);
  const currentDate = new Date();
  let tokenExpired;
  if (decoded.exp * 1000 < currentDate.getTime()) {
    tokenExpired = true;
    return tokenExpired;
  } else {
    tokenExpired = false;
  }
  console.log("tokenExpired", tokenExpired);
}
