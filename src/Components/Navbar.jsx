import React, { useState } from 'react'
import logostavya from './Logos/logo3.png'
import { Link } from "react-router-dom"
import MenuTwoToneIcon from '@mui/icons-material/MenuTwoTone';

export default function Navbar() {
    const [menu, setmenu] = useState(false)

    const handle = () => {
        console.log("handling")
        setmenu(!menu)
    }

    return (
        <>
            <div className="container-fluid header mt-2">
                <div className="row headerrow justify-content-sm-around justify-content-between align-items-center  pt-0">
                    <div className="col-3 left"><img src={logostavya} alt="" /></div>
                    <div className="col-lg-6 col-md-7 bg right d-flex justify-content-md-between justify-content-end align-items-center pt-2 text-center mx-0 px-0 mt-0  d-md-inline d-none">

                        <Link className='bg-transparent text-decoration-none fs-3 text-white d-md-inline d-none L' to="/">Home</Link>
                        <Link className='bg-transparent text-decoration-none fs-3 text-white d-md-inline d-none L' to="/Gallery">Gallery</Link>
                        <Link className='bg-transparent text-decoration-none fs-3 text-white d-md-inline d-none L' to="/About">About</Link>
                        <Link className='bg-transparent text-decoration-none fs-3 text-white d-md-inline d-none L' to="/Feedback">Feedback</Link>

                    </div>

                    <div className="m-0 col-4 text-center menu d-md-none d-inline">
                        <MenuTwoToneIcon className='m-0' sx={{ fontSize: 40, color: 'white' }} onClick={() => handle()} />
                    </div>

                    <div className={menu ? "menubar d-flex flex-column col-3 m-0 py-1 text-white show" : "menubar d-flex flex-column col-3 m-0 py-1 text-white hide"}>
                        <a href="/" className='text-decoration-none text-white fs-5'>Home</a>
                        <a href="/Gallery" className='text-decoration-none text-white fs-5'>Gallery</a>
                        <a href="/About" className='text-decoration-none text-white fs-5'>About</a>
                        <a href="/feedback" className='text-decoration-none text-white fs-5'>Feedback</a>
                    </div>
                </div>
            </div >
        </>
    )
}   
