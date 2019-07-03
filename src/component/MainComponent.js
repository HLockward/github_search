import React, { Component } from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import {fetchRepositories, repositoriesSort} from '../redux/actions/repositoryAction';
import { Switch, Route, Redirect, withRouter} from 'react-router-dom';
import { connect } from 'react-redux';

const mapStateToProps = state =>{
    return{
        repositories : state.repositories
    }
};

const mapDispatchToProps = (dispatch) => ({
    fetchRepositories: (organization) => {dispatch(fetchRepositories(organization))},
    repositoriesSort: (sortType) => {dispatch(repositoriesSort(sortType))}
});


function getParams(location) {
    const searchParams = new URLSearchParams(location.search);
    return {
      query: searchParams.get("query") || ""
    };
}
  
class Main extends Component {  

    componentDidMount() {
        const { location} = this.props;
        const { query } = getParams(location);
        return this.props.fetchRepositories(query);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.query !== this.props.query) {
          return this.props.fetchRepositories(nextProps.query);
        }
    }

    render() {

        const HomePage = () => {
            const {history, location} = this.props;
            const { query } = getParams(location);
            return(
                <Home 
                search = {this.props.fetchRepositories}
                repositories = {this.props.repositories.repositories}
                isLoading={this.props.repositories.isLoading}
                errMess={this.props.repositories.errorMessage}
                history={history}
                query={query}
                repositoriesSort = {this.props.repositoriesSort}
                isStarSortAsc = {this.props.repositories.isStarSortAsc}
                />
            );
        }
        return (
            <div className="App">
                <Header />
                    <Switch>
                        <Route path='/home' component={HomePage} />
                        <Redirect to="/home" />
                    </Switch>
                <Footer />
            </div>
        );
    }
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Main));
