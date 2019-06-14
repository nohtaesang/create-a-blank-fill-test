import * as React from 'react';
import Router from 'next/router';
import { FunctionComponent, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { State } from '../redux/reducers';
// actions
import { userActionConstant } from '../redux/actions/user';
import { subjectActionConstant } from '../redux/actions/subject';
// models
import { SubjectType } from '../redux/models/subject';

type OwnProps = {};

type SubjectTabProps = OwnProps;

const SubjectTab: FunctionComponent<SubjectTabProps> = (OwnProps) => {
	// store
	const { subjectReducer } = useSelector((state: State) => state);
	const { subjectList } = subjectReducer;
	// action
	const dispatch = useDispatch();

	const onClickSubject = (subject: SubjectType) => {
		dispatch({ type: subjectActionConstant.SET_SELECTED_SUBJECT, payload: subject });
		Router.push(`/subject/${subject.id}`);
	};

	return (
		<div className="subject-tab">
			{subjectList.map((subject) => {
				const { id, name } = subject;
				return (
					<div key={id} onClick={() => onClickSubject(subject)}>
						{name}
					</div>
				);
			})}
		</div>
	);
};

export default SubjectTab;
