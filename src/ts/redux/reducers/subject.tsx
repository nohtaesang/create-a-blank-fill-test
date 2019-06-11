import { SubjectListState, SubjectActionTypes } from '../types/subject';

const initState: SubjectListState = {
	subjectList: []
};

function subjectReducer(state = initState, action: SubjectActionTypes): SubjectListState {
	switch (action.type) {
		case 'GET_SUBJECT_ID_LIST':
			return state;
		case 'GET_SUBJECT_LIST':
			return state;
		case 'GET_SUBJECTS_LIST_SUCCESS':
			return { ...state, subjectList: action.payload };
		default:
			return state;
	}
}

export default subjectReducer;
