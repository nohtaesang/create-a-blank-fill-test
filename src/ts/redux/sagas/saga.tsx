import { all } from 'redux-saga/effects';
import { watchGetSubjectList } from '../sagas/subject';
function* rootSaga() {
	yield all([ watchGetSubjectList ]);
}

export default rootSaga;
