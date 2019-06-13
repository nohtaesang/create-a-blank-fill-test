import { put, takeLatest } from 'redux-saga/effects';
import { subjectActionConstant as sac, GetSubjectListType, getSubjectListSuccess } from '../actions/subject';

export function* watchGetSubjectList() {
	yield takeLatest(sac.GET_SUBJECT_LIST, getSubjectList);
}
function* getSubjectList(action: GetSubjectListType) {
	const res = [
		{
			id: 0,
			name: 'first subject',
			questionIdList: [ 0, 1 ]
		},
		{
			id: 1,
			name: 'second subject',
			questionIdList: [ 2, 3, 4 ]
		}
	];

	yield put(getSubjectListSuccess(res));
}
