import React from 'react';
import SearchForm from './SearchForm';
import DisplayRepositories from './DisplayRepositories';

function Home(props) {
    const { query, history } = props;
    return(
        <div className="container">
            <SearchForm search = {props.search} history={history} query={query}/>
            <h2>{`My query: ${query}`}</h2>
            {props.repositories == null ? '' : <DisplayRepositories items={props.repositories} isLoading={props.isLoading} errMess={props.errMess}/>}
        </div>
    );
}

export default Home;