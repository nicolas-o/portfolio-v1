const contextReducer = (state, action) => {
  let lang;

  switch (action.type) {
    case "CHANGE_ENGLISH":
      lang = "en";
      localStorage.setItem("lang", JSON.stringify(lang));

      return lang;

    case "CHANGE_SPANISH":
      lang = "es";
      localStorage.setItem("lang", JSON.stringify(lang));

      return lang;

    default:
      return state;
  }
};

export default contextReducer;
