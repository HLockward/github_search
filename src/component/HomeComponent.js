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
                history={history} 
                query={query}
                isStarSortAsc ={props.isStarSortAsc}
                repositoriesFilter = {props.repositoriesFilter}
                language = {props.language}
                languageSelected = {props.languageSelected}
                
            />
            <h2>{`My organization: ${query}`}</h2>
            {props.repositories == null ? '' : <DisplayRepositories items={props.repositories} isLoading={props.isLoading} errMess={props.errMess}/>}
        </div>
    );
}

export default Home;