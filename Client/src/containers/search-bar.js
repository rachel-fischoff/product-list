import React from 'react';
import {Component} from 'react';
import { fetchProducts } from '../actions/index';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

//this component is for the search bar
class SearchBar extends Component {

    constructor(props) {
        super(props);
        //sets state to empty 
        this.state = { currentSearch: '' };
    
        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
      }
      //updates state to the input in the search bar
      onInputChange(event) {
        this.setState({ currentSearch: "search=" + event.target.value });
      }
    
      //when you submit your form you fetch products based on the term submitted
      onFormSubmit(event) {
        event.preventDefault();
        
        let currentSearch = this.state.currentSearch

        this.props.fetchProducts(currentSearch);
  
      }


    render () {
        return (

 
          <form onSubmit={this.onFormSubmit} className="input-group col-sm-4" >
              <input 
                placeholder="Search for a product"
                className="form-control"
                value={this.state.term}
                onChange={this.onInputChange}
              />
              <span className="input-group-btn">
                <button type="submit" className="btn btn-secondary">
                  Submit
                </button>
              </span>
            </form> 
  
          );
    }
}


function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchProducts }, dispatch);
}

function mapStateToProps(state) {
return state;
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);