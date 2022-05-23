let initialState = {
  userFirstName: "",
  userlastName: "",
  userDetails: ""
};

export default function reducer(currentState = initialState, action) {
  // return newState
  switch (action.type) {
    case "SET_USER_FIRST_NAME":
      return {
        ...currentState,
        userFirstName: action.payload
      };
    case "SET_USER_LAST_NAME":
      return {
        ...currentState,
        userLastName: action.payload
      };
    case "SET_USER_DETAILS":
      return {
        ...currentState,
        userDetails: action.payload
      };

    default:
      return currentState;
  }
}
