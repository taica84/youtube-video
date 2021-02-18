import axios from 'axios';

const KEY ='AIzaSyDM4MHLaZ0fLdx9l2aSp_KywQJLuZX2KT8';


export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params : {
        part: 'snippet',
        maxResult : '5' ,
        key: KEY
    }
});