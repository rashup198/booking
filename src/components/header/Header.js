import React from 'react'
import {faBed,faCalendarDays,faCar,faPerson,faPlane,faTaxi } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "./header.css"

const Header = () => {
  return (
    <>
    <div className='header'>
    <div className='headerContainer'>
      <div className='headerList'>
        <div className='headerListItem active'>
        <FontAwesomeIcon icon={faBed} />
        <span>Stays</span>
        </div>
        <div className='headerListItem '>
        <FontAwesomeIcon icon={faPlane}  />
        <span>Flights</span>
        </div>
        <div className='headerListItem'>
        <FontAwesomeIcon icon={faCar} />
        <span>Car rentals</span>
        </div>
        <div className='headerListItem'>
        <FontAwesomeIcon icon={faBed} />
        <span>Attractions</span>
        </div>
        <div className='headerListItem'>
        <FontAwesomeIcon icon={faTaxi} />
        <span>Airport Taxis</span>
        </div>
      </div>
      </div>
      <h1 className='headerTitle'>A lifetime of discount? It's Genius!</h1>
      <p className='headerDesc'>Get rewards for your travels- unlock instant savings of 10% or more with free PandeyBooking account</p>

      <button className='headerBtn'>
      Sign in / Register
      </button>
      <div className='headerSearch'>
            <div className='headerSearchItem'>
            <FontAwesomeIcon icon={faBed} className='headerIcon'/>
            <input type='text' placeholder='Where are you going?' className='headerSearchInput'></input>
            </div>
      </div>
      <div className='headerSearch'>
            <div className='headerSearchItem'>
            <FontAwesomeIcon icon={faCalendarDays} className='headerIcon'/>
            <span className='headerSearchItem'>Date to Date</span>
            </div>
      </div>
      <div className='headerSearch'>
            <div className='headerSearchItem'>
            <FontAwesomeIcon icon={faPerson} className='headerIcon'/>
           <span>2 adults 2 children 1 room</span>
            </div>
      </div>
      
    </div>
    
      </>
  )
}

export default Header
