import React, { useReducer, createContext, useState } from "react";
import contextReducer from "./contextReducer";
import { spanish } from "../utils/textDifferentLanguages";
import { english } from "../utils/textDifferentLanguages";

const initialLang = JSON.parse(localStorage.getItem("langOpt")) || ["es"];

const initialState = {
  isHeaderVisible: "",
  isSobreMiVisible: "",
  isQueHagoVisible: "",
  isProyectosVisible: "",
  isContactameVisible: "",
};
export const Context = createContext();

export const Provider = ({ children }) => {
  const [globalState, setGlobalState] = useState(initialState);
  const [langOpt, dispatch] = useReducer(contextReducer, initialLang);
  const language = langOpt === "en" ? english : spanish;

  const changeToEng = () => {
    dispatch({ type: "CHANGE_ENGLISH" });
  };

  const changeToSpa = () => {
    dispatch({ type: "CHANGE_SPANISH" });
  };

  const languageRel = {
    globalState,
    setGlobalState,
    changeToEng,
    changeToSpa,
    langOpt,
    language,
  };

  return <Context.Provider value={languageRel}>{children}</Context.Provider>;
};
