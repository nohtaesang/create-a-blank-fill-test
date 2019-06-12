import * as React from 'react';
import { FunctionComponent, useState } from 'react';
import { connect } from 'react-redux';
import { getSubjectList } from '../redux/models/subject';
import { State } from '../redux/reducers';
import { bindActionCreators, Dispatch } from 'redux';

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = ReturnType<typeof mapDispatchToProps>;
type OwnProps = {};

type ContentProps = StateProps & DispatchProps & OwnProps;

const Content: FunctionComponent<ContentProps> = (props) => {
	const onClickGetSubjectList = () => {
		props.getSubjectList(0);
	};

	return (
		<div>
			<button onClick={onClickGetSubjectList}>bye</button>
		</div>
	);
};

const mapStateToProps = (state: State) => {
	const { subjectReducer } = state;
	const { subjectList } = subjectReducer;
	return { subjectList };
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
	getSubjectList: bindActionCreators(getSubjectList, dispatch)
});

export default connect<StateProps, DispatchProps, OwnProps>(mapStateToProps, mapDispatchToProps)(Content);
