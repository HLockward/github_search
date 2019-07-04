import {createStore, combineReducers, applyMiddleware} from 'redux';
import { Repositories } from './reducers/repositories';
import { Branches } from './reducers/branches';
import {Organization} from './reducers/organization';
import thunk from 'redux-thunk';
import logger from 'redux-logger';


export const ConfigureStore = () =>{
    const store = createStore(
        combineReducers({
            repositories: Repositories,
            branches: Branches,
            organization : Organization
        }),
        applyMiddleware(thunk, logger)
    );

    return store;
};