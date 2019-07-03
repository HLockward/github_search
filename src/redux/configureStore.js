import {createStore, combineReducers, applyMiddleware} from 'redux';
import { Repositories } from './reducers/repositories';
import { Branches } from './reducers/branches';
import thunk from 'redux-thunk';
import logger from 'redux-logger';


export const ConfigureStore = () =>{
    const store = createStore(
        combineReducers({
            repositories: Repositories,
            branches: Branches
        }),
        applyMiddleware(thunk, logger)
    );

    return store;
};