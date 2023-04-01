import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const FetchData = ({cate}) => {
  const [data, setdata] = useState(null)

  const fetchdata = async() =>{
    await axios.get( cate
      ? `https://newsapi.org/v2/top-headlines?country=in&category=${cate}&apiKey=bdc66f9cac4e46ad8fa2314741629005`
      : "https://newsapi.org/v2/top-headlines?country=in&apiKey=bdc66f9cac4e46ad8fa2314741629005").then((res)=>setdata(res.data.articles));
  };

  useEffect(() => {
   fetchdata();
  }, [cate])
  

  return (
    <div className='container my-4'>
      <h3 style={{textAlign : 'center'}}>TOP HEADLINES</h3>
      <div className='container d-flex justify-content-center align-items-center flex-column my-2' style={{minHeight : '100vh'}}>
        {data 
        ? data.map((items, index)=>(
          <div className='container my-4' style={{width : '90vh', boxShadow : '2px 2px 10px silver', borderRadius : '10px'}}>
          <h5 style={{textAlign : 'justify', marginTop : '20px'}}>{items.title}</h5>
          <div className='container d-flex justify-content-center align-items-center flex-column my-2'>
          <img src = {items.urlToImage} alt='/' className='image-fluid' style={{width:'100%', height :'300px',borderRadius : '10px'}}/>
          </div>
          <p style={{textAlign : 'justify'}}>{items.content}</p>
          <p style={{marginBottom : '20px', textDecoration : 'None'}}><Link to = {items.url} target="blank">View More</Link></p>
          </div>
        )) : "Loading..."}

      </div>
    </div>
  )
}

export default FetchData

