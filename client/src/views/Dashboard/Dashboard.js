import React from 'react'
import './dashboard.css'
import Footer from '../../components/Footer/Footer.js'
import user from './../Dashboard/profile.png';
import airline1 from './../Dashboard/airline1.png';
import airline2 from './../Dashboard/airline2.png';
import airline3 from './../Dashboard/airline3.png';
import airline4 from './../Dashboard/airline4.png';
import Arrow from './../Dashboard/arrow.png'

function Dashboard() {
  return (

    <div>

      <div className='user-dashboard'>
        <div className='empty'>

        </div>
        <img src={user} className='profile' />
        <p className='username'>Hii !! Jon..</p>
        <p className='user-detail' >
          <table>
            <tr> <td> Name : <span className='span'>Jon George </span></td></tr>
            <tr><td>Location : <span className='span'>New York</span> </td></tr>
            <tr>Email : <span className='span'> georgejon@gmail.com</span> </tr>
            <tr>Mobile : <span className='span'>+91 8809875642</span> </tr>
            <tr>DOB : <span className='span'> 06/02/2000</span> </tr>
          </table>
        </p>
      </div>
      <div>
        <h4 className='subheading3'>✈ Current Flights ✈</h4>
      </div>
      <div className='flight-card'>
        <p>
          <img src={airline1} className='flight-logo' />
          <h4>Air India</h4>
        </p>
        <p>
          <p className='station-name'>JFK</p>
          <p className='flight-time'>13:00</p>
        </p>
        <p>
          <p className='middle-para'>Air India</p>
          <p className='middle-para'>Non-Stop</p>
          <img src={Arrow}  className='arrow'/>
        </p>
        <p>
          <p className='station-name'>BOM</p>
          <p className='flight-time'>14:20</p>
        </p>
        <p>
          $1300
        </p>
        <button className='cancel-btn' onClick={'CancelFlight'} > ✖ Cancel</button>
      </div>


      <div className='flight-card'>
        <p>
        <img src={airline2} className='flight-logo ' />
        <h4>IndiGo</h4>
        </p>
        <p>
          <p className='station-name'>JFK</p>
          <p className='flight-time'>13:00</p>
        </p>
        <p>
          <p className='middle-para'>IndiGo</p>
          <p className='middle-para'>Non-Stop</p>
          <img src={Arrow}  className='arrow'/>
        </p>
        <p>
          <p className='station-name'>BOM</p>
          <p className='flight-time'>14:20</p>
        </p>
        <p>
          $1450
        </p>
        <button className='cancel-btn' onClick={'CancelFlight'} >✖ Cancel</button>
      </div>


      <div className='flight-card'>
        <p>
        <img src={airline3} className='flight-logo' />
        <h4>Spice jet</h4>
        </p>
        <p>
          <p className='station-name'>JFK</p>
          <p className='flight-time'>13:00</p>
        </p>
        <p>
          <p className='middle-para'>Spice jet</p>
          <p className='middle-para'>Non-Stop</p>
          <img src={Arrow}  className='arrow'/>
        </p>
        <p>
          <p className='station-name'>BOM</p>
          <p className='flight-time'>14:20</p>
        </p>
        <p>
          $2000
        </p>
        <button className='cancel-btn' onClick={'CancelFlight'}> ✖ Cancel</button>
      </div>


      <div className='flight-card'>
        <p>
        <img src={airline4} className='flight-logo' />
        <h4>Vistara</h4>
        </p>
        <p>
          <p className='station-name'>JFK</p>
          <p className='flight-time'>13:00</p>
        </p>
        <p>
          <p className='middle-para'>Vistara</p>
          <p className='middle-para'>Non-Stop</p>
          <img src={Arrow}  className='arrow'/>
        </p>
        <p>
          <p className='station-name'>BOM</p>
          <p className='flight-time'>14:20</p>
        </p>
        <p>
          $2300
        </p>
        <button className='cancel-btn' onClick={'CancelFlight'} > ✖ Cancel</button>
      </div>



      <div className='flight-image'>
        <h1 className='subheading'>Add More Flights..</h1>
        <p className='subheading1'>Travel More And Keep Shinig...</p>
        <button className='Add-btn  '>Book Now</button>
      </div>
      <Footer />
    </div>

  )
}

export default Dashboard
