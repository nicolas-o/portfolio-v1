import React, { useReducer, createContext } from "react";
import contextReducer from "./contextReducer";
import { spanish } from "../utils/textDifferentLanguages";
import { english } from "../utils/textDifferentLanguages";

let initial = JSON.parse(localStorage.getItem("lang")) || [];

export const LanguageTracker = createContext(initial);

export const Provider = ({ children }) => {
  const [lang, dispatch] = useReducer(contextReducer, initial);
  const language = lang === "en" ? english : spanish;

  const changeToEng = () => {
    dispatch({ type: "CHANGE_ENGLISH" });
  };

  const changeToSpa = () => {
    dispatch({ type: "CHANGE_SPANISH" });
  };

  return (
    <LanguageTracker.Provider
      value={{
        changeToEng,
        changeToSpa,
        lang,
        language,
      }}
    >
      {children}
    </LanguageTracker.Provider>
  );
};
