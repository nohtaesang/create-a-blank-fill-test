// model
export type Question = {
	id: number;
	subjectId: number;
	order: number;
	text: string;
	selectedIndexes: number[];
};

export type SubjectState = Readonly<{
	subjectList: Question[][];
}>;

// action constants
export const subjectActionTypes = {
	GET_SUBJECT_LIST: 'GET_SUBJECT_LIST',
	GET_SUBJECT_LIST_SUCCESS: 'GET_SUBJECT_LIST_SUCCESS'
};

// action
export const getSubjectList = (ownerId: number) => ({
	type: subjectActionTypes.GET_SUBJECT_LIST,
	payload: ownerId
});

export const getSubjectListSuccess = (subjectList: Question[][]) => ({
	type: subjectActionTypes.GET_SUBJECT_LIST_SUCCESS,
	payload: subjectList
});

export type GetSubjectListType = ReturnType<typeof getSubjectList>;
export type GetSubjectListSuccessType = ReturnType<typeof getSubjectListSuccess>;

export type SubjectActionsTypes = GetSubjectListType | GetSubjectListSuccessType;
