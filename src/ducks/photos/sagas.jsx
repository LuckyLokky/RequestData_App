import { takeLatest, call, put } from "redux-saga/effects";
import {
  GET_PHOTOS_DATA_REQUESTED,
  ACTION_GET_PHOTOS_DATA_SUCCEED,
  ACTION_GET_PHOTOS_DATA_FAILED,
} from "./actions";

import { API } from "../../api/index";

function* getPhotosDataSaga(action) {
  try {
    const response = yield call(API.photosApi.getPhotos, action.payload);
    console.log(response);
    let data = [];
    for (let item of response.slice(0, 20)) {
      data.push(item);
    }

    yield put(ACTION_GET_PHOTOS_DATA_SUCCEED(data));
  } catch (e) {
    yield put(ACTION_GET_PHOTOS_DATA_FAILED(e));
  }
}

export function* photosSaga() {
  yield takeLatest(GET_PHOTOS_DATA_REQUESTED, getPhotosDataSaga);
}
