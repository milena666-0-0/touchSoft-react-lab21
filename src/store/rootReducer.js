import {combineReducers} from 'redux';

import {counterManagerReducer} from '../pages/CountersPage/reducers/index';

export const rootReducer = combineReducers({
    countersManagerPage: counterManagerReducer
});