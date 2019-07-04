import * as actionTypes from '../actions/actionTypes';

export const Organization = (
state = {
    isLoading : true, 
    errorMessage : null, 
    organization : null
}, 
action) => {
    switch (action.type) {
        case actionTypes.ADD_ORGANIZATION:
            return {...state, isLoading : false, errorMessage : null, organization: action.payload};

        case actionTypes.ORGANIZATION_LOADING:
            return {...state, isLoading : true, errorMessage : null, organization: {}};
            
        case actionTypes.ORGANIZATION_FAILED:
            return {...state, isLoading : false, errorMessage : action.payload};

        default:
          return state;
      }
};
