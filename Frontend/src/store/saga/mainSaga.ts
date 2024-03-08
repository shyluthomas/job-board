import { businessService } from "@/services";
import * as business from "../reducers/businessReducer";
import { put, takeEvery } from "redux-saga/effects";

function* _fetchbusinessList(): any {
  try {
    yield put(business.fetchBusinessLocation());
    yield put(business.fetchBusinessClassification());
    yield put(business.updateBusinessList({ status: "loading", business: [] }));
    const businessList = yield businessService.listBusiness();
    yield put(business.updateBusinessList({ status: "success", business: businessList }));
  } catch (e) {
    yield put(business.updateBusinessList({ status: "failed", business: [] }));
  }
}

function* _fetchBusinessLocation(): any {
  try {
    yield put(business.updateBusinessLocation({ status: "loading", location: [] }));
    const data = yield businessService.getBusinessLocations();
    yield put(business.updateBusinessLocation({ status: "success", location: data }));
  } catch (e) {
    yield put(business.updateBusinessLocation({ status: "failed", location: [] }));
  }
}

function* _fetchBusinessClassification(): any {
  try {
    yield put(business.updatebusinessClassification({ status: "loading", classification: [] }));
    const data = yield businessService.getBusinessClassifications();
    yield put(business.updatebusinessClassification({ status: "success", classification: data }));
  } catch (e) {
    yield put(business.updatebusinessClassification({ status: "failed", classification: [] }));
  }
}








function* mainSaga() {
  yield takeEvery(business.fetchBusinessListList, _fetchbusinessList);
  yield takeEvery(business.fetchBusinessLocation, _fetchBusinessLocation);
  yield takeEvery(business.fetchBusinessClassification, _fetchBusinessClassification);
  
}
export default mainSaga;
