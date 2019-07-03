import * as ActionTypes from './actionTypes';
import { baseUrl } from '../../shared/baseUrl';

export const fetchBranches = (organization,repository) => (dispatch) => {
    dispatch(branchesLoading(true));

    return fetch(`${baseUrl}repos/${organization}/${repository}/branches`)
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
        .then(branches => dispatch(addBranches(branches)))
        .catch(error => dispatch(branchesFailed(error.message)));
};

export const branchesLoading = () =>({
    type: ActionTypes.REPOSITORY_BRANCHES_LOADING
});

export const addBranches = (branches) =>({
    type: ActionTypes.ADD_REPOSITORY_BRANCHES,
    payload: branches
});

export const branchesFailed = (errmess) =>({
    type: ActionTypes.REPOSITORY_BRANCHES_FAILED,
    payload: errmess
});
