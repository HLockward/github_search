import * as actionTypes from '../actions/actionTypes';

export const Repositories = (
state = {
    isLoading : true, 
    errorMessage : null, 
    repositories : null,
    isStarSortAsc : false
}, 
action) => {
    switch (action.type) {
        case actionTypes.ADD_REPOSITORIES:
            return {...state, isLoading : false, errorMessage : null, isStarSortAsc : false, repositories: action.payload};

        case actionTypes.REPOSITORIES_LOADING:
            return {...state, isLoading : true, errorMessage : null, isStarSortAsc : false, repositories: []};
            
        case actionTypes.REPOSITORIES_FAILED:
            return {...state, isLoading : false, errorMessage : action.payload, isStarSortAsc : false};

        case actionTypes.SORT_REPOSITORIES_STARS:
            return {...state, isLoading : false, errorMessage : null, isStarSortAsc : action.payload, 
                repositories: state.repositories.slice().sort(function(a, b) {
                    var starA = a.stargazers_count,
                        starB = b.stargazers_count
                    if(action.payload){
                        if (starA < starB)
                            return -1
                        if (starA > starB)
                            return 1
                        return 0
                    }else{
                        if (starA > starB)
                            return -1
                        if (starA < starB)
                            return 1
                        return 0
                    }
                    
                })
            }
        default:
          return state;
      }
};
