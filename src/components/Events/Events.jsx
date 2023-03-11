import React from 'react'
import NavBar from '../Navbar/NavBar'
import './Events.css'
import general from '../../assets/generalevents.png'
import cultural from '../../assets/culturalevents.png'
import technical from '../../assets/technicalevents.png'
import publicity from '../../assets/publicityevents.png'
import workshops from '../../assets/workshops.png'
const Events = () => {
  return (
    <>
<NavBar/>
        <div className='events-title'>

         EVENTS

        </div>
        <div className='events-lists1'>
         <div className='event-card'>
          <img src={general} alt='general events'/><div class="card-content">
          <h2 class="card-title">GENERAL EVENTS</h2>
     
        </div>
         </div>
         <div className='event-card'>
         <img src={technical} alt='technical'/><div class="card-content">
          <h2 class="card-title">TECHNICAL EVENTS</h2>
     
        </div>
         </div>
         <div className='event-card'>
         <img src={cultural} alt='cultural event'/><div class="card-content">
          <h2 class="card-title">CULTURAL EVENTS</h2>
     
        </div>
         </div>
         </div>
         <div className='events-lists2'>
         <div className='event-card'>
         <img src={publicity} alt='publicity event'/>
         <div class="card-content">
          <h2 class="card-title">PUBLICITY EVENTS</h2>
     
        </div> </div>
         <div className='event-card'>
         <img src={workshops} alt='workshop'/><div class="card-content">
          <h2 class="card-title">WORKSHOPS</h2>
     
        </div>
         </div>
        </div>
      
    </>
  )
}

export default Events