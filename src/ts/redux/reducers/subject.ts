import { subjectActionConstant as sac, SubjectActionType, GetSubjectListTypeSuccess } from '../actions/subject';

import { SubjectStateType } from '../models/subject';

const initialState: SubjectStateType = {
	subjectList: [],
	selectedSubject: null
};

export default (state = initialState, action: SubjectActionType): SubjectStateType => {
	switch (action.type) {
		case sac.GET_SUBJECT_LIST:
			return state;
		case sac.GET_SUBJECT_LIST_SUCCESS:
			return { ...state, subjectList: (action as GetSubjectListTypeSuccess).payload };
		// 쓸 일이 있을까?
		// case sac.GET_SUBJECT:
		// 	return state;
		// case sac.GET_SUBJECT_SUCCESS:
		// 	return { ...state };
		case sac.POST_SUBJECT:
			return state;
		case sac.POST_SUBJECT_SUCCESS:
			return { ...state }; // 이미 프론트에서 추가가 된 상태.
		case sac.PUT_SUBJECT:
			return state;
		case sac.PUT_SUBJECT_SUCCESS:
			return { ...state }; // 이미 프론트에서 수정이 된 상태
		case sac.DELETE_SUBJECT:
			return state;
		case sac.DELETE_SUBJECT_SUCCESS:
			return { ...state }; // 이미 프론트에서 삭제가 된 상태
		default:
			return state;
	}
};
