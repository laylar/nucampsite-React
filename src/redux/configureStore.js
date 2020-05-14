import { createStore, combineReducers } from 'redux';
import { Campsites } from './campsites';
import { Comments } from './comments';
import { Partners } from './partners';
import { Promotions } from './promotions';
//this is only necessary if other reducers aren't imported as above.
//import { Reducer, initialState } from './reducer';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            campsites: Campsites,
            comments: Comments,
            partners: Partners,
            promotions: Promotions
        })
        //These below are only neccessary if reducers aren't imported as above.
        //combineReducers brings in all the other .js reducer files above instead.
        //Reducer,
        //initialState
    );

    return store;
};