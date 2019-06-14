import * as React from 'react';
import { FunctionComponent, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { State } from '../redux/reducers';
// actions
import { userActionConstant } from '../redux/actions/user';
// components
import LoginForm from './loginForm';

type OwnProps = {};

const Header: FunctionComponent<OwnProps> = (props) => {
	// store
	const { userReducer } = useSelector((state: State) => state);
	const { user, loginState } = userReducer;
	// action
	const dispatch = useDispatch();

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
		dispatch({ type: userActionConstant.LOGOUT });
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
			{isActiveLoginForm && <LoginForm />}
		</div>
	);
};

export default Header;
