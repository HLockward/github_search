import * as ActionTypes from './actionTypes';
import { baseUrl } from '../../shared/baseUrl';

/** repositories */
export const fetchRepositories = (organization) => (dispatch) => {
    dispatch(repositoriesLoading(true));

    return fetch(baseUrl +'orgs/'+ organization +'/repos')
        .then(response => {
            if(response.ok){
                return response;
            }else{
                var error = new Error(`Error ${response.status}: ${response.statusText}`);
                error.response = response;
                throw error;
            }
        }, error =>{
            var errmess = new Error(error.message);
            throw errmess;
        })
        .then(response => response.json())
        .then(repositories => dispatch(addRepositories(repositories)))
        .catch(error => dispatch(repositoriesFailed(error.message)));
};

export const repositoriesLoading = () =>({
    type: ActionTypes.REPOSITORIES_LOADING
});

export const addRepositories = (repositories) =>({
    type: ActionTypes.ADD_REPOSITORIES,
    payload: repositories
});

export const repositoriesFailed = (errmess) =>({
    type: ActionTypes.REPOSITORIES_FAILED,
    payload: errmess
});

export const repositoriesSort = (sortType) => (dispatch) => {
    dispatch(repositoriesSortStar(sortType));
};


export const repositoriesSortStar = (sortType) =>({
    type: ActionTypes.SORT_REPOSITORIES_STARS,
    payload: sortType
});

export const repositoriesFilter = (filter) => (dispatch) => {
    dispatch(repositoriesFilterLanguage(filter));
};


export const repositoriesFilterLanguage = (filterLanguage) =>({
    type: ActionTypes.FILTER_REPOSITORIES_LANGUAGE,
    payload: filterLanguage
});