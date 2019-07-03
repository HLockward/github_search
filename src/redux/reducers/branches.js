import * as actionTypes from '../actions/actionTypes';

export const Branches = (
state = {
    isLoading : true, 
    errorMessage : null, 
    branches : null
}, 
action) => {
    switch (action.type) {
        case actionTypes.ADD_REPOSITORY_BRANCHES:
            return {...state, isLoading : false, errorMessage : null, branches: action.payload};

        case actionTypes.REPOSITORY_BRANCHES_LOADING:
            return {...state, isLoading : true, errorMessage : null, branches: []};
            
        case actionTypes.REPOSITORY_BRANCHES_FAILED:
            return {...state, isLoading : false, errorMessage : action.payload};

        default:
          return state;
      }
};
