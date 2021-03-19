import React, { useReducer, createContext, useEffect } from "react";
import contextReducer from "./contextReducer";
import { spanish } from "../utils/textDifferentLanguages";
import { english } from "../utils/textDifferentLanguages";

let initial = JSON.parse(localStorage.getItem("lang")) || ["es"];

export const LanguageTracker = createContext(initial);

export const Provider = ({ children }) => {
  const [lang, dispatch] = useReducer(contextReducer, initial);
  const language = lang === "en" ? english : spanish;

  const ChangeToEng = () => {
    dispatch({ type: "CHANGE_ENGLISH" });
  };

  const ChangeToSpa = () => {
    dispatch({ type: "CHANGE_SPANISH" });
  };

  return (
    <LanguageTracker.Provider
      value={{
        ChangeToEng,
        ChangeToSpa,
        lang,
        language,
      }}
    >
      {children}
    </LanguageTracker.Provider>
  );
};
