export type SubjectType = {
	id: number;
	name: string;
	questionIdList: number[];
};

export type SubjectStateType = {
	subjectList: SubjectType[];
	selectedSubject: SubjectType | null;
};
