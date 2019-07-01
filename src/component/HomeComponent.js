import React from 'react';
import { Button, Form, FormGroup, Label, Input,InputGroupAddon, InputGroup} from 'reactstrap';

function Home(props) {
    return(
        <div className="container">
            <Form>
                <FormGroup>
                    <br/>
                    <InputGroup>
                        <Input type="text" name="search" id="search" placeholder="Search your organization's project" />
                        <InputGroupAddon addonType="append"><Button color="secondary"><i class="fa fa-search"></i></Button></InputGroupAddon>
                    </InputGroup>
                </FormGroup>
            </Form>
        </div>
    );
}

export default Home;