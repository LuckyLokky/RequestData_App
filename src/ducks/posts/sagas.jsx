import { takeLatest, call, put } from "redux-saga/effects";
import {
  GET_POSTS_DATA_REQUESTED,
  ACTION_GET_POSTS_DATA_SUCCEED,
  ACTION_GET_POSTS_DATA_FAILED,
} from "./actions";

import { API } from "../../api/index";

function* getPostsDataSaga(action) {
  try {
    const data = yield call(API.postsApi.getPosts, action.payload);

    yield put(ACTION_GET_POSTS_DATA_SUCCEED(data));
  } catch (e) {
    yield put(ACTION_GET_POSTS_DATA_FAILED(e));
  }
}

export function* postsSaga() {
  yield takeLatest(GET_POSTS_DATA_REQUESTED, getPostsDataSaga);
}
