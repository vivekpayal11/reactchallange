import axios from 'axios';
export const KEY = 'AIzaSyDUcvd08NcSI1_Pme08vDsHK6n8scEJ1N4'; // mention your youtube API key here

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
})
