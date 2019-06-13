import { questionActionConstant as qac, QuestionActionType, GetQuestionListSuccessType } from '../actions/question';
import { QuestionStateType } from '../models/question';

const initialState: QuestionStateType = {
	questionList: [],
	selectedQuestion: null
};

export default (state = initialState, action: QuestionActionType): QuestionStateType => {
	switch (action.type) {
		case qac.GET_QUESTION_LIST:
			return state;
		case qac.GET_QUESTION_LIST_SUCCESS:
			return { ...state, questionList: (action as GetQuestionListSuccessType).payload };

		default:
			return state;
	}
};
