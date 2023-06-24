import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Header from '../../components/header/Header'
import Featured from '../../components/featured/Featured'
import "./home.css"
import PropertyList from '../../components/propertyList/PropertyList'
import FeaturedProperties from '../../components/featuredProperties/FeaturedProperties'


const Home = () => {
  return (
    <div>
      
      <Navbar></Navbar>
      <Header></Header>
      <div className='homeContainer'>
        <Featured></Featured>
      </div>
      <h1 className='homeTitle'>Browse by property type</h1>
      <PropertyList></PropertyList>
      <h1 className='homeTitle'> Homes guests love</h1>
      <FeaturedProperties></FeaturedProperties>
    </div>
  )
}

export default Home
