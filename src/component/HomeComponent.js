import React from 'react';
import SearchForm from './SearchForm';
import DisplayRepositories from './DisplayRepositories';

function Home(props) {
    const { query, history } = props;
    return(
        <div className="container">
            <SearchForm 
                repositoriesSort={props.repositoriesSort}
                search={props.search}
                getOrganization={props.getOrganization} 
                history={history} 
                query={query}
                isStarSortAsc ={props.isStarSortAsc}
                repositoriesFilter = {props.repositoriesFilter}
                language = {props.language}
                languageSelected = {props.languageSelected}
                repositoriesSortByFork ={props.repositoriesSortByFork}
                isForkSortAsc ={props.isForkSortAsc}
                organization={props.organization}
            />
            {props.repositories == null ? '' : 
                <DisplayRepositories 
                    organization={props.organization} 
                    getBranches={props.getBranches} 
                    history={history} 
                    org={query} 
                    items={props.repositories} 
                    isLoading={props.isLoading} 
                    errMess={props.errMess}
                    getMoreRepositories = {props.fetchMoreRepositories}
                    actualPage={props.actualPage}
                />
            }
        </div>
    );
}

export default Home;