import React, { useContext } from 'react'
import Navbar from '../Navbar'
import shantanu from '../Screens/OrganisersPhotos/s6.jpg'
import harry from '../Screens/OrganisersPhotos/herry6.jpg'
import Footer from '../Footer'
import { useLocation, useNavigate } from 'react-router-dom'
import { context2 } from '../ContextReducer.jsx'
import corner_ from '../bgimgs/corner_.png'

export default function AboutEvent() {
    // const Event = useContext(context2)
    // console.log('got new data : ', Event)
    let location = useLocation()
    // console.log("in about event")
    const Event = location.state
    // console.log(typeof (Event.Rules))
    let navigate = useNavigate()
    const handleregister = () => {
        navigate('/registration', { state: { members: Event.members, title: Event.title, inter: Event.inter } })
    }
    if (Event.title === "") {
        return (
            <>
                <div className="container cont7 mt-5">
                    <div className="row justify-content-center align-content-center">
                        <div className="col-7">
                            <h1>oops no info at the current moment</h1>
                        </div>
                    </div>
                </div>
            </>)
    }
    else {
        return (
            <>
                <img src={corner_} alt="" className="bgimg11" />
                <Navbar />
                <div className="container description mt-5 cont6 text-white ">
                    <div className="row row5 justify-content-center ">
                        <div className="col-10 text-white">
                            <h2>{Event.title}</h2>
                            <p>{Event.matter1}<span className="d-md-inline d-none"> {Event.matter2}</span> </p>
                        </div>
                    </div>

                    <div className="details row justify-content-around mt-3 q">
                        <div className="col-lg-2 col-md-3 col-sm-5 col-10 detailcol text-center  py-2  mt-sm-none mt-4">
                            <h4>{Event.Date}</h4>
                        </div>
                        <div className="col-lg-2 col-md-3  col-sm-5 col-10 detailcol  text-center  py-2 mt-sm-none mt-4 ">
                            <h4>{Event.Venue}</h4>
                        </div>
                        <div className="col-lg-2 col-md-3  col-sm-5 col-10 detailcol  text-center  py-2  mt-sm-none mt-4">

                            <h4>Prizes worth ₹{Event.Prizes}</h4>
                        </div>
                    </div>
                    <div className="row row6 justify-content-center align-items-center  mt-5  ">
                        <div className="col-10 ">
                            <h2>Organisers</h2>
                        </div>
                        <div className="col-lg-5 col-md-7 col-10 lefto d-flex flex-row  py-3 gap-4 mt-2">
                            <img src={Event.image1} width="45%" className='h-auto' alt="" />
                            <div className="aboutorg mt-4">
                                <h2 className='text-decoration-none fs-sm-2 fs-4'>{Event.org1}</h2>
                                <h4 className='fs-sm-4 fs-5'>Batch : 2022</h4>
                                <h5 className='font-family-none fs-sm-5 fs-6'>Contact: 98XXXXXXXX</h5>

                            </div>
                        </div>
                        <div className="col-lg-5 col-md-7 col-10 lefto d-flex flex-row gap-4 py-3 mt-2">
                            <img src={Event.image2} width="45%" alt="" />
                            <div className="aboutorg mt-4">
                                <h2 className='text-decoration-none fs-sm-2 fs-4'>{Event.org2}</h2>
                                <h4 className='fs-sm-4 fs-5'>Batch : 2022</h4>
                                <h5 className='font-family-none fs-sm-5 fs-6'>Contact: 98XXXXXXXX</h5>
                            </div>
                        </div>
                    </div>

                    <div className="row rules justify-content-center mt-5">
                        <div className="col-10">
                            <h2>Rules:-</h2>
                        </div>
                        <div className="col-md-10 col-11">
                            <ol>
                                {
                                    Event.Rules.map((n, i) => {
                                        return <li key={i}>{n}</li>
                                    })
                                }
                            </ol>
                        </div>
                    </div>
                    <div className="row register justify-content-end mt-4 ">
                        <div className=" text-end col">
                            <button className='fs-5 p-sm-2 p-1' onClick={() => { handleregister() }}>Register Now</button>
                        </div>
                    </div>
                    <div className="row justify-content-center mt-4">
                        <hr className='foothr' />
                        <div className="col text-center py-2">
                            copyright@2024-stavya-iiitvicd
                        </div>
                    </div>
                </div >

            </>
        )
    }
}
