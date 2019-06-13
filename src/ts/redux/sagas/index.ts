import { all } from 'redux-saga/effects';
import { watchLogin, watchLogout } from './user';
import { watchGetSubjectList } from './subject';

export default function* rootSaga() {
	yield all([ watchLogin(), watchGetSubjectList(), watchLogout() ]);
}
