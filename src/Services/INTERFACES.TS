export interface loginDataTypes {
  email: string;
  password: string;
}

export interface changePassDataTypes {
  oldPassword: string;
  newPassword: string;
  confirmPassword: string;
}

export interface RegisterTypes {
  userName: string;
  email: string;
  country: string;
  profileImage?: string;
  role: string,
  phoneNumber: string;
  password: string;
  confirmPassword: string;
}