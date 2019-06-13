import * as React from 'react';
import { FunctionComponent, useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { State } from '../redux/reducers';
// components
import Header from './header';
import SubjectTab from './subjectTab';
// actions
import { login, logout, LoginType } from '../redux/actions/user';
import { getSubjectList } from '../redux/actions/subject';

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = ReturnType<typeof mapDispatchToProps>;
type OwnProps = {};

type LayoutProps = StateProps & DispatchProps & OwnProps;

const Layout: FunctionComponent<LayoutProps> = (props) => {
	const { user, subjectList } = props;
	const { getSubjectList, login, logout } = props;

	useEffect(
		() => {
			if (!user || !getSubjectList) return;
			getSubjectList([ 0, 1 ]);
		},
		[ user, getSubjectList ]
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
	getSubjectList: bindActionCreators(getSubjectList, dispatch),
	login: bindActionCreators(login, dispatch),
	logout: bindActionCreators(logout, dispatch)
});

export default connect<StateProps, DispatchProps, OwnProps>(mapStateToProps, mapDispatchToProps)(Layout);
