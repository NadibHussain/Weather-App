import React, { Component } from 'react'
import {Link} from 'react-router-dom'
export default class Search extends Component {
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
      <h1 className="teal-text teal-lighten-2">
      <Link className='teal-text teal-lighten-2' to='/'>Weather App
      </Link>
      </h1>
        <div className="row">
        <div className="input-field col l11 s11 m11 teal-text teal-lighten-2">
        <i className="material-icons prefix">search</i>
          <input onChange={this.handleChange} id="search" type="text" />
          <label htmlFor="search">Search which country</label>
        </div>
        <div className='col l1 s1 m1'>
          
          <button className='btn search ' id='search'>
            <Link className='white-text' to={'/search/'+this.state.search}>
          Search
          </Link>
          </button>
          
        </div>
        </div>
        
      </div>
    )
  }
}
