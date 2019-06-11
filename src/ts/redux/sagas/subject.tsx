import { put, takeLatest } from 'redux-saga/effects';
import { GetSubjectIdList, GetSubjectList } from '../types/subject';
// import axios from 'axios';

export function* watchGetSubjectList() {
	yield takeLatest('GET_SUBJECT_ID_LIST', getSubjectIdList);
}

// ownerId를 이용하여 subjectIdList를 가져온다
function* getSubjectIdList(action: GetSubjectIdList) {
	console.log(action);
	yield put({
		type: 'GET_SUBJECT_LIST',
		payload: {
			subjectIdList: [ 0, 1 ]
		}
	});
}

export function* watchGetSbujectList() {
	yield takeLatest('GET_SUBJECT_LIST', getSubjectList);
}

// subjectIdList를 이용하여 questionList를 가져온다
function* getSubjectList(action: GetSubjectList) {
	yield put({
		type: 'GET_SUBJECT_LIST_SUCCESS',
		payload: {
			subjectList: [
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
			]
		}
	});
}

// function* get
