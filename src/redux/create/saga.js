import { put, takeEvery } from "redux-saga/effects";

import { START_CREATE } from "./action";
import { startCreate } from "./api";
import transformPayload from "./payload";

function* fetchCreateSaga(params) {
  const response = yield startCreate(params);
  const payload = transformPayload(response);
}

export default function*() {
  yield takeEvery(START_CREATE, fetchCreateSaga);
}
