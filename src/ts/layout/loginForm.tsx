import * as React from 'react';
import styled from 'styled-components';
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
		<Wrap>
			<input onChange={onChangeEmail} value={email} />
			<input onChange={onChangePassword} value={password} />
			<button onClick={onClickLogin}>Login</button>
		</Wrap>
	);
};

export default Header;

const Wrap = styled.div`
	position: absolute;
	top: 50px;
	right: 0px;
	border: solid 1px black;
	width: 200px;
	height: 200px;
`;
