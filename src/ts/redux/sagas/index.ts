import { all } from 'redux-saga/effects';
import { watchFetchSubjectList } from './subject';

function* rootSaga() {
	yield all([ watchFetchSubjectList ]);
}

export default rootSaga;
