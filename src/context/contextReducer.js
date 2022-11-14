const contextReducer = (state, action) => {
  let langOpt;

  switch (action.type) {
    case "CHANGE_ENGLISH":
      langOpt = "en";
      localStorage.setItem("langOpt", JSON.stringify(langOpt));

      return langOpt;

    case "CHANGE_SPANISH":
      langOpt = "es";
      localStorage.setItem("langOpt", JSON.stringify(langOpt));

      return langOpt;

    default:
      return state;
  }
};

export default contextReducer;
