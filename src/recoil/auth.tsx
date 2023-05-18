import { atom, selector } from "recoil";


export const authState = atom({
  key: 'auth',
  default: {}
});

export const getLoginSelector = selector({
  key: "login",
  get: async ({ get }) => {
    try{
      //const { data } = await client.get('/cookies');
      return {"status":"success","error_code":"00","message":"","data":{"token":"","username":"lee"}  };
    } catch (err) {
      throw err;
    }
  },
  set: ({set}, newValue)=> {
    set(authState, newValue)
  }
});
