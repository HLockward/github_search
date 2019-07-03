import React from 'react';
import { Card, CardText, CardBody,CardTitle, CardSubtitle} from 'reactstrap';
import { Loading } from './LoadingComponent';

const DisplayRepositories = ({items, isLoading, errMess}) => {
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
                    <Card key={item.id}>
                        <CardBody>
                        <CardTitle>{item.name}</CardTitle>
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