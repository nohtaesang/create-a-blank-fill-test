import { combineReducers } from 'redux';
import subjectReducer from './subject';

const rootReducer = combineReducers({ subjectReducer });

export default rootReducer;
