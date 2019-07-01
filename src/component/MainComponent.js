import React, { Component } from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import { Switch, Route, Redirect, withRouter} from 'react-router-dom';
import { connect } from 'react-redux';

const mapStateToProps = state =>{
    return{

    }
};

const mapDispatchToProps = (dispatch) => ({

});

class Main extends Component {  

    componentDidMount(){
       
    }

    render() {

        const HomePage = () => {
            return(
                <Home />
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
