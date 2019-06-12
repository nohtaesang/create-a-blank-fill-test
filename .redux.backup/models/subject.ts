// interface
export interface Question {
	id: number;
	subjectId: number;
	order: number;
	text: string;
	selectedIndexes: number[];
}
export interface SubjectAction {
	type: string;
	payload?: any;
}

export type State = Readonly<{
	subjectList: SubjectList;
}>;

// type

export type QuestionList = Question[];

export type Subject = QuestionList;

export type SubjectList = Subject[];
