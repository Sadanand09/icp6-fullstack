import React from 'react'
import './Booking.css'

function Booking() {
  return (
    <div>

      <div className='text-center '>
        <h1 className=' mt-3  fs-3'>PASSENGER DETAILS</h1>
        <span className=''> HDP TO AVG </span>
        <span>| WED, 10 APR 2024 </span>
      </div>

      <hr className=' border-5 '></hr>

      <div className=' ms-3 ' >

        <b>
          HDP xyz EXPRESS(1234)
        </b>

      </div>

      <hr className=' border-5 '></hr>

      <div className='d-flex justify-content-around '>

        <div>
          <b>15:30</b>
          <p>Hadapsar</p>
          <p>(HDP)</p>
          <p>Tue, 09 Apr</p>
        </div>

        <div className=' d-flex flex-column justify-content-around '>
          <p>
            --10h:30m--
          </p>
          <span className=' text-bg-dark  text-light '>
            SLEEPER(SL)
          </span>
        </div>

        <div>
          <b>1:30</b>
          <p>Laturr</p>
          <p>(LTR)</p>
          <p>Wed, 10 Apr</p>
        </div>

      </div>

      


    </div>
  )
}

export default Booking
