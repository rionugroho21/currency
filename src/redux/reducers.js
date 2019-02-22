import _datas from '../data/datas';
import {combineReducers} from 'redux';

function datas(state = _datas, action) {
    switch (action.type) {
        case 'LOAD_RATES': return action.datas;
        default: return state;
    }
}

function datas2(state = _datas, action) {
    switch (action.type) {
        case 'LOAD_MONEY': return action.resultConvert;
        default: return state;
    }
}

const rootReducer = combineReducers({datas, datas2});

export default rootReducer;