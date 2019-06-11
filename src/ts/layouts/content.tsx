import React, { FunctionComponent, useState } from 'react';
import { connect } from 'react-redux';
import { getSubjectList } from '../redux/actions/subject';
import { SubjectListState, SubjectListParams, GetSubjectList } from '../redux/types/subject';

interface Props {
	subjectList: SubjectListParams;
	getSubjectList: GetSubjectList;
}

const Content: FunctionComponent = () => {
	return (
		<div>
			<button onClick={() => {}}>hi</button>
		</div>
	);
};

const mapStateToProps = (state: SubjectListState) => {
	const { subjectList } = state;
	return subjectList;
};
const mapDispatchToProps = { getSubjectList };

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Content);
