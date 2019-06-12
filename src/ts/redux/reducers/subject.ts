import {
	subjectActionTypes as at,
	SubjectState,
	SubjectActionsTypes,
	GetSubjectListSuccessType
} from '../models/subject';

const initialState: SubjectState = {
	subjectList: []
};

export default (state = initialState, action: SubjectActionsTypes): SubjectState => {
	switch (action.type) {
		case at.GET_SUBJECT_LIST:
			return state;
		case at.GET_SUBJECT_LIST_SUCCESS:
			return { ...state, subjectList: (action as GetSubjectListSuccessType).payload };
		default:
			return state;
	}
};
