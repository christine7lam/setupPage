import {} from "./action";

const defaultState = {
  details: null,
  fetching: false,
  error: null
};

const create = (state = defaultState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default create;
