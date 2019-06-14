import * as React from 'react';
import { NextFunctionComponent, NextContext } from 'next';
import { FunctionComponent, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { State } from '@reducers/index';
// actions
import { userActionConstant } from '@actions/user';
import { subjectActionConstant } from '@actions/subject';
import { questionActionConstant } from '@actions/question';
// components
import Questuon from '@components/question';

type OwnProps = {};

const Subject: NextFunctionComponent<OwnProps> = (props) => {
	console.log(props);
	// store
	const { userReducer, subjectReducer, questionReducer } = useSelector((state: State) => state);
	const { selectedSubject } = subjectReducer;
	// action
	const dispatch = useDispatch();
	// const { name, questionIdList } = selectedSubject;
	console.log(selectedSubject);
	return selectedSubject ? (
		<div>
			<div>HI</div>
			{/* <div>{questionIdList.map((question, index) => <Questuon key={} question={question} />)}</div> */}
		</div>
	) : null;
};

// Subject.getInitialProps = async (context: NextContext) => {
// 	console.log(context);
// 	const { id } = context.query;
// 	return id;
// };

export default Subject;
