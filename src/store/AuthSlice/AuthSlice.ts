import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import BaseURL from "../../Api/BaseURL";
import {
  AuthResponseType,
  ForgetPasswordFormDataType,
  LoginFormDataType,
  RegisterFormDataType,
  ResetFormDataType,
  UserType,
  VerifyCodeFormDataType,
} from "../../types/Auth/Auth.type";

type InitialStateType = {
  user: UserType;
  token: string;
};

const initialState: InitialStateType = {
  user: JSON.parse(localStorage.getItem("user") as string) || ({} as UserType),
  token: localStorage.getItem("token") || "",
};

export const register = createAsyncThunk(
  "Auth/register",
  async (register_data: RegisterFormDataType) => {
    const url = "api/v1/auth/signup";
    const { data } = await BaseURL.post<AuthResponseType>(url, register_data);
    return data;
  }
);

export const login = createAsyncThunk(
  "Auth/login",
  async (login_data: LoginFormDataType) => {
    const url = "api/v1/auth/login";
    const { data } = await BaseURL.post<AuthResponseType>(url, login_data);
    return data;
  }
);

export const sendCode = createAsyncThunk(
  "Auth/sendCode",
  async (values: ForgetPasswordFormDataType) => {
    const url = "api/v1/auth/forgotPasswords";
    await BaseURL.post(url, values);
    return;
  }
);

export const verifyCode = createAsyncThunk(
  "Auth/verifyCode",
  async (values: VerifyCodeFormDataType) => {
    const url = "api/v1/auth/verifyResetCode";
    await BaseURL.post(url, values);
    return;
  }
);

export const resetPassword = createAsyncThunk(
  "Auth/resetPassword",
  async (values: ResetFormDataType) => {
    const url = "api/v1/auth/resetPassword";
    await BaseURL.post(url, values);
    return;
  }
);

const AuthSlice = createSlice({
  name: "Auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.user = {} as UserType;
      state.token = "";
      localStorage.removeItem("token");
      localStorage.removeItem("user");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.fulfilled, (state, { payload }) => {
        state.user = payload.data;
        state.token = payload.token;
        localStorage.setItem("token", payload.token);
        localStorage.setItem("user", JSON.stringify(payload.data));
      })
      .addCase(login.fulfilled, (state, { payload }) => {
        state.user = payload.data;
        state.token = payload.token;
        localStorage.setItem("token", payload.token);
        localStorage.setItem("user", JSON.stringify(payload.data));
      });
  },
});

export const { logout } = AuthSlice.actions;

export default AuthSlice.reducer;
