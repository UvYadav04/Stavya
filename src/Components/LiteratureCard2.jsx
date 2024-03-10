import React from 'react'
import { useState } from 'react'
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import Card2 from './Card2'

import p7 from '../Components/photos/p7_.png'
import p8 from '../Components/photos/p8_.png'
import p9 from '../Components/photos/p9_.png'
import p10 from '../Components/photos/p10_.png'
import p11 from '../Components/photos/p11_.png'
export default function Literature() {

    const [clicked, setclicked] = useState(false)

    const handleclick = () => {
        setclicked(!clicked)
    }
    return (
        <>
            <div className="container cont3">
                <div className="row row3">
                    <div className="col-12  heading3">
                        <h1>Literature Events</h1>
                    </div>
                    <hr />
                </div>
                <Card2 title="Avlekha" matter="Avlekha Poetic invites wordsmiths to weave their tales through verse. Join this platform to craft evocative poetry, share emotions, and paint vivid imagery with words. Embrace the power of language, rhyme, and rhythm, creating a tapestry of emotions and experiences that resonate with hearts and minds."
                    image={p7}
                    position="L" />

                <Card2 title="Confero" matter="Welcome to Confero Debates! Engage in thought-provoking discussions on diverse topics in a respectful and dynamic environment. Sharpen your rhetoric skills, present arguments, and embrace the art of persuasion. Join us for an intellectually stimulating experience fostering critical thinking and collaborative discourse." image={p8} position="M" />

                <Card2 title="Open Mic" matter="Join our Open Mic Night! Show off your talent—music, poetry, comedy, any performance art—at a welcoming venue. Embrace the spotlight in a supportive atmosphere, sharing your creativity with an engaged audience. Reserve your spot now for an unforgettable evening of self-expression and community connection.   " image={p9} position="R" />


                <div className={clicked ? "d-none" : "row justify-content-center mt-5 more"}>
                    <div className='col-12 d-flex justify-content-center'>
                        <ArrowCircleDownIcon />
                    </div>
                    <div className='col-12  d-flex justify-content-center'>
                        <button onClick={handleclick} className='text-decoration-none bg-transparent border-none'>2 more</button>
                    </div>
                </div>

                <section className={clicked ? " d - block" : "d-none"}>
                    <Card2 title="Telegram" matter="Join our Telegram Event! Explore a digital gathering where participants connect, share insights, and engage in real-time discussions. Experience seamless interaction, instant updates, and a vibrant community. From live Q&A sessions to exclusive content, be part of an interactive space fostering connections and knowledge sharing." image={p10} position="L" />

                    <Card2 title="Shaswat" matter="Shaswat celebrates the richness of Indian mythology. Immerse yourself in timeless tales, ancient wisdom, and the vibrant tapestry of gods, heroes, and epics. Explore the mystical realms, delve into folklore, and experience the essence of India's cultural heritage through enchanting narratives and mythical legends." image={p11} position="M" />

                </section>

                <div className={clicked ? "row less justify-content-end mt-4" : "d-none"}>
                    <div className="col-1">
                        <button onClick={handleclick} className='fs-5 bg-transparent border-none button2' >Less</button>
                    </div>
                </div>
            </div >
            <hr />
        </>
    )
}
