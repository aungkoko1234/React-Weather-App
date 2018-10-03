import axios from 'axios';

const API_KEY = 'b94166da806566eac20448652c751cf7';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
export const FETCH_WEATHER = 'FETCH_WEATHER';
export function fetchWeather(city){
    const url =`${ROOT_URL}&q=${city},us`;
    const request = axios.get(url);
    
    return {
        type : FETCH_WEATHER,
        payload : request

    };
}