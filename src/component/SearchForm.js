import React, {Component} from 'react';
import {Control, LocalForm, Errors} from 'react-redux-form';
import { Button, FormGroup, InputGroupAddon, InputGroup,ButtonGroup } from 'reactstrap';

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);

function setParams({ query }) {
    const searchParams = new URLSearchParams();
    searchParams.set("query", query || "");
    return searchParams.toString();
  }


class SearchForm extends Component{


    onRadioBtnClick() {
        this.props.repositoriesSort(!this.props.isStarSortAsc);
    }

    handleSubmit(value){
        const org = value.search;
        const url = setParams({ query: org });
        this.props.history.push(`?${url}`);  
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
                <FormGroup>
                    <ButtonGroup>
                        <Button color="warning" onClick={() => this.onRadioBtnClick(1)} active={this.props.isStarSortAsc}>
                            {this.props.isStarSortAsc ? 
                                <div>
                                    <i className="fa fa-star fa-lg"></i>
                                    <i className="fa fa-arrow-down fa-lg"></i>
                                </div>
                            : 
                                <div>
                                    <i className="fa fa-star fa-lg"></i>
                                    <i className="fa fa-arrow-up fa-lg"></i>
                                </div>
                            }
                        </Button>
                    </ButtonGroup>
                </FormGroup>
            </LocalForm>
            
            </div>
        );
    };
}

export default SearchForm;