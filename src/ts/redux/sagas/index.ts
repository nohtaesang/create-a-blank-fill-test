import { all } from 'redux-saga/effects';
import { watchGetSubjectList } from './subject';

export default function* rootSaga() {
	yield all([ watchGetSubjectList() ]);
}
