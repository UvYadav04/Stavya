import React from 'react'
import Navbar from '../Navbar'
import GalleryCard from '../GalleryCard'

import p1 from '../photos/Gallery/p1.jpg'
import p2 from '../photos/Gallery/p2.jpg'
import p3 from '../photos/Gallery/p3.jpg'
import p4 from '../photos/Gallery/p4.jpg'
import p5 from '../photos/Gallery/p5.jpg'
import p6 from '../photos/Gallery/p6.jpg'
import p7 from '../photos/Gallery/p7.jpg'
import p8 from '../photos/Gallery/p8.jpg'
import p9 from '../photos/Gallery/p9.jpg'
import p10 from '../photos/Gallery/p10.jpg'
import p11 from '../photos/Gallery/p11.jpg'
import p12 from '../photos/Gallery/p12.jpg'
import p13 from '../photos/Gallery/p13.jpg'
import p14 from '../photos/Gallery/p14.jpg'

export default function Gallery() {
    return (
        <>
            <Navbar />
            <div className="container gallery mt-5">
                <div className="row gap-0 justify-content-md-start justify-content-center">
                    <GalleryCard image={p1} />
                    <GalleryCard image={p2} />
                    <GalleryCard image={p3} />
                    <GalleryCard image={p4} />
                    <GalleryCard image={p5} />
                    <GalleryCard image={p6} />
                    <GalleryCard image={p7} />
                    <GalleryCard image={p8} />
                    <GalleryCard image={p9} />
                    <GalleryCard image={p10} />
                    <GalleryCard image={p11} />
                    <GalleryCard image={p12} />
                    <GalleryCard image={p13} />
                    <GalleryCard image={p14} />

                </div>
            </div>
        </>
    )
}
