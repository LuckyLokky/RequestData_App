import { takeLatest, call, put } from "redux-saga/effects";
import {
  GET_USERS_DATA_REQUESTED,
  ACTION_GET_USERS_DATA_SUCCEED,
  ACTION_GET_USERS_DATA_FAILED,
} from "./actions";

import { API } from "../../api/index";

function* getUsersDataSaga(action) {
  try {
    const data = yield call(API.usersApi.getUsers, action.payload);

    yield put(ACTION_GET_USERS_DATA_SUCCEED(data));
  } catch (e) {
    yield put(ACTION_GET_USERS_DATA_FAILED(e));
  }
}

export function* usersSaga() {
  yield takeLatest(GET_USERS_DATA_REQUESTED, getUsersDataSaga);
}
