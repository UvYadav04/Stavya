import React from 'react'
import p1 from './photos/p1.png'
export default function GalleryCard(props) {
    return (
        <>
            <div className="gcard col-xl-3 col-lg-4 col-md-6 col-8  mt-3 text-white mb-3">
                <img src={props.image} width={250} height={300} alt="" />
                <h4>Nrityakala 2024</h4>
            </div>
        </>
    )
}
