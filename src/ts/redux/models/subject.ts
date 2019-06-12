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
