import { put, takeLatest } from 'redux-saga/effects';
import { subjectActionTypes as at, GetSubjectListType, getSubjectListSuccess } from '../actions/subject';

export function* watchGetSubjectList() {
	yield takeLatest(at.GET_SUBJECT_LIST, getSubjectList);
}

function* getSubjectList(action: GetSubjectListType) {
	// ownerId로 question[][] 뱉기
	const res = [
		[
			{
				id: 0,
				subjectId: 0,
				order: 0,
				text: '안녕하세요. 제 이름은 노태상 입니다. 만나서 반갑습니다.',
				selectedIndexes: [ 0, 3, 5, 6 ]
			},
			{
				id: 1,
				subjectId: 0,
				order: 1,
				text: '안녕하세요. 제 이름은 노태상 입니다. 만나서 반갑습니다.',
				selectedIndexes: [ 2 ]
			}
		],
		[
			{
				id: 2,
				subjectId: 1,
				order: 0,
				text: '안녕하세요. 제 이름은 노태상 입니다. 만나서 반갑습니다.',
				selectedIndexes: [ 0, 3, 5, 6 ]
			},
			{
				id: 3,
				subjectId: 1,
				order: 1,
				text: '안녕하세요. 제 이름은 노태상 입니다. 만나서 반갑습니다.',
				selectedIndexes: [ 0, 3, 5, 6 ]
			},
			{
				id: 4,
				subjectId: 1,
				order: 2,
				text: '안녕하세요. 제 이름은 노태상 입니다. 만나서 반갑습니다.',
				selectedIndexes: [ 0, 3, 5, 6 ]
			}
		]
	];

	yield put(getSubjectListSuccess(res));
}
