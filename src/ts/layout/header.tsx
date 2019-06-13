import * as React from 'react';
import styled from 'styled-components';
import { FunctionComponent, useState, useEffect } from 'react';
// components
import LoginForm from './loginForm';
// models
import { UserType } from '../redux/models/user';
// actions
import { LoginType, LogoutType } from '../redux/actions/user';

type OwnProps = {
	user: UserType | null;
	login(email: string, password: string): LoginType;
	logout(): LogoutType;
};

type SubjectTabProps = OwnProps;

const Header: FunctionComponent<SubjectTabProps> = (props) => {
	const { user } = props;
	const { login, logout } = props;
	const [ isActiveLoginForm, setIsActiveLoginForm ] = useState(false);

	useEffect(
		() => {
			if (user === null) return;
			setIsActiveLoginForm(false);
		},
		[ user ]
	);

	const onClickLoginToggle = () => {
		setIsActiveLoginForm(!isActiveLoginForm);
	};
	const onClickLogout = () => {
		logout();
	};

	return (
		<Wrap>
			<div className="logo">N M</div>
			<div className="header-right">
				{user === null ? (
					<div className="login-toggle-btn" onClick={onClickLoginToggle}>
						Login
					</div>
				) : (
					<div className="logout-btn" onClick={onClickLogout}>
						Logout
					</div>
				)}
			</div>
			{isActiveLoginForm && <LoginForm login={login} />}
		</Wrap>
	);
};

export default Header;

const Wrap = styled.div`
	position: relative;
	width: 100%;
	height: 50px;
	display: flex;
	justify-content: center;
	align-items: center;
	border-bottom: solid 1px black;
	.logo {
	}
	.header-right {
		position: absolute;
		top: 0;
		right: 0;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: 50px;
		width: 100px;
		.login-btn {
			cursor: pointer;
		}
	}
	.login-form {
		position: absolute;
		top: 50px;
		right: 0px;
		border: solid 1px black;
		width: 200px;
		height: 200px;
	}
`;
