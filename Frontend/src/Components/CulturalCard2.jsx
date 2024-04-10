import React from 'react'
import Card2 from './Card2'
import { useState } from 'react';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import p1 from '../Components/photos/p1_.png'
import p2 from '../Components/photos/p2_.png'
import p3 from '../Components/photos/p3_.png'
import p4 from '../Components/photos/p4_.png'
import p5 from '../Components/photos/p5_.png'
import p6 from '../Components/photos/p6_.png'
export default function CardMaker() {
    const [clicked, setclicked] = useState(false)

    const handleclick = () => {
        setclicked(!clicked)
    }
    return (
        <>
            <div className="container cont3">
                <div className="row row3">
                    <div className="col-12  heading3">
                        <h1>Cultural Events</h1>
                    </div>
                    <hr />
                </div>
                <Card2
                    title="Nrityakala"
                    matter="Nrityakala, an immersive dance celebration, invites you to experience the artistry of diverse movements, cultural narratives, and rhythmic expressions. Join the passionate dancers as they weave stories through the elegant choreography, celebrating tradition and innovation in a captivating dance extravaganza."
                    image={p1}
                    position="L" />

                <Card2
                    title="Pixxelence"
                    matter="Step into Pixellence Photography! Explore the world through a lens, capturing stories in snapshots. Join us for a celebration of the frozen moments, where shutterbugs unite to share the techniques, experiences, and the joy of visual storytelling. Embrace the art of photography in a vibrant, creative atmosphere."
                    image={p3}
                    position="M" />

                <Card2
                    title="Chitrakala"
                    matter="Enter the world of Chitrakala! Explore a canvas of artistic wonders where colors breathe life into imagination. Celebrate diverse strokes, visual narratives, and creative expressions through paintings, sculptures, and mixed media. Experience the vivid tapestry of artistry, unlocking emotions and stories in a vibrant symphony of visuals"
                    image={p2}
                    position="R" />

                <Card2
                    title="Antakshari"
                    matter="Join the Antakshari Extravaganza! Engage in a musical showdown where participants duel with melodies and verses. Sing, compete, and relish in this musical journey, showcasing your knowledge of songs across genres and eras. Experience the joy of spontaneous melodies and lively competition in a harmonious celebration of music."
                    image={p4}
                    position="L" />

                <div className={clicked ? "d-none" : "row justify-content-center mt-5 more"}>
                    <div className='col-12 d-flex justify-content-center'>
                        <ArrowCircleDownIcon />
                    </div>
                    <div className='col-12  d-flex justify-content-center'>
                        <button onClick={handleclick} className='text-decoration-none bg-transparent border-none'>2 more</button>
                    </div>
                </div>


                <section className={clicked ? " d - block" : "d-none"}>
                    <Card2
                        title="TMKOC quiz"
                        matter="Join the Taarak Mehta Ka Ooltah Chashmah quiz! Test your knowledge about Gokuldham Society's quirky residents, their hilarious escapades, and memorable moments. Dive into this fun-filled challenge, relive iconic scenes, and showcase your expertise about this beloved sitcom in a lively, entertaining quiz."
                        image={p5}
                        position="M" />

                    <Card2
                        title="StageCraft"
                        matter="Welcome to Stagecraft! Dive into the world of theatrical artistry, where creativity takes center stage. Join us for a journey through the magic of performance, where actors, directors, and enthusiasts converge. Explore the nuances of storytelling, production, and the captivating allure of the theatrical craft."
                        image={p6}
                        position="R" />
                </section>

                <div className={clicked ? "row less justify-content-end mt-4" : "d-none"}>
                    <div className="col-1">
                        <button onClick={handleclick} className='fs-5 bg-transparent border-none button2' >Less</button>
                    </div>
                </div>
            </div >
        </>
    )
}
