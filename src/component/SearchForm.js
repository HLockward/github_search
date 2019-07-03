import React, {Component} from 'react';
import {Control, LocalForm, Errors} from 'react-redux-form';
import { Button, FormGroup, InputGroupAddon, InputGroup,Col,Label,Input } from 'reactstrap';

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);

function setParams({ query }) {
    const searchParams = new URLSearchParams();
    searchParams.set("query", query || "");
    return searchParams.toString();
  }


class SearchForm extends Component{


    onBtnClick() {
        this.props.repositoriesSort(!this.props.isStarSortAsc);
    }

    onSelectChange(e){
        this.props.repositoriesFilter(e.target.value);
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
                    <Button className="" color="warning" onClick={() => this.onBtnClick()} active={this.props.isStarSortAsc}>
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

                    <Label for="exampleSelect">Select Language</Label>
                    <Col sm={5}>
                        <Input type="select" name="select" id="exampleSelect" value={this.props.languageSelected} onChange={(e) => this.onSelectChange(e)}>
                            <option>ALL</option>
                            {this.props.language == null ? '' : this.props.language.map(language => <option key={language}>{language}</option>)}
                        </Input>
                    </Col>
                </FormGroup>

            </LocalForm>
            
            </div>
        );
    };
}

export default SearchForm;