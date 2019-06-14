import { userActionConstant as uac, UserActionType, LoginSuccessType, SetLoginStateType } from '../actions/user';
import { UserStateType } from '../models/user';

const initialState: UserStateType = {
	user: null,
	loginState: null
};

export default (state = initialState, action: UserActionType): UserStateType => {
	switch (action.type) {
		case uac.LOGIN:
			return state;
		case uac.LOGIN_SUCCESS:
			const nextUser = (action as LoginSuccessType).payload;
			localStorage.setItem('user', JSON.stringify(nextUser));
			return { ...state, user: nextUser, loginState: 'login' };
		case uac.SET_USER:
			return { ...state, user: JSON.parse(localStorage.getItem('user')) };
		case uac.LOGIN_FAIL:
			return state;
		case uac.LOGOUT:
			return state;
		case uac.LOGOUT_SUCCESS:
			localStorage.setItem('user', null);
			return { ...state, user: null, loginState: 'logout' };
		case uac.SET_LOGIN_STATE:
			return { ...state, loginState: (action as SetLoginStateType).payload };
		default:
			return state;
	}
};
