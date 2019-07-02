import React from 'react';
import SearchForm from './SearchForm';
import DisplayRepositories from './DisplayRepositories';

function Home(props) {
    return(
        <div className="container">
            <SearchForm search = {props.search}/>
            {props.repositories == null ? '' : <DisplayRepositories items={props.repositories} isLoading={props.isLoading} errMess={props.errMess}/>}
        </div>
    );
}

export default Home;