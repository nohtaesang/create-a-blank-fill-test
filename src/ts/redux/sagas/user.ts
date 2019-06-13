import { put, takeLatest } from 'redux-saga/effects';
import { userActionConstant as uac, LoginType, loginSuccess } from '../actions/user';

export function* watchLogin() {
	yield takeLatest(uac.LOGIN, login);
}

function* login(action: LoginType) {
	const res = {
		id: 0,
		email: 'nohtaesang@naver.com',
		password: '1234',
		subjectIdList: [ 0, 1 ]
	};
	yield put(loginSuccess(res));
}
