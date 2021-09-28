const initialState = "";

const calculatReudcer = (state = initialState, action) => {
  switch (action.type) {
    case "calculate":
      var result;
      try {
        result = eval(action.payload);
      } catch (err) {
        result = "Error";
      }
      state = result;
      return state;
    case "update":
      state = state.concat(action.payload);
      return state;
    case "clear":
      state = "";
      return state;
    case "backspace":
      state = state.slice(0, state.length - 1);
      return state;
    default:
      return state;
  }
};
export default calculatReudcer;
