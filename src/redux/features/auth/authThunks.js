import { createAsyncThunk } from "@reduxjs/toolkit";
import { jwtDecode } from "jwt-decode";

import { clearUserFromStorage, saveUserToStorage } from "./authStorage";

export const loginThunk = createAsyncThunk("auth/login", async (credential) => {
  const { email, name, picture, sub } = jwtDecode(credential);
  const user = { email, name, picture, sub };
  saveUserToStorage(user);
  return user;
});

export const logoutThunk = createAsyncThunk("auth/logout", async () => {
  clearUserFromStorage();
  //   google.accounts.id.disableAutoSelect();
});
