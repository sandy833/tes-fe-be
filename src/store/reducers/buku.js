import * as actionsTypes from "../actions/buku/actionsTypes";

const initialState = {
  books: [],
  buku: {},
};

const Buku = (state = initialState, action) => {
  switch (action.type) {
    case actionsTypes.GET_BUKU:
      return {
        ...state,
        books: action.payload,
      };
    case actionsTypes.GET_BUKU_BY_ID:
      return {
        ...state,
        buku: action.payload,
      };
    case actionsTypes.UPDATE_BUKU:
      return {
        ...state,
      };
    case actionsTypes.DELETE_BUKU:
      return {
        ...state,
      };
    default:
      console.log(initialState, "Call data from bookReducer")
      return initialState;
  }
};

export default Buku;
