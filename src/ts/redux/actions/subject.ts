import { SubjectType } from '../models/subject';

export const subjectActionConstant = {
	GET_SUBJECT_LIST: 'GET_SUBJECT_LIST',
	GET_SUBJECT_LIST_SUCCESS: 'GET_SUBJECT_LIST_SUCCESS',
	SET_SUBJECT_LIST: 'SET_SUBJECT_LIST',
	GET_SUBJECT: 'GET_SUBJECT',
	GET_SUBJECT_SUCCESS: 'GET_SUBJECT_SUCCESS',
	POST_SUBJECT: 'POST_SUBJECT',
	POST_SUBJECT_SUCCESS: 'POST_SUBJECT_SUCCESS',
	PUT_SUBJECT: 'PUT_SUBJECT',
	PUT_SUBJECT_SUCCESS: 'PUT_SUBJECT_SUCCESS',
	DELETE_SUBJECT: 'DELETE_SUBJECT',
	DELETE_SUBJECT_SUCCESS: 'DELETE_SUBJECT_SUCCESS',
	SET_SELECTED_SUBJECT: 'SET_SELECTED_SUBJECT'
};

export const getSubjectList = (subjectIdList: number[]) => ({
	type: subjectActionConstant.GET_SUBJECT_LIST,
	payload: subjectIdList
});

export const getSubjectListSuccess = (subjectList: SubjectType[]) => ({
	type: subjectActionConstant.GET_SUBJECT_LIST_SUCCESS,
	payload: subjectList
});

export const setSubjectList = (subjectList: SubjectType[]) => ({
	type: subjectActionConstant.SET_SUBJECT_LIST,
	payload: subjectList
});

export const getSubject = (id: number) => ({
	type: subjectActionConstant.GET_SUBJECT,
	payload: id
});

export const getSubjectSuccess = (subject: SubjectType) => ({
	type: subjectActionConstant.GET_SUBJECT_SUCCESS,
	payload: subject
});

export const postSubject = (name: string, questionList: number[]) => ({
	type: subjectActionConstant.POST_SUBJECT,
	payload: { name, questionList }
});

export const postSubjectSuccess = (id: number) => ({
	type: subjectActionConstant.POST_SUBJECT_SUCCESS,
	payload: id
});

export const putSubject = (id: number, name: string, questionList: number[]) => ({
	type: subjectActionConstant.PUT_SUBJECT,
	payload: { id, name, questionList }
});

export const putSubjectSuccess = (id: number) => ({
	type: subjectActionConstant.PUT_SUBJECT_SUCCESS,
	payload: id
});

export const deleteSubject = (id: number) => ({
	type: subjectActionConstant.DELETE_SUBJECT,
	payload: id
});

export const deleteSubjectSuccess = (id: number) => ({
	type: subjectActionConstant.DELETE_SUBJECT_SUCCESS,
	payload: id
});

export const setSelectedSubject = (subject: SubjectType) => ({
	type: subjectActionConstant.SET_SELECTED_SUBJECT,
	payload: subject
});

export type GetSubjectListType = ReturnType<typeof getSubjectList>;
export type GetSubjectListSuccessType = ReturnType<typeof getSubjectListSuccess>;
export type SetSubjectListType = ReturnType<typeof setSubjectList>;
export type GetSubjectType = ReturnType<typeof getSubject>;
export type GetSubjectSuccessType = ReturnType<typeof getSubjectSuccess>;
export type PostSubjectType = ReturnType<typeof postSubject>;
export type PostSubjectSuccessType = ReturnType<typeof postSubjectSuccess>;
export type PutSubjectType = ReturnType<typeof putSubject>;
export type PutSubjectSuccessType = ReturnType<typeof putSubjectSuccess>;
export type DeleteSubjectType = ReturnType<typeof deleteSubject>;
export type DeleteSubjectSuccessType = ReturnType<typeof deleteSubjectSuccess>;
export type SetSelectedSubjectType = ReturnType<typeof setSelectedSubject>;

export type SubjectActionType =
	| GetSubjectListType
	| GetSubjectListSuccessType
	| SetSubjectListType
	| GetSubjectType
	| GetSubjectSuccessType
	| PostSubjectType
	| PostSubjectSuccessType
	| PutSubjectType
	| PutSubjectSuccessType
	| DeleteSubjectType
	| DeleteSubjectSuccessType
	| SetSelectedSubjectType;
