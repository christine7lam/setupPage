import { fork, all } from "redux-saga/effects";
import createSaga from "./create/saga";

const sagas = [createSaga];

export default function* rootSaga() {
  yield all(sagas.map(saga => fork(saga)));
}
