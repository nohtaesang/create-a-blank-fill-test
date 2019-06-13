import { UserType } from '../models/user';

export const userActionConstant = {
	LOGIN: 'LOGIN',
	LOGIN_SUCCESS: 'LOGIN_SUCCESS',
	LOGIN_FAIL: 'LOGIN_FAIL',
	LOGOUT: 'LOGOUT',
	LOGOUT_SUCCESS: 'LOGOUT_SUCCESS'
};

export const login = (email: string, password: string) => ({
	type: userActionConstant.LOGIN,
	payload: { email, password }
});

export const loginSuccess = (user: UserType) => ({
	type: userActionConstant.LOGIN_SUCCESS,
	payload: user
});
export const loginFail = () => ({
	type: userActionConstant.LOGIN_FAIL
});

export const logout = () => ({
	type: userActionConstant.LOGOUT
});

export const logoutSuccess = () => ({
	type: userActionConstant.LOGOUT_SUCCESS
});

export type LoginType = ReturnType<typeof login>;
export type LoginSuccessType = ReturnType<typeof loginSuccess>;
export type LoginFailType = ReturnType<typeof loginFail>;
export type LogoutType = ReturnType<typeof logout>;
export type LogoutSuccessType = ReturnType<typeof logoutSuccess>;

export type UserActionType = LoginType | LoginSuccessType | LoginFailType | LogoutType | LogoutSuccessType;
