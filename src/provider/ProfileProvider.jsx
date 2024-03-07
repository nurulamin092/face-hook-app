import React from "react";
import { useReducer } from "react";
import { ProfileContext } from "../context";
import { initialState, profileReducers } from "../reducers/ProfileReducers";

const ProfileProvider = ({ children }) => {
  const [state, dispatch] = useReducer(profileReducers, initialState);
  return (
    <ProfileContext.Provider value={{ state, dispatch }}>
      {children}
    </ProfileContext.Provider>
  );
};

export default ProfileProvider;
