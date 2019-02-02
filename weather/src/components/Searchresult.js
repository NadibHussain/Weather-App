import React, { Component } from 'react'

export default class Searchresult extends Component {
  state={
    weathers:[],
    isloaded:false
}
  componentDidMount()
  {  const city=this.props.match.params.city;
      fetch('/search/'+city)
  .then(
      res => res.json())
  .then(list => 
      this.setState(
          {
               weathers: list,
               isloaded:true
          }));
  
  } 
  render() {
    console.log(this.state);
    if(this.state.isloaded && this.state.weathers.length!=0){
      const weathers=this.state.weathers;
      return(
        <ul className='collection'>
           {weathers && weathers.map(weather =>{ 
            //console.log(project.id)   
            var today = new Date();
           var dd = today.getDate();
            if(parseInt(weather.created.slice(8,10), 10)==(dd-1)||parseInt(weather.created.slice(8,10), 10)==dd)  {    
            return(
            <li key={weather.id} className="collection-item avatar">
             <img src={"https://www.metaweather.com/static/img/weather/"+weather.weather_state_abbr+".svg"} alt="" className="circle "/>
             <span className="title">{this.props.match.params.city}</span>
             <p>Temperature: {weather.the_temp} &#x2103;<br/>
                Weather: {weather.weather_state_name}
             </p>
             <span className="time red-text">Date: {weather.created.slice(0,10)} Time: {weather.created.slice(11,19)}</span>
           </li>
            )
          }
        })}
        </ul>
      )
                  
  }
  else if (this.state.isloaded==false){
    return(
      <div>
      <h4 className='teal-text teal-lighten-2'>Loading</h4>
      </div>
    )
  }
  else{
    return(
    <div>
      <h3>No results were found. Try changing the keyword!</h3>
      </div>
    )
  }
}
}
