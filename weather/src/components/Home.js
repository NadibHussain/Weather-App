import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Home extends Component {
    state={
        weathers:[],
        isloaded:false
    }
    componentDidMount()
    {   
        fetch('/home')
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
    if(this.state.isloaded){
        const country=this.state.weathers;
        const img1="https://www.metaweather.com/static/img/weather/"+country[0].weather_state_abbr+".svg";
        const img2="https://www.metaweather.com/static/img/weather/"+country[1].weather_state_abbr+".svg";
        const img3="https://www.metaweather.com/static/img/weather/"+country[2].weather_state_abbr+".svg";
        const img4="https://www.metaweather.com/static/img/weather/"+country[3].weather_state_abbr+".svg";
        const img5="https://www.metaweather.com/static/img/weather/"+country[4].weather_state_abbr+".svg";
        const img6="https://www.metaweather.com/static/img/weather/"+country[5].weather_state_abbr+".svg";
        return (
            <ul className="collection">
           <li className="collection-item avatar">
             <img src={img1} alt="" className="circle "/>
             <span className="title">Istanbul</span>
             <p>Temperature: {country[0].the_temp} &#x2103;<br/>
                Max temp: {country[0].max_temp} &#x2103; <br/>
                Min temp: {country[0].min_temp} &#x2103;
             </p>
             
           </li>
           <li className="collection-item avatar">
             <img src={img2} alt="" className="circle "/>
             <span className="title">London</span>
             <p>Temperature: {country[1].the_temp} &#x2103; <br/>
                Max temp: {country[1].max_temp} &#x2103; <br/>
                Min temp: {country[1].min_temp} &#x2103;
             </p> 
           </li>
           <li className="collection-item avatar">
             <img src={img3} alt="" className="circle "/>
             <span className="title">Vancouver</span>
             <p>Temperature: {country[2].the_temp} &#x2103; <br/>
                Max temp: {country[2].max_temp} &#x2103; <br/>
                Min temp: {country[2].min_temp} &#x2103;
             </p>
           </li>
           <li className="collection-item avatar">
             <img src={img4} alt="" className="circle "/>
             <span className="title">Dublin</span>
             <p>Temperature: {country[3].the_temp} &#x2103;<br/>
                Max temp: {country[3].max_temp} &#x2103;<br/>
                Min temp: {country[3].min_temp} &#x2103;
             </p> 
           </li>
           <li className="collection-item avatar">
             <img src={img5} alt="" className="circle "/>
             <span className="title">Helsinki</span>
             <p>Temperature: {country[4].the_temp} &#x2103; <br/>
                Max temp: {country[4].max_temp} &#x2103;<br/>
                Min temp: {country[4].min_temp} &#x2103;
             </p>
           </li>
           <li className="collection-item avatar">
             <img src={img6} alt="" className="circle "/>
             <span className="title">Berlin</span>
             <p>Temperature: {country[5].the_temp} &#x2103; <br/>
                Max temp: {country[5].max_temp} &#x2103;<br/>
                Min temp: {country[5].min_temp} &#x2103;
             </p>
           </li>
         </ul>
           );
    }
    else{
      return(
        <h4 className='teal-text teal-lighten-2'> Still Loading</h4>
      ) ; 
    }
    
  }
}
export default Home;