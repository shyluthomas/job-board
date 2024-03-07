import { businessService } from "@/services";
import * as business from "../reducers/businessReducer";
import { put, takeEvery } from "redux-saga/effects";

function* _fetchbusinessList(): any {
  try {
    yield put(business.updateBusinessList({ status: "loading", business: [] }));
    const businessList = yield businessService.listBusiness();
    yield put(business.updateBusinessList({ status: "success", business: businessList }));
  } catch (e) {
    yield put(business.updateBusinessList({ status: "failed", business: [] }));
  }
}







function* mainSaga() {
  yield takeEvery(business.fetchBusinessListList, _fetchbusinessList);
}
export default mainSaga;
