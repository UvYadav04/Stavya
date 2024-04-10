import React, { useEffect, useState } from 'react'
import { useLocation } from "react-router-dom"
import Navbar from '../Components/Navbar'
import { useNavigate } from 'react-router-dom'

// const initialstate = {
//     Event: "",
//     Name: "",
//     Id: 0,
//     Batch: 0,
//     Institute: "",
//     TeamName: "",
//     Member1Name: "",
//     Member1Id: "",
//     Member2Name: "",
//     Member2Id: "",
//     Member3Name: "",
//     Member3Id: "",
//     Contact: 0,
//     Email: "",
//     Date: Date.now()
// }

export default function Form() {

    const [data, setdata] = useState({})
    const [first, setfirst] = useState(false)
    const [second, setsecond] = useState(false)
    const [image, setimage] = useState('')
    // console.log(image)

    let location = useLocation()
    const state = location.state
    const members = parseInt(state.members)


    const interstate = state.inter
    let inter = false

    let navigate = useNavigate()
    if (interstate === "true")
        inter = true
    else
        inter = false
    // console.log(members)
    const handlechange = (e) => {
        const { name, value } = e.target
        setdata((previous) => {
            return { ...previous, [name]: value, Date: Date.now() }
        })
    }

    const handlecheck = (e) => {
        const { id } = e.target
        switch (id) {
            case ("iiit"):
                // console.log("IIITvicd")
                setsecond(() => {
                    return false;
                })
                setfirst(() => {
                    return true;
                })

                break
            case ("other"):
                // console.log("others")
                setfirst(() => {
                    return false;
                })
                setsecond(() => {
                    return true;
                })

                break
            default:
            // console.log("default")
        }
    }

    const handlesubmit = async (e) => {

        // const Form = new FormData()
        // Form.append('image', image)
        let response = await fetch("https://stavyabackendofficial.onrender.com/registration/new", {
            method: "POST",
            enctype: "multipart/form-data",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ data })
        })
        const json = await response.json();
        if (json.success) {
            alert("Successfully registered")
            navigate('/')
        }
        else {
            alert(json.message)
            navigate(0)
        }
    }

    useEffect(() => {
        setdata((prev) => {
            return { ...prev, Event: state.title }
        })
    }, [])


    return (
        <div className='form'>
            <Navbar />
            <h1 className='text-white text-center text-decoration-underline mt-5'>{state.title} Registration Form </h1>

            <div className="container registrationform text-white mt-3">
                <div className="row text-white justify-content-start flex-row">
                    <div className="col-md-8 col-sm-10 col-12">
                        <p className={state.title === "Nrityakala" ? "text-white mt-3 mb-0 note" : "d-none"}>NOTE: In this Event you can fill atleast 1 and atmost 3 members.</p>
                        <p className='text-white note'>NOTE: Fill the form carefully. Once submitted you'll be unable to edit it.</p>
                        <label htmlFor="name">Full Name : </label>
                        <input type="text" id='name' placeholder='as per institute' value={data.Name} onChange={(e) => handlechange(e)} name='Name' required="required" /> <hr />

                        <div className={inter ? "inter" : "d-none"}>
                            <label className='institute' htmlFor="institute">Institute: </label>
                            <label className='radio' htmlFor="iiit">IIITV-ICD: </label>
                            <input className='radio' type="radio" id='iiit' name='college' onChange={(e) => handlecheck(e)} />
                            <label className='radio' htmlFor="other">Other:  </label>
                            <input className='radio' type="radio" id='other' name='college' onChange={(e) => handlecheck(e)} />
                        </div>


                        <div className={(first || !inter) ? "iiit mt-2" : "  d-none"}>
                            <label htmlFor="id">Id: </label>
                            <input type="number" id='id' placeholder='202211020' value={data.Id} onChange={(e) => handlechange(e)} name='Id' />
                            <label htmlFor="batch">Batch: </label>
                            <input type="number" id='batch' value={data.Batch} onChange={(e) => handlechange(e)} name='Batch' />

                        </div>

                        <div className={(second && inter) ? "other mt-2" : " d-none"}>
                            <label htmlFor="collegename">Institute Name : </label>
                            <input type="text" id='collegename' value={data.Institute} onChange={(e) => handlechange(e)} name='Institute' />
                            <label htmlFor="card">Id proof: </label>
                            <input type="file" id='card' onChange={(e) => setimage(e.target.files[0])} name='image' />
                        </div>
                        <hr />

                        <div className={members > 1 ? "Team" : "d-none"}>
                            <label htmlFor="Team">Team name : </label>
                            <input type="text" placeholder='team name' id='team' name='TeamName' value={data.TeamName} onChange={(e) => handlechange(e)} />
                            <hr />
                        </div>

                        <div className={members > 1 ? "m1" : "d-none"}>
                            <label htmlFor="m1">Member1 name : </label>
                            <input type="text" placeholder='member1' id='m1' name='Member1Name' value={data.Member1Name} onChange={(e) => handlechange(e)} />
                            <label htmlFor="id1">Member1 institute ID : </label>
                            <input type="text" placeholder='member1' id='m1' name='Member1Id' value={data.Member1Id} onChange={(e) => handlechange(e)} />
                            <hr />
                        </div>

                        <div className={members >= 2 ? "m2" : "d-none"}>
                            <label htmlFor="m2">Member2 name : </label>
                            <input type="text" placeholder='member2' id='m2' name='Member2Name' value={data.Member2Name} onChange={(e) => handlechange(e)} />
                            <label htmlFor="id2">Member2 institute ID : </label>
                            <input type="text" placeholder='id32' id='id2' name='Member2Id' value={data.Member2Id} onChange={(e) => handlechange(e)} />
                            <hr />
                        </div>

                        <div className={members >= 3 ? "m3" : "d-none"}>
                            <label htmlFor="m3">Member3 name : </label>
                            <input type="text" placeholder='member3' id='m3' name='Member3Name' value={data.Member3Name} onChange={(e) => handlechange(e)} />
                            <label htmlFor="id3">Member3 institute ID : </label>
                            <input type="text" placeholder='id3' id='id3' name='Member3Id' value={data.Member3Id} onChange={(e) => handlechange(e)} />
                            <hr />
                        </div>

                        <label htmlFor="contact">Contact <span className={(members > 1) ? "d-inline" : "d-none"}>(Leader) </span>: </label>
                        <input type="number" id='contact' value={data.Contact} onChange={(e) => handlechange(e)} name='Contact' />
                        <hr />
                        <label htmlFor="email">Email: </label>
                        <input type="email" id='email' placeholder='xyz@gmail.com' value={data.Email} onChange={(e) => handlechange(e)} name='Email' />
                        <hr />
                        <button className='mb-3' onClick={() => handlesubmit()}>Submit</button>

                    </div>
                </div>
            </div >
        </div>
    )
}
