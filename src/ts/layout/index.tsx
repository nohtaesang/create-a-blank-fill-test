import * as React from 'react';
import { FunctionComponent, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { State } from '../redux/reducers';
// actions
import { userActionConstant } from '../redux/actions/user';
import { subjectActionConstant } from '../redux/actions/subject';
// components
import Header from './header';
import SubjectTab from './subjectTab';

type OwnProps = {};

const Layout: FunctionComponent<OwnProps> = (props) => {
	// props
	const { children } = props;
	// store
	const { userReducer } = useSelector((state: State) => state);
	const { user, loginState } = userReducer;
	// action
	const dispatch = useDispatch();

	const [ loading, setLoading ] = useState(false);

	useEffect(() => {
		initializeUserInfo();
	}, []);

	const initializeUserInfo = async () => {
		const nextUser = JSON.parse(localStorage.getItem('user'));
		if (!nextUser) {
			dispatch({ type: subjectActionConstant.SET_SUBJECT_LIST, payload: [] });
		} else {
			const { subjectIdList } = nextUser;
			dispatch({ type: subjectActionConstant.GET_SUBJECT_LIST, payload: subjectIdList });
			dispatch({ type: userActionConstant.SET_USER, payload: nextUser });
		}
		setLoading(true);
	};

	useEffect(
		() => {
			switch (loginState) {
				case 'login':
					const { subjectIdList } = user;
					dispatch({ type: subjectActionConstant.GET_SUBJECT_LIST, payload: subjectIdList });
					return;
				case 'logout':
					dispatch({ type: subjectActionConstant.SET_SUBJECT_LIST, payload: [] });
					return;
			}
		},
		[ loginState ]
	);

	return loading ? (
		<div className="layout">
			<Header />
			{user ? <SubjectTab /> : <div>로그인을 해주세욤</div>}
			{children}
		</div>
	) : (
		<div>hii</div>
	);
};

export default Layout;
