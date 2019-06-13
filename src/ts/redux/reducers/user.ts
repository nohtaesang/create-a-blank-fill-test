import { userActionConstant as uac, UserActionType, LoginSuccessType } from '../actions/user';
import { UserStateType } from '../models/user';

const initialState: UserStateType = {
	user: null
};

export default (state = initialState, action: UserActionType): UserStateType => {
	switch (action.type) {
		case uac.LOGIN:
			return state;
		case uac.LOGIN_SUCCESS:
			return { ...state, user: (action as LoginSuccessType).payload };
		case uac.LOGIN_FAIL:
			return state;
		case uac.LOGOUT:
			return state;
		case uac.LOGOUT_SUCCESS:
			return { ...state, user: null };
		default:
			return state;
	}
};
