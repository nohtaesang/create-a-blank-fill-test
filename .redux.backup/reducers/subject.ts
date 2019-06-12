import { actionTypes as at } from '../constants/subject';
import { State, SubjectList } from '../models/subject';
import { SubjectActionsTypes } from '../actions/subject';

const initialState: State = { subjectList: [] };

export default (state = initialState, action: SubjectActionsTypes): State => {
	switch (action.type) {
		case at.FETCH_SUBJECT_LIST:
			return state;
		case at.FETCH_SUBJECT_LIST_SUCCESS:
			console.log(typeof action.payload);
			if (typeof action.payload === 'number') return state;
			return { ...state, subjectList: action.payload };
		// else return state;
		default:
			return { ...state };
	}
};
