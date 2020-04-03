import Cookies from "js-cookie";

export function IsLogged() {
  const cookie = Cookies.get("token");

  return cookie ? true : false;
}
export function doLogout() {
  Cookies.remove("token");
}
export function Auth(cookie, remember = false) {
  if (remember) {
    Cookies.set("token", cookie, { expires: 999 });
  } else {
    Cookies.set("token", cookie);
  }
}
