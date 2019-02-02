import React, { Component } from 'react'
import {Link} from 'react-router-dom'
export default class Searchwoeid extends Component {
    state={
        search:""
    }
    handleChange=(e)=>
    {
  
      this.setState(
      {
        search: e.target.value
      })
      
    }
    render() {
    return (    
      <div>
        <div className="row">
        <div className="input-field col l11 s11 m11 teal-text teal-lighten-2">
        <i className="material-icons prefix">search</i>
          <input onChange={this.handleChange} id="search" type="text" />
          <label htmlFor="search">Search With WoeID</label>
        </div>
        <div className='col l1 s1 m1'>
          
          <button className='btn search ' id='search'>
            <Link className='white-text' to={'/woeid/'+this.state.search}>
          Search
          </Link>
          </button>
          
        </div>
        </div>
        
      </div>
    )
  }
}
