import { atom, selector, useRecoilState } from "recoil";
import axios from "axios";
import { setCookie } from "../cookie/_cookie";
import Constant from "../global/constant";


export const authState = atom({
  key: 'auth',
  default: {"phone":"", "name":"","role":"","token":""}
});
export const mobileState = atom({
  key: 'mobile',
  default: "01011112222"
});
export const passwordState = atom({
  key: 'password',
  default: "qwer1234!"
});
export const authSelector = selector({
  key : "authSelector",
  get : ({get}) => get(authState),
  set : ({set}, newValue) => set(authState, newValue)
});
export const getLoginSelector = selector({
  key: "login",
  get: async ({ get }) => {
    try{
      const params = JSON.stringify({
        "phone": get(mobileState),
        "password": get(passwordState),
      });
      console.log(params);
      const response = await axios.post(
        Constant.baseUrl + '/login/ptect', params, {"headers": {
            "content-type": "application/json",
          },}
      );
      console.log(response.data)
      if (response.status == 200)
      {

        setCookie("token", response.data.token);
        setCookie("phone", response.data.phone);
        setCookie("name", response.data.name);
        return response.data;
      }
      else
      {
        throw new Error(response.data.message);
      }
      
    }
    catch (err){
      console.log(err);
    }
  }
});

export const roleSelector = selector({
  key: "role",
  get: async ({ get }) => {
    try{

      const token = get(authState);
      const auth = get(authState);
      const params = JSON.stringify({
        "phone": auth.phone,
        "roleKey": auth.role,
      });
      const response = await axios.post(
        Constant.baseUrl + '/account/auth',params, {"headers": {
            "content-type": "application/json",
            "Authorization" : "Bearer " + token
          },}
      );
      if (response.status == 200)
      {
        return response.data;
      }
      else
      {
        throw new Error(response.data.message);
      }
    } catch (err) {
      console.log(err);
      throw err;
    }
  },
});
