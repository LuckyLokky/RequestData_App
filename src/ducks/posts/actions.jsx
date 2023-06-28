export const GET_POSTS_DATA_REQUESTED = "GET_POSTS_DATA_REQUESTED";
export const GET_POSTS_DATA_SUCCEED = "GET_POSTS_DATA_SUCCEED";
export const GET_POSTS_DATA_FAILED = "GET_POSTS_DATA_FAILED";

export const ACTION_GET_POSTS_DATA_REQUESTED = (url) => ({
  type: GET_POSTS_DATA_REQUESTED,
  payload: url,
});

export const ACTION_GET_POSTS_DATA_SUCCEED = (data) => ({
  type: GET_POSTS_DATA_SUCCEED,
  payload: data,
});

export const ACTION_GET_POSTS_DATA_FAILED = (error) => ({
  type: GET_POSTS_DATA_FAILED,
  payload: error.message,
});
