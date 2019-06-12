import { put, takeLatest } from 'redux-saga/effects';
import { fetchSubjectList } from '../services/subject';
import { actionTypes as at } from '../constants/subject';

export function* watchFetchSubjectList() {
	yield takeLatest(at.FETCH_SUBJECT_LIST, fetchSubjectList);
}
