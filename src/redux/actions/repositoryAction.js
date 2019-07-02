import * as ActionTypes from './actionTypes';
import { baseUrl } from '../../shared/baseUrl';

/** repositories */
export const fetchRepositories = () => (dispatch) => {
    dispatch(repositoriesLoading(true));

    return fetch(baseUrl + 'repositories')
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