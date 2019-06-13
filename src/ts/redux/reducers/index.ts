import { combineReducers } from 'redux';
import userReducer from './user';
import { UserStateType } from '../models/user';
import subjectReducer from './subject';
import { SubjectStateType } from '../models/subject';
import questionReducer from './question';
import { QuestionStateType } from '../models/question';

const rootReducer = combineReducers({ userReducer, subjectReducer, questionReducer });

export default rootReducer;

export type State = {
	userReducer: UserStateType;
	subjectReducer: SubjectStateType;
	questionReducer: QuestionStateType;
};
