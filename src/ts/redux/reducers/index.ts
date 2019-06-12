import { combineReducers } from 'redux';
import subjectReducer from './subject';
import { SubjectState } from '../models/subject';

const rootReducer = combineReducers({ subjectReducer });

export default rootReducer;

export type State = {
	subjectReducer: SubjectState;
};
