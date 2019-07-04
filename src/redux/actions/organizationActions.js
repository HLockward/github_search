import * as ActionTypes from './actionTypes';
import { baseUrl } from '../../shared/baseUrl';

export const fetchOrganization = (organizationName) => (dispatch) => {
    dispatch(organizationLoading(true));

    return fetch(baseUrl +'orgs/'+ organizationName)
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
        .then(organization => dispatch(addOrganization(organization)))
        .catch(error => dispatch(organizationFailed(error.message)));
};

export const organizationLoading = () =>({
    type: ActionTypes.ORGANIZATION_LOADING
});

export const addOrganization = (repositories) =>({
    type: ActionTypes.ADD_ORGANIZATION,
    payload: repositories
});

export const organizationFailed = (errmess) =>({
    type: ActionTypes.ORGANIZATION_FAILED,
    payload: errmess
});
