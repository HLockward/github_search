import React, {Component} from 'react';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import {HOME_URL} from '../shared/baseUrl';

class Header extends Component{
    constructor(props) {
        super(props);
    
        this.state = {
            isNavOpen: false,
            isModalOpen: false
          };
  
        this.toggleNav = this.toggleNav.bind(this);
    }

    toggleNav() {
        this.setState({
          isNavOpen: !this.state.isNavOpen
        });
    }
    
    render() {
        return(
            <div>
                <Navbar dark expand="md">
                    <div className="container">
                        <NavbarToggler onClick={this.toggleNav} />
                        <NavbarBrand className="mr-auto" href={HOME_URL}><img src='assets/images/icon.png' height="40" width="45" alt='git_search' /></NavbarBrand>
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                                <NavItem>
                                    <NavLink className="nav-link"  to='/home'><span className="fa fa-home fa-lg"></span> Home</NavLink>
                                </NavItem>
                            </Nav>  
                        </Collapse>
                    </div>
                </Navbar>
                <Jumbotron>
                    <div className="container">
                        <div className="row row-header">
                            <div className="col-12 col-sm-3">
                                <img src='assets/images/logo.png' height="150" width="200" alt='RD food' />
                            </div>
                            <div className="col-12 col-sm-6">
                                <h1>Github searcher</h1>
                                <p>Find your list of Github projects in a organisation</p>
                            </div>
                        </div>
                    </div>
                </Jumbotron>
                
            </div>
        );
    };
};

export default Header;