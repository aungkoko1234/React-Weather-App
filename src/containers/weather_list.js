import React,{Component} from 'react';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';
import {connect} from 'react-redux';


class WeatherList extends Component{
    renderWeather(cityData){
        const name = cityData.city.name;
        const temps = cityData.list.map(weather=> weather.main.temp);
        const pressures = cityData.list.map(weather=>weather.main.pressure);
        const humidities = cityData.list.map(weather=>weather.main.humidity);
        const {lon,lat} = cityData.city.coord;
       
        return(
            <tr key={name}>
                <td><GoogleMap lat={lat} lon={lon}/></td>
                <td><Chart data = {temps} color ="orange" unit="K"/></td>
                <td><Chart data = {pressures} color ="black" unit="hPA"/></td>
                <td><Chart data = {humidities} color ="green" unit="%"/></td>
                
            </tr>
        );
    }
    render(){
        return(
            <table className="table table-hover">
             <thead>
                 <tr>
                     <th>City</th>
                     <th>Temperature(K)</th>
                     <th>Pressure(hPA)</th>
                     <th>Humidity(%)</th>
                 </tr>
             </thead>
             <tbody>
                 {this.props.weather.map(this.renderWeather)}
             </tbody>
            </table>
        );
    }
}
function mapStateToProps({weather}){
 return {weather};//weather = state.weather
}
export default connect(mapStateToProps)(WeatherList);