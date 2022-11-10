
import axios from 'axios';


const KEY = 'AIzaSyDQLcXVE8vwwx1SeYQ3PTKBbb5nwJub9EE'

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type:'video',
    maxResults: 5,
    key: KEY
  }
});