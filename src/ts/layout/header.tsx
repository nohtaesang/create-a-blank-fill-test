import * as React from 'react';
import { FunctionComponent, useState, useEffect } from 'react';
// components
import LoginForm from './loginForm';
// models
import { UserType } from '../redux/models/user';
// actions
import { LoginType, LogoutType } from '../redux/actions/user';

type OwnProps = {
	user: UserType | null;
	loginState: string;
	login(email: string, password: string): LoginType;
	logout(): LogoutType;
};

type SubjectTabProps = OwnProps;

const Header: FunctionComponent<SubjectTabProps> = (props) => {
	const { user, loginState } = props;
	const { login, logout } = props;
	const [ isActiveLoginForm, setIsActiveLoginForm ] = useState(false);

	useEffect(
		() => {
			if (loginState === 'login') setIsActiveLoginForm(false);
		},
		[ loginState ]
	);

	const onClickLoginToggle = () => {
		setIsActiveLoginForm(!isActiveLoginForm);
	};
	const onClickLogout = () => {
		logout();
	};

	return (
		<div>
			<div>Title</div>
			<div>
				{user === null ? (
					<div onClick={onClickLoginToggle}>Login</div>
				) : (
					<div onClick={onClickLogout}>Logout</div>
				)}
			</div>
			{isActiveLoginForm && <LoginForm login={login} />}
		</div>
	);
};

export default Header;
