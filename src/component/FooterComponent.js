import React from 'react';
import { Link } from 'react-router-dom';

function Footer(props) {
    return(
        <div className="footer">
            <div className="container">
                <div className="row justify-content-center"> 
                    <Link to="/home">
                        <img src='assets/images/logo.png' height="100" width="150" alt='git_search' />
                    </Link>
                </div>
                <br/>
                <div className="row justify-content-center"> 
                    <Link to="/home" className="text-light mr-3">Home</Link>
                </div>
                <br/>
                <div className="row justify-content-center">
                    <div className="text-center">
                        <a className="btn btn-social-icon btn-google mr-3" href="http://google.com/+"><i className="fa fa-google-plus"></i></a>
                        <a className="btn btn-social-icon btn-facebook mr-3" href="http://www.facebook.com/profile.php?id="><i className="fa fa-facebook"></i></a>
                        <a className="btn btn-social-icon btn-linkedin mr-3" href="http://www.linkedin.com/in/"><i className="fa fa-linkedin"></i></a>
                        <a className="btn btn-social-icon btn-twitter mr-3" href="http://twitter.com/"><i className="fa fa-twitter"></i></a>
                        <a className="btn btn-social-icon btn-google mr-3" href="http://youtube.com/"><i className="fa fa-youtube"></i></a>
                        <a className="btn btn-social-icon" href="mailto:"><i className="fa fa-envelope-o"></i></a>
                    </div>
                </div>
                <br/>
                <div className="row justify-content-center">             
                    <div className="col-auto">
                        <p>© Copyright 2019 Github searcher</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;