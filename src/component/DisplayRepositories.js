import React from 'react';
import { Card, CardText, CardBody,CardTitle} from 'reactstrap';
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
                        <CardText>{item.description}</CardText>
                        </CardBody>
                    </Card>
                )}
            </div>
        );
    }       
};

export default DisplayRepositories;