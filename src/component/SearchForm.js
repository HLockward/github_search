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


    onStartBtnClick() {
        this.props.repositoriesSort(!this.props.isStarSortAsc);
    }

    onForkBtnClick() {
        this.props.repositoriesSortByFork(!this.props.isForkSortAsc);
    }

    onSelectChange(e){
        this.props.repositoriesFilter(e.target.value);
    }

    handleSubmit(value){
        const org = value.search;
        const url = setParams({ query: org });
        this.props.history.push(`?${url}`);
        this.props.getOrganization(org);  
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
                {this.props.organization ? 
                    <FormGroup row>
                        <Col md={2}>
                            <Button color="warning" onClick={() => this.onStartBtnClick()} active={this.props.isStarSortAsc}>
                                <i className="fa fa-star fa-lg"></i>
                                {this.props.isStarSortAsc ? <i className="fa fa-arrow-down fa-lg"></i> : <i className="fa fa-arrow-up fa-lg"></i>}
                            </Button>
                        </Col>
                        <Col md={2}>   
                            <Button color="primary" onClick={() => this.onForkBtnClick()} active={this.props.isForkSortAsc}>
                                FORK {this.props.isForkSortAsc ? <i className="fa fa-arrow-down fa-lg"></i> : <i className="fa fa-arrow-up fa-lg"></i> }
                            </Button>
                        </Col>
                        <Col md={2}>
                            <Label className="offset-md-2" for="ddlLanguage">Select Language:</Label>
                        </Col>
                        <Col md={6}>
                            <Input type="select" name="select" id="ddlLanguage" value={this.props.languageSelected} onChange={(e) => this.onSelectChange(e)}>
                                <option>ALL</option>
                                {this.props.language == null ? '' : this.props.language.map(language => <option key={language}>{language}</option>)}
                            </Input>
                        </Col>    
                    </FormGroup>
                :
                ''
                }
            </LocalForm>
            
            </div>
        );
    };
}

export default SearchForm;