import * as actionTypes from '../actions/actionTypes';

export const Repositories = (
state = {
    isLoading : true, 
    errorMessage : null, 
    repositories : []
}, 
action) => {
    switch (action.type) {
        case actionTypes.ADD_REPOSITORIES:
            return {...state, isLoading : false, errorMessage : null, repositories: action.payload};

        case actionTypes.REPOSITORIES_LOADING:
            return {...state, isLoading : true, errorMessage : null, repositories: []};
            
        case actionTypes.REPOSITORIES_FAILED:
            return {...state, isLoading : false, errorMessage : action.payload}
        default:
          return state;
      }
};
