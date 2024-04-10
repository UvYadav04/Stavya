import React from 'react'

// import Rules from './Rules'
import { useNavigate } from 'react-router-dom'

export default function CulturalCard(props) {
    let navigate = useNavigate()
    // console.log("in card")
    // console.log(typeof (props.Rules))
    // let titlename = props.title
    const handlemore = () => {
        navigate('/aboutevent', { state: { title: props.title, matter1: props.matter1, matter2: props.matter2, org1: props.org1, batch1: props.batch1, image1: props.image1, org2: props.org2, batch2: props.batch2, image2: props.image2, Rules: props.Rules, Date: props.Date, Venue: props.Venue, Prizes: props.Prizes, members: props.members, inter: props.inter } })
    }

    const handleregister = () => {
        navigate('/registration', { state: { members: props.members, title: props.title, inter: props.inter } })
    }
    return (
        <>
            <div className={props.position === 'L' ? "row row4 justify-content-md-start mt-0 m-md-5 mb-md-0 mb-4" : "row row4 justify-content-md-end mt-0 mt-md-5  mb-md-0 mb-4"}>
                <div className="col-xl-4  col-md-6 col-8 d-sm-flex d-none align-item-center justify-content-start  left ">
                    <img src={props.image} alt="" />
                </div>
                <div className="col-xl-4 col-md-6 col-12 event1">
                    <h2 className='mt-2 ml-4'>{props.title}</h2>
                    <hr className='hr' />
                    <p>{props.matter}</p>
                    <div className="row justify-content-between  mt-4">
                        <div className="col-md-5 col-6">
                            <button className='p-1 mb-3' onClick={() => handlemore()}   >More</button>
                        </div>
                        <div className="col-md-5 col-6">
                            <button className='p-1 mb-3' onClick={() => handleregister()}>Register</button>
                        </div>
                    </div>
                </div>

            </div   >
        </>
    )
}
