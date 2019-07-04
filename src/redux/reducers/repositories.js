import * as actionTypes from '../actions/actionTypes';

export const Repositories = (
state = {
    isLoading : true, 
    errorMessage : null, 
    repositories : null,
    isStarSortAsc : false,
    isForkSortAsc : false,
    language : [],
    originalRepositories : null,
    languageSelected : 'ALL'
}, 
action) => {
    switch (action.type) {
        case actionTypes.ADD_REPOSITORIES:
            return {...state, isLoading : false, errorMessage : null, isStarSortAsc : false, isForkSortAsc : false, repositories: action.payload,
                originalRepositories: action.payload, 
                language: [...new Set(action.payload.map(x => x.language))]};

        case actionTypes.REPOSITORIES_LOADING:
            return {...state, isLoading : true, errorMessage : null, isStarSortAsc : false,  repositories: []};
            
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
            };
        case actionTypes.SORT_REPOSITORIES_FORK:
            return {...state, isLoading : false, errorMessage : null, isForkSortAsc : action.payload, 
                repositories: state.repositories.slice().sort(function(a, b) {
                    var starA = a.forks_count,
                        starB = b.forks_count;
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
        };
        case actionTypes.FILTER_REPOSITORIES_LANGUAGE:
            return {...state, isLoading : false, errorMessage : null, languageSelected : action.payload,
                repositories: action.payload === 'ALL' ? state.originalRepositories : state.originalRepositories.filter(r => r.language === action.payload)
            };    
        default:
          return state;
      }
};
