export const userReducer = (
  state: string = "none",
  action: {
    type: string;
    payload: string;
  }
) => {
  switch (action.type) {
    case "setUser":
      return action.payload;
    default:
      return state;
  }
};

export const setUserAction = (payload: string) => ({
  type: "setUser",
  payload,
});
