import React, { Component } from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import BranchList from './BranchComponent';
import {fetchRepositories, repositoriesSort,repositoriesSortByFork, repositoriesFilter, fetchMoreRepositories} from '../redux/actions/repositoryAction';
import {fetchBranches} from '../redux/actions/repoBranchActions';
import {fetchOrganization} from '../redux/actions/organizationActions';
import { Switch, Route, Redirect, withRouter} from 'react-router-dom';
import { connect } from 'react-redux';

const mapStateToProps = state =>{
    return{
        repositories : state.repositories,
        branches : state.branches,
        organization : state.organization
    }
};

const mapDispatchToProps = (dispatch) => ({
    fetchRepositories: (organization) => {dispatch(fetchRepositories(organization))},
    repositoriesSort: (sortType) => {dispatch(repositoriesSort(sortType))},
    repositoriesFilter: (filter) => {dispatch(repositoriesFilter(filter))},
    repositoriesSortByFork: (sortType) => {dispatch(repositoriesSortByFork(sortType))},
    fetchBranches: (org, repo) => {dispatch(fetchBranches(org, repo))},
    fetchOrganization: (org) => {dispatch(fetchOrganization(org))},
    fetchMoreRepositories: (org,page) => {dispatch(fetchMoreRepositories(org,page))}
});


function getParams(location) {
    const searchParams = new URLSearchParams(location.search);
    return {
      query: searchParams.get("query") || "",
      repository: searchParams.get("repo") || ""
    };
}
  
class Main extends Component {  

    componentDidMount() {
        const { location} = this.props;
        const { query, repository } = getParams(location);
        if(query){
            this.props.fetchOrganization(query);
            this.props.fetchRepositories(query);
        }
        console.log(repository);
        if(repository){
            this.props.fetchBranches(query, repository);
        }

    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.query !== this.props.query) {
            this.props.fetchOrganization(nextProps.query);
            this.props.fetchRepositories(nextProps.query);
        }
        if (nextProps.query !== this.props.query || nextProps.repository !== this.props.repository) {
            this.props.fetchBranches(this.props.query, this.props.repository);
        }
    }

    render() {

        const HomePage = () => {
            const {history, location} = this.props;
            const { query } = getParams(location);
            return(
                <Home 
                search = {this.props.fetchRepositories}
                getOrganization = {this.props.fetchOrganization}
                organization = {this.props.organization.organization}
                repositories = {this.props.repositories.repositories}
                isLoading={this.props.repositories.isLoading}
                errMess={this.props.repositories.errorMessage}
                history={history}
                query={query}
                repositoriesSort = {this.props.repositoriesSort}
                repositoriesSortByFork = {this.props.repositoriesSortByFork}
                isStarSortAsc = {this.props.repositories.isStarSortAsc}
                isForkSortAsc = {this.props.repositories.isForkSortAsc}
                language = {this.props.repositories.language}
                repositoriesFilter = {this.props.repositoriesFilter}
                languageSelected = {this.props.repositories.languageSelected}
                getBranches = {this.props.fetchBranches}
                fetchMoreRepositories = {this.props.fetchMoreRepositories}
                actualPage = {this.props.repositories.actualPage}
                />
            );
        }

        const BranchPage = () => {
            const {history, location} = this.props;
            const { query, repository } = getParams(location);
            return(
                <BranchList 
                    history={history}
                    query={query}
                    repo={repository}
                    branches = {this.props.branches.branches}
                    isLoading={this.props.branches.isLoading}
                    errMess={this.props.branches.errorMessage}
                />
            );
        }

        return (
            <div className="App">
                <Header />
                    <Switch>
                        <Route path='/home' component={HomePage} />
                        <Route path='/branches' component={BranchPage} />
                        <Redirect to="/home" />
                    </Switch>
                <Footer />
            </div>
        );
    }
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Main));
