export function SetupStoreReducer(
  state = {
    completed: false,
    formPage: 0,
  },
  action: actionType
) {
  const { payload, type } = action;
  switch (type) {
    case "STOREDETAILS_PAGE_1": {
      return {
        ...state,
        completed: false,
        formPage: 1,
      };
    }
    default:
      return state;
  }
}

type actionType = {
  payload?: string;
  type: "STOREDETAILS_PAGE_1";
};
