import { QuestionType } from '../models/question';

export const questionActionConstant = {
	GET_QUESTION_LIST: 'GET_QUESTION_LIST',
	GET_QUESTION_LIST_SUCCESS: 'GET_QUESTION_LIST_SUCCESS',
	GET_QUESTION: 'GET_QUESTION',
	GET_QUESTION_SUCCESS: 'GET_QUESTION_SUCCESS',
	POST_QUESTION: 'POST_QUESTION',
	POST_QUESTION_SUCCESS: 'POST_QUESTION_SUCCESS',
	PUT_QUESTION: 'PUT_QUESTION',
	PUT_QUESTION_SUCCESS: 'PUT_QUESTION_SUCCESS',
	DELETE_QUESTION: 'DELETE_QUESTION',
	DELETE_QUESTION_SUCCESS: 'DELETE_QUESTION_SUCCESS'
};

export const getQuestionList = (questionIdList: number[]) => ({
	type: questionActionConstant.GET_QUESTION_LIST,
	payload: questionIdList
});

export const getQuestionListSuccess = (questionList: QuestionType[]) => ({
	type: questionActionConstant.GET_QUESTION_LIST_SUCCESS,
	payload: questionList
});

export const getQuestion = (id: number) => ({
	type: questionActionConstant.GET_QUESTION,
	payload: id
});

export const getQuestionSuccess = (question: QuestionType) => ({
	type: questionActionConstant.GET_QUESTION_SUCCESS,
	payload: question
});

export const postQuestion = (name: string, text: string, selectedIndexList: number[]) => ({
	type: questionActionConstant.POST_QUESTION,
	payload: { name, text, selectedIndexList }
});

export const postQuestionSuccess = (id: number) => ({
	type: questionActionConstant.POST_QUESTION_SUCCESS,
	payload: id
});

export const putQuestion = (id: number, name: string, text: string, selectedIndexList: number[]) => ({
	type: questionActionConstant.PUT_QUESTION,
	payload: { id, name, text, selectedIndexList }
});

export const putQuestionSuccess = (id: number) => ({
	type: questionActionConstant.PUT_QUESTION_SUCCESS,
	payload: id
});

export const deleteQuestion = (id: number) => ({
	type: questionActionConstant.DELETE_QUESTION,
	payload: id
});
export const deleteQuestionSuccess = (id: number) => ({
	type: questionActionConstant.DELETE_QUESTION_SUCCESS,
	payload: id
});

export type GetQuestionListType = ReturnType<typeof getQuestionList>;
export type GetQuestionListSuccessType = ReturnType<typeof getQuestionListSuccess>;
export type GetQuestionType = ReturnType<typeof getQuestion>;
export type GetQuestionSuccessType = ReturnType<typeof getQuestionSuccess>;
export type PostQuestionType = ReturnType<typeof postQuestion>;
export type PostQuestionSuccessType = ReturnType<typeof postQuestionSuccess>;
export type PutQuestionType = ReturnType<typeof putQuestion>;
export type PutQuestionSuccessType = ReturnType<typeof putQuestionSuccess>;
export type DeleteQuestionType = ReturnType<typeof deleteQuestion>;
export type DeleteQuestionSuccessType = ReturnType<typeof deleteQuestionSuccess>;

export type QuestionActionType =
	| GetQuestionListType
	| GetQuestionListSuccessType
	| GetQuestionType
	| GetQuestionSuccessType
	| PostQuestionType
	| PostQuestionSuccessType
	| PutQuestionType
	| PutQuestionSuccessType
	| DeleteQuestionType
	| DeleteQuestionSuccessType;
