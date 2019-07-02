import React, {Component} from 'react';
import {Control, LocalForm, Errors} from 'react-redux-form';
import { Button, FormGroup, InputGroupAddon, InputGroup } from 'reactstrap';

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);

class SearchForm extends Component{

    handleSubmit(value){
        const org = value.search;    
        this.props.search(org); 
    }

    render(){
        return(
            <div>
               <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                <FormGroup>
                    <br/>
                    <InputGroup>
                        <Control.text model=".search" id="search" name="search" 
                            className="form-control" placeholder="Search your organization's project"
                            validators = {
                                {
                                    required,minLength: minLength(3), maxLength: maxLength(15)
                                }
                            }
                        />
                        
                        <InputGroupAddon addonType="append"><Button color="secondary"><i className="fa fa-search"></i></Button></InputGroupAddon>
                    </InputGroup>
                    <Errors
                            className="text-danger"
                            model=".search"
                            show="touched"
                            messages={{
                                required: 'Required ',
                                minLength: 'Must be greater than 2 characters ',
                                maxLength: 'Must be 15 characters or less '
                            }} 
                        />
                </FormGroup>
            </LocalForm>
            </div>
        );
    };
}

export default SearchForm;