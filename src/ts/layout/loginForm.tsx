import * as React from 'react';
import { FunctionComponent, useState } from 'react';
// actions
import { LoginType } from '../redux/actions/user';

type OwnProps = {
	login(email: string, password: string): LoginType;
};

type SubjectTabProps = OwnProps;

const Header: FunctionComponent<SubjectTabProps> = (props) => {
	const { login } = props;
	const [ email, setEmail ] = useState('');
	const [ password, setPassword ] = useState('');

	const onChangeEmail = (e) => {
		setEmail(e.target.value);
	};
	const onChangePassword = (e) => {
		setPassword(e.target.value);
	};
	const onClickLogin = () => {
		login(email, password);
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
