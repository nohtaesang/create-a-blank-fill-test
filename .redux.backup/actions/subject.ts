import { actionTypes as at } from '../constants/subject';
import { SubjectList } from '../models/subject';

export const subjectActions = {
	fetchSubjectList: (ownerId: number) => ({
		type: at.FETCH_SUBJECT_LIST,
		payload: ownerId
	}),
	fetchSubjectListSuccess: (subjectList: SubjectList) => ({
		type: at.FETCH_SUBJECT_LIST_SUCCESS,
		payload: subjectList
	})
};

export type SubjectActionsTypes =
	| ReturnType<typeof subjectActions.fetchSubjectList>
	| ReturnType<typeof subjectActions.fetchSubjectListSuccess>;
