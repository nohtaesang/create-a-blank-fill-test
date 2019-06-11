// params
export interface SubjectListParams {
	subjectList: SubjectParams[];
}

export interface SubjectParams {
	subject: QuestionListParams[];
}

export interface QuestionListParams {
	questionList: QuestionParams[];
}

export interface QuestionParams {
	id: number;
	subjectId: number;
	order: number;
	text: string;
	selectedIndexes: number[];
}

// state
export interface SubjectListState {
	subjectList: SubjectParams[];
}

// normal-action
export interface GetSubjectIdList {
	type: string;
	payload: {
		ownerId: number;
	};
}

export interface GetSubjectList {
	type: string;
	payload: {
		subjectId: number[];
	};
}

// saga-action
export interface GetSubjectListSuccess {
	type: string;
	payload: {
		subjectList: SubjectParams[];
	};
}

// export
export type SubjectActionTypes = GetSubjectIdList | GetSubjectList | GetSubjectListSuccess;
