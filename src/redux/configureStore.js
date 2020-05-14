import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Campsites } from './campsites';
import { Comments } from './comments';
import { Partners } from './partners';
import { Promotions } from './promotions';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
//this is only necessary if other reducers aren't imported as above.
//import { Reducer, initialState } from './reducer';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            campsites: Campsites,
            comments: Comments,
            partners: Partners,
            promotions: Promotions
        }),
        applyMiddleware(thunk, logger)
        //These below are only neccessary if reducers aren't imported as above.
        //combineReducers brings in all the other .js reducer files above instead.
        //Reducer,
        //initialState
    );

    return store;
}