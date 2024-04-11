import React, { useState } from 'react';
import axios from 'axios';

function BookingForm(props) {


  const{id}=props;

    const [from, setFrom] = useState('');
    const [to, setTo] = useState('');
    const [date, setDate] = useState('');

    const submitHandler=(event)=>{
      event.preventDefault();

    }

    const bookTrain = async () => {
      console.log("Attempting to book train ticket...");
        try {
          const response = await axios.post(`${process.env.REACT_APP_API_URL}/book-train-ticket`, {
            from:from,
            to:to,
            date:date
          });
          console.log(response.data);
          alert(response.data.message);
          setFrom('');
          setTo('');
          setDate('');
        } catch (error) {
          console.error('Error:', error);
        }
      };
      const bookPlane = async () => {
        console.log("Attempting to book plane ticket...");
        try {
          const response = await axios.post(`${process.env.REACT_APP_API_URL}/book-plane-ticket`, {
            from:from,
            to:to,
            date:date
          });
          console.log(response.data);
          alert(response.data.message);
          setFrom('');
          setTo('');
          setDate('');
        } catch (error) {
          console.error('Error:', error);
        }
      };
        
      const bookTicket = () => {
        console.log("Received id:", id);
    if (id === 1) {
          console.log("Booking plane ticket...");
          bookPlane();
        } else if (id === 2) {
          console.log("Booking train ticket...");
          bookTrain();
        } else {
          console.error('Invalid id');
        }
      };

   
return (
    <div className="container mt-3">
        <div className="row justify-content-center">
            <div className="col-md-11">
                <div className="card border-primary">
                    <div className="card-body">
                        <h5 className="card-title text-center text-info-emphasis">Destination Input</h5>
                        <form onSubmit={submitHandler}>
                            <div className="row mb-3">
                                <div className="col">
                                    <label htmlFor="fromInput" className="form-label">From:</label>
                                    <input type="text" className="form-control height" id="fromInput" placeholder="Enter origin" value={from} onChange={(e) => setFrom(e.target.value)} />
                                </div>
                                <div className="col">
                                    <label htmlFor="toInput" className="form-label">To:</label>
                                    <input type="text" className="form-control height" id="toInput" placeholder="Enter destination" value={to} onChange={(e) => setTo(e.target.value)} />
                                </div>
                                <div className="col">
                                    <label htmlFor="dateInput" className="form-label">Date:</label>
                                    <input type="date" className="form-control height" id="dateInput" value={date} onChange={(e) => setDate(e.target.value)} />
                                </div>
                            </div>
                            <div className='text-center'>
                                <button type="button" className="btn btn-info w-75 text-center" onClick={bookTicket}>Search</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
);
}

export default BookingForm;