import * as React from 'react';
import { FunctionComponent, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { State } from '../redux/reducers';
// actions
import { userActionConstant } from '../redux/actions/user';
import { subjectActionConstant } from '../redux/actions/subject';
// actions

type OwnProps = {};

const Header: FunctionComponent<OwnProps> = (props) => {
	// action
	const dispatch = useDispatch();

	const [ email, setEmail ] = useState('');
	const [ password, setPassword ] = useState('');

	const onChangeEmail = (e) => {
		setEmail(e.target.value);
	};
	const onChangePassword = (e) => {
		setPassword(e.target.value);
	};
	const onClickLogin = () => {
		dispatch({ type: userActionConstant.LOGIN, payload: { email, password } });
	};
	return (
		<div>
			<input onChange={onChangeEmail} value={email} />
			<input onChange={onChangePassword} value={password} />
			<button onClick={onClickLogin}>Login</button>
		</div>
	);
};

export default Header;
