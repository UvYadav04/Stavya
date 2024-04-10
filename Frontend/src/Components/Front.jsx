import React from 'react'
import s1 from '../Components/CarouselPhotos/s1.jpg'
import s2 from '../Components/CarouselPhotos/s2.jpg'
import logo from './Logos/logo3.png'
export default function Front() {
    return (
        <>
            <div className="container cont2 ">
                <div className="row row2 justify-content-sm-between  align-items-start ">

                    <div className="col-md-5 col-10 about text-white">
                        <h1  >Where Tradition Meets Innovation in Symphony of Culture!</h1>
                        <p className='mt-3 text-white'>Stavya - the annual cultural festival of IIITV-ICD, is the first ever inter-institute fest in collaboration with Syaahi literature fest. Translated literally to 'liked by all', which will fill the hearts of students with ardor and enthusiasm. <span className="show1 d-lg-inline d-none">Stavya combines the zeal and desire of the students of IIITV-ICD and across India to showcase and celebrate their amazing cultural and literary talent.</span><span className="show2 d-xl-inline d-none"> Make your college event a memory, and take a basket of reminiscing memories.</span></p>
                    </div>
                    <div className=" col-md-6 col-10 photos">
                        <img className='first d-md-inline d-none ' src={s1} alt="" />
                        <img className='second d-md-inline d-none ' src={s2} alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}
