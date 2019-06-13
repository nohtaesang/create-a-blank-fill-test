export type QuestionType = {
	id: number;
	name: string;
	text: string;
	selectedIndexList: number[];
};

export type QuestionStateType = {
	questionList: QuestionType[];
	selectedQuestion: QuestionType | null;
};
