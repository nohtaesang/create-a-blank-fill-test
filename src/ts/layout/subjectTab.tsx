import * as React from 'react';
import { FunctionComponent, useState } from 'react';
import { Subject } from '../redux/models/subject';

type OwnProps = {
	subjectList: Subject[];
};

type SubjectTabProps = OwnProps;

const SubjectTab: FunctionComponent<SubjectTabProps> = (props) => {
	const { subjectList } = props;

	const onClickSubject = (id: number) => {};

	return (
		<div>
			{subjectList.map((subject) => {
				const { id, name, questionList } = subject;
				return (
					<div key={id} onClick={() => onClickSubject(id)}>
						{name}
					</div>
				);
			})}
		</div>
	);
};

export default SubjectTab;
