import * as React from 'react';
import { FunctionComponent, useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { State } from '../redux/reducers';
// components
import Header from './header';
import SubjectTab from './subjectTab';
// actions
import { login, logout } from '../redux/actions/user';
import { getSubjectList, setSubjectList } from '../redux/actions/subject';

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = ReturnType<typeof mapDispatchToProps>;
type OwnProps = {};

type LayoutProps = StateProps & DispatchProps & OwnProps;

const Layout: FunctionComponent<LayoutProps> = (props) => {
	const { user, subjectList } = props;
	const { login, logout, getSubjectList, setSubjectList } = props;

	useEffect(
		() => {
			if (user === null) {
				setSubjectList([]);
			} else {
				const { subjectIdList } = user;
				getSubjectList(subjectIdList);
			}
		},
		[ user ]
	);

	return (
		<div className="layout">
			<Header user={user} login={login} logout={logout} />
			<SubjectTab subjectList={subjectList} />
		</div>
	);
};

const mapStateToProps = (state: State) => {
	const { userReducer, subjectReducer } = state;
	const { user } = userReducer;
	const { subjectList } = subjectReducer;
	return { user, subjectList };
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
	login: bindActionCreators(login, dispatch),
	logout: bindActionCreators(logout, dispatch),
	getSubjectList: bindActionCreators(getSubjectList, dispatch),
	setSubjectList: bindActionCreators(setSubjectList, dispatch)
});

export default connect<StateProps, DispatchProps, OwnProps>(mapStateToProps, mapDispatchToProps)(Layout);
