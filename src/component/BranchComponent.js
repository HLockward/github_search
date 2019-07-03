import React from 'react';
import {Card, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem,CardSubtitle } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Loading } from './LoadingComponent';

const DisplayBranches = (props) => {
    const {items, isLoading, errMess} = props;

    if (isLoading) {
        return(
            <Loading />
        );
    }
    else if (errMess) {
        return(
            <h4>{errMess}</h4>
        );
    }
    else {
        return( 
            
            <div>
                {items.map((item) => 
                    <Card key={item.name}>
                        <CardBody>
                        <CardTitle>{item.name}</CardTitle>
                        <CardSubtitle>{`sha: ${item.commit.sha}`}</CardSubtitle>
                        <CardText>{`commit url: ${item.commit.url}`}</CardText>
                        </CardBody>
                    </Card>
                )}
            </div>
        );
    }       
};

const BranchList = (props) =>{
    console.log(props.branches);
    return(
        <div className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to={`/home?query=${props.query}`}>{props.query}</Link></BreadcrumbItem>
                    <BreadcrumbItem active>{props.repo}</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>{props.repo}</h3>
                    <hr />
                </div>                
            </div>
            <div className="container">
                {props.branches == null ? '' : <DisplayBranches items={props.branches} isLoading={props.Loading} errMess={props.errMess} /> }
            </div>
        </div>
    );  
};

export default BranchList;