import React, { Component } from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import {fetchRepositories} from '../redux/actions/repositoryAction';
import { Switch, Route, Redirect, withRouter} from 'react-router-dom';
import { connect } from 'react-redux';

const mapStateToProps = state =>{
    return{
        repositories : state.repositories
    }
};

const mapDispatchToProps = (dispatch) => ({
    fetchRepositories: (organization) => {dispatch(fetchRepositories(organization))}
});

class Main extends Component {  

    componentDidMount(){
       
    }

    render() {

        const HomePage = () => {
            return(
                <Home 
                search = {this.props.fetchRepositories}
                repositories = {this.props.repositories.repositories}
                isLoading={this.props.repositories.isLoading}
                errMess={this.props.repositories.errorMessage}
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
