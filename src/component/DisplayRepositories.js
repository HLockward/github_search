import React from 'react';
import { Card, CardText, CardBody,CardTitle, CardSubtitle, Button} from 'reactstrap';
import { Link } from 'react-router-dom';
import { Loading } from './LoadingComponent';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

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
                <h2>{`My organization: ${props.organization.login}`}</h2>
                {items.map((item) => 
                    <Card key={item.id}>
                        <CardBody>
                        <CardTitle><Link onClick={() => pushHistory(org,item.name)} to={`/branches?query=${org}&repo=${item.name}`}>{item.name}</Link></CardTitle>
                        <CardSubtitle>
                            <FontAwesomeIcon icon="star" style={{ color: 'yellow' }}/>
                            {` starts ${item.forks}`}
                        </CardSubtitle>
                        <CardSubtitle>
                            <FontAwesomeIcon icon="code-branch"/>
                            {` forks ${item.stargazers_count}`}
                        </CardSubtitle>
                        <CardSubtitle>{`forks ${item.language}`}</CardSubtitle>
                        <CardText>{item.description}</CardText>
                        </CardBody>
                    </Card>
                )}
                {items.length < props.organization.public_repos ? 
                <Button color="primary" onClick={() => props.getMoreRepositories(org,props.actualPage + 1)}>
                    Load more repositories
                </Button>
                :
                ''
                }
            </div>
        );
    }       
};

export default DisplayRepositories;