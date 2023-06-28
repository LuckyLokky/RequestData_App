import {
  GET_PHOTOS_DATA_REQUESTED,
  GET_PHOTOS_DATA_SUCCEED,
  GET_PHOTOS_DATA_FAILED,
} from "./actions";

export const initialState = {
  data: [],
  error: null,
  isFetching: false,
};

export const photosReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PHOTOS_DATA_REQUESTED:
      return {
        ...state,
        isFetching: true,
      };
    case GET_PHOTOS_DATA_SUCCEED:
      return {
        ...state,
        data: action.payload,
        isFetching: false,
        error: initialState.error,
      };

    case GET_PHOTOS_DATA_FAILED:
      return {
        ...state,
        error: action.payload,
        isFetching: false,
      };
    default:
      return {
        ...state,
      };
  }
};
