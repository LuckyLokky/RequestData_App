export const GET_USERS_DATA_REQUESTED = "GET_USERS_DATA_REQUESTED";
export const GET_USERS_DATA_SUCCEED = "GET_USERS_DATA_SUCCEED";
export const GET_USERS_DATA_FAILED = "GET_USERS_DATA_FAILED";

export const ACTION_GET_USERS_DATA_REQUESTED = (url) => ({
  type: GET_USERS_DATA_REQUESTED,
  payload: url,
});

export const ACTION_GET_USERS_DATA_SUCCEED = (data) => ({
  type: GET_USERS_DATA_SUCCEED,
  payload: data,
});

export const ACTION_GET_USERS_DATA_FAILED = (error) => ({
  type: GET_USERS_DATA_FAILED,
  payload: error.message,
});
