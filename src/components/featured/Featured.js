import React from 'react'
import "./featured.css"

const Featured = () => {
  return (
    <div className='featured'>
    <div className='featuredItem'>
      <img src='https://images.unsplash.com/photo-1470075801209-17f9ec0cada6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80' height={500} width={500} alt='img' className='featuredImg'></img>
      <div className='featuredTitles'>
        <h1>Dublin</h1>
        <h2>123 Properties</h2>
      </div>
    </div>
      
    <div className='featuredItem'>
      <img src='https://images.unsplash.com/photo-1601579112934-17ac2aa86292?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1168&q=80' height={500} width={500} alt='img' className='featuredImg'></img>
      <div className='featuredTitles'>
        <h1>Austin</h1>
        <h2>523 Properties</h2>
      </div>
    </div>

    <div className='featuredItem'>
      <img src='https://images.unsplash.com/photo-1605825745340-fbf7ce6f0286?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=580&q=80' height={500} width={400} alt='img' className='featuredImg'></img>
      <div className='featuredTitles'>
        <h1>Dublin</h1>
        <h2>524 Properties</h2>
      </div>
    </div>

    </div>
  )
}

export default Featured
