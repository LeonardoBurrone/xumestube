import { combineReducers } from 'redux';
import busca from './busca-reducer'
import reproduz from './reproducao-reducer';

const rootReducer = combineReducers({
    busca,
    reproduz
})

export default rootReducer;