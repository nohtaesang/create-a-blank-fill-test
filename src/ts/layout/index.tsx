import * as React from 'react';
import { FunctionComponent, useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { State } from '../redux/reducers';
// components
import Header from './header';
import SubjectTab from './subjectTab';

// actions
import { login, logout, setUser } from '../redux/actions/user';
import { getSubjectList, setSubjectList } from '../redux/actions/subject';

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = ReturnType<typeof mapDispatchToProps>;
type OwnProps = {};

type LayoutProps = StateProps & DispatchProps & OwnProps;

const Layout: FunctionComponent<LayoutProps> = (props) => {
	const { children, user, loginState, subjectList } = props;
	const { login, logout, getSubjectList, setSubjectList, setUser } = props;
	const [ loading, setLoading ] = useState(false);

	useEffect(() => {
		initializeUserInfo();
	}, []);

	const initializeUserInfo = async () => {
		const nextUser = JSON.parse(localStorage.getItem('user'));
		if (!nextUser) {
			setSubjectList([]);
		} else {
			const { subjectIdList } = nextUser;
			getSubjectList(subjectIdList);
			setUser(nextUser);
		}
		setLoading(true);
	};

	useEffect(
		() => {
			switch (loginState) {
				case 'login':
					const { subjectIdList } = user;
					getSubjectList(subjectIdList);
					return;
				case 'logout':
					setSubjectList([]);
					return;
			}
		},
		[ loginState ]
	);

	return loading ? (
		<div className="layout">
			<Header user={user} login={login} logout={logout} loginState={loginState} />
			{user ? <SubjectTab subjectList={subjectList} /> : <div>로그인을 해주세욤</div>}
			{children}
		</div>
	) : (
		<div>hii</div>
	);
};

const mapStateToProps = (state: State) => {
	const { userReducer, subjectReducer } = state;
	const { user, loginState } = userReducer;
	const { subjectList } = subjectReducer;
	return { user, loginState, subjectList };
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
	login: bindActionCreators(login, dispatch),
	logout: bindActionCreators(logout, dispatch),
	setUser: bindActionCreators(setUser, dispatch),
	getSubjectList: bindActionCreators(getSubjectList, dispatch),
	setSubjectList: bindActionCreators(setSubjectList, dispatch)
});

export default connect<StateProps, DispatchProps, OwnProps>(mapStateToProps, mapDispatchToProps)(Layout);
