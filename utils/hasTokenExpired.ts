import jwtDecode from "jwt-decode";

//return TRUE if token has EXPIRED, and FALSE if token hasn't EXPIRED
export default function hasTokenExpired(token: string | null) {
  if (token === null || token === undefined) return true;
  const decoded: { exp: number; iat: number } = jwtDecode(token);
  const currentDate = new Date();
  let tokenExpired;
  if (decoded.exp * 1000 < currentDate.getTime()) {
    tokenExpired = true;
    return tokenExpired;
  } else {
    tokenExpired = false;
  }
  return tokenExpired;
}


export function getsignedUserEmail(token: string): string {
  const decoded: decodedType = jwtDecode(token);
  const userEmail = decoded?.email;
  return userEmail;
}

type decodedType = {
  email: string;
};
