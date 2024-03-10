import React from 'react'
import EmailIcon from '@mui/icons-material/Email';
import logo from './Logos/logo3.png'
export default function Footer() {
    return (
        <div className="container-fluid footer mt-5 ">
            <div className="row pt-3 pb-3 justify-content-md-center justify-content-start">
                <div className=" col-lg-4 col-sm-3 col-md-4 col-10 d-md-inline d-none">
                    <img className='w-75 ' src={logo} alt="" />
                </div>
                <div className="col-lg-6 col-md-8 col-sm-11  text-white college align-self-center">
                    <h1>Indian Institute of Information Technology Vadodara</h1>
                    <h3 >International Campus Diu</h3>
                    <h5 className='d-sm-inline d-none'>Education Hub, Kevdi, Diu(U.T)- 362520 </h5>
                </div>
            </div>
            {/* <hr /> */}
            <div className="row justify-content-center text-white text-align-center ">
                <div className="col-lg-5 col-md-5 col-sm-6 col-10">
                    <EmailIcon /> <p className='d-inline'>literature@diu.iiitvadodara.ac.in</p><br />
                    <EmailIcon /> <p className='d-inline'>cultural@diu.iiitvadodara.ac.in</p>

                </div>
                <div className="col-lg-4 col-md-6 col-sm-6 col-10 mt-sm-0 mt-3 d-sm-inline d-none">
                    <p>All the details hereby published are tentative and is subjected to change according with the uncertanity ahead. None of it conveys institue policy.</p>
                </div>
            </div>
            <hr style={{ "color": "white" }} />
            <div className="row justify-content-center text-white pb-2">
                <div className="col-8 text-center ">
                    <p className='mb-0'> @copyright-2022 Literature and Cultural Committee IIITV-ICD</p>
                </div>
            </div>
        </div>
    )
}
