import React from 'react';
import { Card, CardText, CardBody,CardTitle, CardSubtitle} from 'reactstrap';
import { Link } from 'react-router-dom';
import { Loading } from './LoadingComponent';

const DisplayRepositories = (props) => {
    const {items, isLoading, errMess, org} = props;

    const pushHistory = (org,repo) =>{
        props.history.push(`?query=${org}&repo=${repo}`);
        props.getBranches(org,repo);
    }
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
                <h2>{`My organization: ${org}`}</h2>
                {items.map((item) => 
                    <Card key={item.id}>
                        <CardBody>
                        <CardTitle><Link onClick={() => pushHistory(org,item.name)} to={`/branches?query=${org}&repo=${item.name}`}>{item.name}</Link></CardTitle>
                        <CardSubtitle>{`starts ${item.forks}`}</CardSubtitle>
                        <CardSubtitle>{`forks ${item.stargazers_count}`}</CardSubtitle>
                        <CardSubtitle>{`forks ${item.language}`}</CardSubtitle>
                        <CardText>{item.description}</CardText>
                        </CardBody>
                    </Card>
                )}
            </div>
        );
    }       
};

export default DisplayRepositories;