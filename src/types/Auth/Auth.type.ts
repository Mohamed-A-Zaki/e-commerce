export type UserType = {
  active: boolean;
  wishlist: [];
  _id: string;
  name: string;
  slug: string;
  email: string;
  phone: string;
  role: "admin" | "user";
  createdAt: string;
  updatedAt: string;
  addresses: [];
};

export type LoginFormDataType = {
  email: string;
  password: string;
};

export type ForgetPasswordFormDataType = {
  email: string;
};

export type VerifyCodeFormDataType = {
  resetCode: string;
};

export type ResetFormDataType = {
  email: string,
  newPassword: string,
  passwrdConfirm: string,
};

export type RegisterFormDataType = {
  name: string;
  email: string;
  password: string;
  passwordConfirm: string;
  phone: string;
};

export type AuthResponseType = {
  data: UserType;
  token: string;
};
