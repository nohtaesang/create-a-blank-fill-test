import * as React from 'react';
import { FunctionComponent, useState } from 'react';

type OwnProps = {
	subjectList: Subject[];
};

type SubjectTabProps = OwnProps;

const SubjectTab: FunctionComponent<SubjectTabProps> = (props) => {
	const { subjectList } = props;

	const onClickSubject = (id: number) => {};

	return (
		<div className="subject-tab">
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
