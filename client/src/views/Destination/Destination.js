import React from 'react';
import { useParams } from 'react-router-dom';
import bookingData from '../../configs/Booking/Transport.json';
import './destination.css'


export default function Destination() {
    const { id } = useParams();
    const booking = bookingData.find(item => item.id === id);

    if (!booking) {
        return <div>Booking not found</div>;
    }


    return (
        <div>
            <div className="container-fluid p-0 position-relative ">
                <img src={booking.poster} alt="Poster " className="img-fluid w-100 " style={{ height: '570px', filter: 'brightness(70%)' }} />
                <div className="position-absolute top-0 start-50 mt-5 translate-middle-x text-center text-white">
                    <h1 className="mb-4">{booking.tag}</h1>
                    <p>{booking.description}</p>
                </div>
            </div>

            <div className="container col-xxl-12 px-4 py-5  mx-auto">
                <div className="mx-auto d-flex">
                    <div className="col-10 col-sm-8 col-lg-8 border rounded-2 p-3">
                        <h2>{booking.title}</h2>
                        <p>{booking.description}</p>
                        <p>Booking ID: {booking.id}</p>
                    </div>
                    <div>
                        <img src={booking.img} alt="Transport" className="img-fluid rounded-2 border" />
                    </div>
                </div>
            </div>

        </div>
    );
}