import React, { useState } from 'react'
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import Card1 from './Card1'
import p1 from '../Components/photos/p1.png'
import p2 from '../Components/photos/p2.png'
import p3 from '../Components/photos/p3.png'
import p4 from '../Components/photos/p4.png'
import p5 from '../Components/photos/p5.png'
import p6 from '../Components/photos/p6.png'
import l1 from './bgimgs/p4_.png'
import l2 from './bgimgs/p2_.png'
import l3 from './bgimgs/p3_.png'
import l5 from './bgimgs/p5_.png'


import naman from '../Components/Screens/OrganisersPhotos/naman2.jpg'
import omni from '../Components/Screens/OrganisersPhotos/omni.jpg'
import sidd from '../Components/Screens/OrganisersPhotos/sidd_2.jpg'
import sumedha from '../Components/Screens/OrganisersPhotos/sumedha.jpg'
import radhe from '../Components/Screens/OrganisersPhotos/radhe2_.jpg'

import rules from './Rules'

export default function Cultural() {
    const [clicked, setclicked] = useState(false)
    const handleclick = () => {
        setclicked(!clicked)
    }
    return (
        <>

            <div className="container cont3 ">

                <div className="row row3">

                    <div className="col-sm-12 col-10 mt-md-0 mt-3 heading3 ">
                        <h1>Cultural Events</h1>
                    </div>
                    <hr className='hr' />
                </div>
                <Card1
                    title="Nrityakala"
                    matter="Nrityakala, an immersive dance celebration, invites you to experience the artistry of diverse movements, cultural narratives, and rhythmic expressions. Join the passionate dancers as they weave stories through the elegant choreography. And celebrating tradition and innovation in a captivating dance extravaganza."
                    image={p1}
                    position="L"
                    matter1="Participants are invited to engage in a single-round performance, in groups of three, embracing the freestyle theme that allows for the exploration of any dance form."
                    matter2=""
                    org1="Sumedha Baghmar"
                    Batch1="2022"
                    image1={sumedha}
                    org2="Diya Bhati"
                    Batch2="2022"
                    image2={p1}
                    Rules={rules.Nrityakala}
                    Date="28th January 2024"
                    Venue="IIITV-ICD premises"
                    Prizes="7100"
                    members="3"
                    inter="false"
                />

                <Card1
                    title="Pixxelence 2.O"
                    matter="Step into Pixellence Photography! Explore the world through a lens, capturing stories in snapshots. Join us for a celebration of the frozen moments, where shutterbugs unite to share the techniques, experiences, and the joy of visual storytelling. Embrace the art of photography in a vibrant, creative atmosphere."
                    image={p3}
                    position="R"
                    matter1="A theme-based photography contest where participants have to submit photographs on the basis of the given theme(s). This will be an inter-institute contest."
                    matter2=""
                    org1="Kamal Meena"
                    Batch1="2022"
                    image1={radhe}
                    org2="Kumar Shantanu"
                    Batch2="2022"
                    image2={p1}
                    Rules={rules.Pixellence}
                    Date="To be announced..."
                    Venue="Upto You"
                    Prizes="7900"
                    members="1"
                    inter="true"
                />


                <Card1
                    title="Chitrakala"
                    matter="Enter the world of Chitrakala! Explore a canvas of artistic wonders where colors breathe life into imagination. Celebrate diverse strokes, visual narratives, and creative expressions through paintings, sculptures, and mixed media. Experience the vivid tapestry of artistry, unlocking emotions and stories in a vibrant symphony of visuals"
                    image={p2}
                    position="L"
                    matter1="This is a theme-based painting event where participants have to draw a painting based on the given themes. This will be an inter-institute competition."
                    matter2=""
                    org1="Nimbalkar Siddharth"
                    Batch1="2022"
                    image1={sidd}
                    org2="Bhargav Gugulothu"
                    Batch2="2022"
                    image2={p1}
                    Rules={rules.Arts}
                    Date="To be announced..."
                    Venue="To be announced..."
                    Prizes="6900"
                    members="1"
                    inter="true"
                />

                <Card1
                    title="Antakshari"
                    matter="Join the Antakshari Extravaganza! Engage in a musical showdown where participants duel with melodies and verses. Sing, compete, and relish in this musical journey, showcasing your knowledge of songs across genres and eras. Experience the joy of spontaneous melodies and lively competition in a harmonious celebration of music."
                    image={p4}
                    position="R"
                    matter1="Antakshari is a musical battle in which the participants will form a team of 3 to participate in the competition. "
                    matter2=""
                    // org1="Naman Singhla Aggrawal Rambilas sharma"
                    org1="Naveen"
                    Batch1="2022"
                    image1={naman}
                    org2="Omni Manwani"
                    Batch2="2022"
                    image2={omni}
                    Rules={rules.Antakshari}
                    Date="26th,30th January 2024"
                    Venue="IIITV-ICD premises"
                    Prizes="6100"
                    members="3"
                    inter="false"
                />

                <div className={clicked ? "d-none" : "row justify-content-center mt-5 more"}>
                    <div className='col-12 d-flex justify-content-center'>
                        <ArrowCircleDownIcon />
                    </div>
                    <div className='col-12  d-flex justify-content-center'>
                        <button onClick={handleclick} className='text-decoration-none bg-transparent border-none'>3 more</button>
                    </div>
                </div>


                <section className={clicked ? "mores d - block" : " mores d-none"}>
                    <Card1
                        title="Bollywood quiz"
                        matter="Step into the glitz and glamour of our Bollywood Quiz Night! Test your knowledge of iconic films, legendary stars, and catchy tunes in a fun-filled trivia extravaganza. Join fellow enthusiasts for a night of friendly competition, nostalgia, and surprises, celebrating the magic of Bollywood cinema. A dazzling, entertaining experience awaits!"
                        image={p5}
                        position="L"
                        matter1="This is a two-round event where participants have to answer the questions based on bollywood movies."
                        matter2=""
                        org1="Ajaydeep"
                        Batch1="2022"
                        image1={p1}
                        org2="Suryansh singh"
                        Batch2="2022"
                        image2={p1}
                        Rules={rules.Bolloywood}
                        Date="26th,27th January 2024"
                        Venue="IIITV-ICD premises"
                        Prizes="5000"
                        members="2"
                        inter="false"
                    />

                    <Card1
                        title="Digital Cartooning"
                        matter="Welcome to Stagecraft! Dive into the world of theatrical artistry, where creativity takes center stage. Join us for a journey through the magic of performance, where actors, directors, and enthusiasts converge. Explore the nuances of storytelling, production, and the captivating allure of the theatrical craft."
                        image={p6}
                        position="R"
                        matter1="This is an online cartoon/comic-based painting event where participants have to create artwork using graphic design software, tablets, or other digital tools. Participants have to showcase their humor and artistic skills by creating original cartoons or various comic strips. This will be an inter — institute online event. "
                        matter2=""
                        org1="Nimbalkar Siddharth"
                        Batch1="2022"
                        image1={sidd}
                        org2="Bhargav Gugulothu"
                        Batch2="2022"
                        image2={p1}
                        Rules={rules.Arts}
                        Date="To be announced..."
                        Venue="To be announced..."
                        Prizes="3900"
                        members="1"
                        inter="true"
                    />

                    <Card1
                        title="Group Skit"
                        matter="Join us for an uproarious skit event! Our talented ensemble of performers takes center stage, delivering a whirlwind of laughter through clever sketches and witty improvisation. Prepare for an evening filled with comedic genius and unpredictable scenarios. Don't miss this laughter-packed event that promises joy and unforgettable moments!"
                        image={p6}
                        position="L"
                        matter1="This revolves around performing character roles opposite to the participants' real characters. Each team will consist of 3 members, and several teams will take part in this event."
                        matter2=""
                        org1="Ajay Deep"
                        Batch1="2022"
                        image1={p1}
                        org2="Suryansh singh"
                        Batch2="2022"
                        image2={p1}
                        Rules={rules.Skit}
                        Date="27th,31st January 2024"
                        Venue="IIITV-ICD premises"
                        Prizes="6100"
                        members="3"
                        inter="false"
                    />
                </section>

                <div className={clicked ? "row less justify-content-end mt-4" : "d-none"}>
                    <div className="col text-end">
                        <button onClick={handleclick} className='fs-5 bg-transparent border-none button2' >Less</button>
                    </div>
                </div>

                {/* <img src={l1} alt="" className="bgimg2" />
                <img src={l2} alt="" className="bgimg3" />
                <img src={l3} alt="" className="bgimg4" /> */}
                {/* {
                    clicked ? <img src={l5} alt="" className="bgimg5" /> : null
                } */}
            </div >
        </>

    )
}
