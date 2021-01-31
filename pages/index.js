import {useEffect} from 'react';
import axios from 'axios'
const baseURL = 'https://dummyapi.io/data/api'
const Home = () => {
  return (
    <div align='center'>
      <h1>This is home page</h1>
      <a href='/post' style={{padding:20}}>Post</a>
      <a href='/calGpa' style={{padding:20}}>GPA Calculate</a>
      <a href='/portfolio' style={{padding:20}}>My Portfolio</a>
    </div>
  )
}
export default Home
