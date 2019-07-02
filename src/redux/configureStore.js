import {createStore, combineReducers, applyMiddleware} from 'redux';
import { Repositories } from './reducers/repositories';
import thunk from 'redux-thunk';
import logger from 'redux-logger';


export const ConfigureStore = () =>{
    const store = createStore(
        combineReducers({
            repositories: Repositories
        }),
        applyMiddleware(thunk, logger)
    );

    return store;
};