import React, { Component } from 'react';
import './insert-text-style.css';

export default class SearchBar extends Component {
     constructor(props) {
         super(props);
         this.state = {
             term:''
         }
     }

     onInputChange = (event) => {
         this.setState({term: event.target.value})
     }

     onFormSubmit = (event) => {
         event.preventDefault();

         //Todo:Make sure we call
         //callback from parent component

         this.props.onRequestSubmit(this.state.term)
     }
 

    render() {
        return (
            <div className='insert-text search-bar ui segment' >
                <form className='ui form' onSubmit={this.onFormSubmit} >
                    <div className='field'>
                        <label>Search Video</label>
                        <input 
                          type='text'
                          value={this.state.term}
                          onChange={this.onInputChange}
                          />
                    </div>
                    <button class="positive ui button" onClick={this.onFormSubmit}>
                      
                           Search
                    </button>

                </form>
                
            </div>
        )
    }
}
