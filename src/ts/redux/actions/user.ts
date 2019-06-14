import { UserType } from '../models/user';

export const userActionConstant = {
	LOGIN: 'LOGIN',
	LOGIN_SUCCESS: 'LOGIN_SUCCESS',
	LOGIN_FAIL: 'LOGIN_FAIL',
	LOGOUT: 'LOGOUT',
	LOGOUT_SUCCESS: 'LOGOUT_SUCCESS',
	SET_USER: 'SET_USER',
	SET_LOGIN_STATE: 'SET_LOGIN_STATE'
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

export const setUser = (user: UserType) => ({ type: userActionConstant.SET_USER, payload: user });
export const setLoginState = (loginState: string) => ({
	type: userActionConstant.SET_LOGIN_STATE,
	payload: loginState
});

export type LoginType = ReturnType<typeof login>;
export type LoginSuccessType = ReturnType<typeof loginSuccess>;
export type LoginFailType = ReturnType<typeof loginFail>;
export type LogoutType = ReturnType<typeof logout>;
export type LogoutSuccessType = ReturnType<typeof logoutSuccess>;
export type SetUserType = ReturnType<typeof setUser>;
export type SetLoginStateType = ReturnType<typeof setLoginState>;

export type UserActionType =
	| LoginType
	| LoginSuccessType
	| LoginFailType
	| LogoutType
	| LogoutSuccessType
	| SetUserType
	| SetLoginStateType;
