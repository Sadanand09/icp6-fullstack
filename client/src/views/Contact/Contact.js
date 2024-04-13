import React, { useState } from "react";
import axios from 'axios';
import toast from "react-hot-toast";
import './contact.css'
import om from '../Contact/om.jpg'
import chetna from '../Contact/chetna.jpg'
import harshal from '../Contact/harshal.jpg'
import avinash from '../Contact/avinashj.jpg'
import sadanand from '../Contact/sadanand.jpg'
import vikrant from '../Contact/vikrant.jpg'
import ph from '../Contact/ph.jpg'
// import user from '../Contact/user.png'
import user from "./user.jpg"
import facebook from '../Contact/facebook.png'
import twitter from '../Contact/twitter.png'
import team from '../Contact/team.png'
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Features from "../../components/Features/Features";
// import



export default function ContactUs() {

    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await axios.post(`${process.env.REACT_APP_API_URL}/contact`, {
            name, phone, email, message
        });

        toast.success(response.data.message);
    };


    return (
        <>
            <Navbar />
            <div className="">
            <div className='container mt-5'>
    <p className='title'>CONTACT US</p>
    <p className='title-text'>Our team of customer care ninjas is ready to hear from you.</p>
    <hr />

    <div className='row justify-content-evenly'>
        <div className='col-lg-5 col-md-6 col-sm-12'>
            <div className='text-start'>
                <p className='heading'>Reach out to us!</p>
                <p className='description'>Ready to hear from You💌</p>
                <form>
                    <input type='text' placeholder='Enter your name' className='input-1 rounded' onChange={(e) => setName(e.target.value)} />
                    <input type='text' placeholder='Enter your email' className='input-2 rounded mt-3' onChange={(e) => setEmail(e.target.value)} />
                    <input type='text' placeholder='Enter your contact no' className='input-3 rounded mt-3' onChange={(e) => setPhone(e.target.value)} />
                    <input type='text' placeholder='Enter your message' className='input-4 rounded mt-3' onChange={(e) => setMessage(e.target.value)} />
                    <button type="button" onClick={handleSubmit} className="btn btn-outline-info btn-md mt-3">Submit</button>
                </form>
            </div>
        </div>

        <div className='col-lg-5 col-md-6 col-sm-12'>
            <p className='heading-1'>Customer Care</p>
            <p className="description-1">Our team of customer care ninjas is ready to hear from you.</p>

            <div className='wrapper'>
                <div className='text-box'>
                    <img src={om} alt='Om' className='user-1' />
                    <div className="">

                    <h6>Om nandurkar</h6>
                    <p>Customer Care<br />+91 **********14</p>
                    </div>
                </div>

                <div className='text-box'>
                    <img src={ph} alt='nidhi' className='user-2' />
                    <div className="">

                    <h6>Nidhi jangde</h6>
                    <p>Customer Care<br />+91 **********88</p>
                    </div>
                </div>
            </div>

            <p className='heading-2'>Others ways to connect</p>

            <div className='wrapper'>
                <div className='text-box-3'>
                    <img src={facebook} alt='facebook' className='user-3' />
                    <p>Be the first on your block get product updates,<br />announcements, news and lots of realiy good content. like us on facebook today!</p>
                </div>

                <div className='text-box-3'>
                    <img src={twitter} alt='twitter' className='user-4' />
                    <p>Where the best tips on conversion optimization, landing<br />pages, content marketing SEO & SEM? follow us on twitter today at!</p>
                </div>
            </div>
        </div>
    </div>
</div>

                <hr></hr>

                <div>
                    <div className="container">
                        <h4 className='about-head text-center mt-4'>About us</h4>

                        <div className='row justify-content-center'>
                            <div className='col-lg-6 col-md-8 col-sm-10'>
                                <div className='text-box-5 text-center'>
                                    <img src={team} alt='team' className='user-5 img-fluid rounded'></img>
                                    <p className="mt-3">
                                        'Travel is the movement of people between distant geographical locations. Travel can be done by foot, bicycle, automobile, train, boat, bus, airplane, ship or other means, with or without luggage, and can be one way or round trip. Travel can also include relatively short stays between successive movements, as in the case of tourism.'
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>


                    <h6 className=' team-title text-center'> OUR TEAM</h6>

                    <div className="card-container">
                        <div className="card-1" >
                            <img src={ph}
                                alt='ph' className='user-6'>
                            </img>
                            <div className="card-body">
                                <h6 className="card-text-1">Nidhi Jangde</h6>
                                <p className="education"> BCA</p>
                                <p className='description-5'>Fullstack Developer</p>
                            </div>
                        </div>

                        <div className="card-1" >
                            <img src={om}
                                alt='om' className='user-6'>
                            </img>
                            <div className="card-body">
                                <h6 className="card-text-1">Om Nandurkar</h6>
                                <p className="education">BE Computer</p>
                                <p className='description-5'>Fullstack Developer</p>
                            </div>
                        </div>

                        <div className="card-1" >
                            <img src={harshal}
                                alt='harshal' className='user-6'>
                            </img>
                            <div className="card-body">
                                <h6 className="card-text-1">Harshal Kawadse</h6>
                                <p className="education">BE IT</p>
                                <p className='description-5'>Fullstack Developer</p>
                            </div>
                        </div>

                        <div className="card-1" >
                            <img src={chetna}
                                alt='chetna' className='user-6'>
                            </img>
                            <div className="card-body">
                                <h6 className="card-text-1">Chetana Bahale</h6>
                                <p className="education">BE IT</p>
                                <p className='description-5'>Fullstack Developer</p>
                            </div>
                        </div>

                        <div className="card-1" >
                            <img src={sadanand}
                                alt='sadanand' className='user-6'>
                            </img>
                            <div className="card-body">
                                <h6 className="card-text-1">Sadanand Gurude</h6>
                                <p className="education">BE entc</p>
                                <p className='description-5'>Fullstack Developer</p>
                            </div>
                        </div>

                        < div className="card-1" >
                            <img src={avinash}
                                alt='avinash' className='user-6'>
                            </img>
                            <div className="card-body">
                                <h6 className="card-text-1">Avinash Jadhav</h6>
                                <p className="education">TE Computer</p>
                                <p className='description-5'>Fullstack Developer</p>
                            </div>
                        </div>

                        < div className="card-1" >
                            <img src={vikrant}
                                alt='avinash' className='user-6'>
                            </img>
                            <div className="card-body">
                                <h6 className="card-text-1">Vikrant Patil</h6>
                                <p className="education">Btech AI</p>
                                <p className='description-5'>Fullstack Developer</p>
                            </div>
                        </div>

                        < div className="card-1" >
                            <img src={user}
                                alt='user' className='user-6'>
                            </img>
                            <div className="card-body">
                                <h6 className="card-text-1">kiran</h6>
                                <p className="education">Btech AI</p>
                                <p className='description-5'>Fullstack Developer</p>
                            </div>
                        </div>


                    </div>
                </div>

                <Features />
            </div>
            <Footer />
        </>

    );
}