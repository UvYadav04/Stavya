import React from 'react'
import { useState } from 'react'
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import Card1 from './Card1'

import p7 from '../Components/photos/p7.png'
import p8 from '../Components/photos/p8.png'
import p9 from '../Components/photos/p9.png'
import p10 from '../Components/photos/p10.png'
import p11 from '../Components/photos/p11.png'
import Rules from './Rules';
import l1 from './bgimgs/p6_.png'
import l2 from './bgimgs/p7_.png'
import l3 from './bgimgs/p8_.png'
import l4 from './bgimgs/p9_.png'

export default function Literature() {

    const [clicked, setclicked] = useState(false)

    const handleclick = () => {
        setclicked(!clicked)
    }
    return (
        <>
            <div className="container cont3">
                {/* <img src={l1} alt="" className='bgimg6' /> */}
                {/* <img src={l2} alt="" className='bgimg7' /> */}
                {/* <img src={l3} alt="" className='bgimg8' /> */}
                {/* {
                    clicked ? <img src={l4} alt="" className='bgimg9' /> : null
                } */}
                <div className="row row3">
                    <div className="col-12  heading3">
                        <h1>Literature Events</h1>
                    </div>
                    <hr />
                </div>
                <Card1 title="Avlekha" matter="Dive into the realm of literary beauty with 'Avlekha,' our Hindi Poetry Writing Competition. Illuminate your verses with the richness of Hindi language, weaving tales of emotion and expression. Join fellow poets in this celebration of linguistic artistry, where every entry contributes to the symphony of poetic excellence. Uncover the soul of Hindi poetry!"
                    image={p7}
                    position="L" matter1="An Inter Institute Hindi poetry writing competition for artists across the country. "
                    matter2=""
                    org1="Srijan Sharma"
                    Batch1="2022"
                    image1={p7}
                    org2="Devrikh Jatav"
                    Batch2="2022"
                    image2={p7}
                    Rules={Rules.Avlekha}
                    Date="26th Jan -2nd Feb 2024"
                    Venue="Hybrid"
                    Prizes="7000"
                    members="1"
                    inter="true"

                />

                <Card1 title="Alter Ego" matter="Engage in dynamic discourse at 'Alter Ego,' our riveting Group Discussion Event. Delve into thought-provoking topics, where diverse perspectives collide. Navigate through ideas, challenge assumptions, and showcase your oratory prowess. Join this intellectual exchange, where participants reveal their 'alter egos' in a spirited and enlightening discussion forum."
                    image={p8}
                    position="R" matter1="A Group discussion event for our debate enthusiasts. It will be an event for students of IIITV-ICD ."
                    matter2=""
                    org1="Team"
                    Batch1="2022"
                    image1={p7}
                    org2="Team"
                    Batch2="2022"
                    image2={p7}
                    Rules={Rules.Alterego}
                    Date="30th January 2024"
                    Venue="IIITV-ICD premises"
                    Prizes="3500"
                    members="1"
                    inter="false"

                />
                <Card1 title="Inkit" matter="Step into the world of literary enchantment with 'Inkit,' our captivating English Poetry Writing Competition. Unleash your creativity, craft evocative verses, and share your unique voice with fellow wordsmiths. Join this celebration of poetic expression, where each entry is a brushstroke in the canvas of literary brilliance. Uncover the magic of words!"
                    image={p9}
                    position="L"
                    matter1="An Inter Institute English poetry writing competition for artists across the country."
                    matter2=""
                    org1="Srijan Sharma"
                    Batch1="2022"
                    image1={p7}
                    org2="Devrikh Jatav"
                    Batch2="2022"
                    image2={p7}
                    Rules={Rules.Inkit}
                    Date="26th Jan -2nd Feb 2024"
                    Venue="Hybrid"
                    Prizes="7000"
                    members="1"
                    inter="true"
                />
                <Card1 title="Confero 2.0" matter="Embark on a journey of intellectual sparring at 'Confero,' our compelling Debate Competition. Engage in articulate discourse, where ideas clash and perspectives collide. Participants showcase eloquence, critical thinking, and persuasive prowess. Join this platform of insightful exchange, where minds converge and debates unfold, shaping a tapestry of compelling arguments."
                    image={p9}
                    position="R"
                    matter1="A debate competition for our debate enthusiasts. It will be a two-round debate competition for students of IIITV-ICD ."
                    matter2=""
                    org1="Srijan Sharma"
                    Batch1="2022"
                    image1={p7}
                    org2="Devrikh Jatav"
                    Batch2="2022"
                    image2={p7}
                    Rules={Rules.Inkit}
                    Date="26th,27th January 2024"
                    Venue="IIITV-ICD premises"
                    Prizes="20000"
                    members="2"
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

                <section className={clicked ? " d - block" : "d-none"}>
                    <Card1 title="Shabd Sangam" matter="Experience the harmonious convergence of voices at 'Shabd Sangam,' our Group Poetry Recitation Event. Join a collective of passionate poets as they blend verses, creating a poetic symphony that resonates with emotions. Immerse yourself in the power of shared expression, where each recitation weaves a tapestry of lyrical beauty."
                        image={p10}
                        position="L"
                        matter1="A Team poetry Recitation competition for students of IllTV ICD.Join a collective of passionate poets as they blend verses, creating a poetic symphony that resonates with emotions. "
                        matter2=""
                        org1="Srijan Sharma"
                        Batch1="2022"
                        image1={p7}
                        org2="Devrikh Jatav"
                        Batch2="2022"
                        image2={p7}
                        Rules={Rules.Shabdsangam}
                        Date="29th January 2024"
                        Venue="IIITV-ICD premises"
                        Prizes="3000"
                        members="3"
                        inter="false"

                    />

                    <Card1 title="Shaswat" matter="Shaswat celebrates the richness of Indian mythology. Immerse yourself in timeless tales, ancient wisdom, and the vibrant tapestry of gods, heroes, and epics. Explore the mystical realms, delve into folklore. And experience the essence of India's cultural heritage through enchanting narratives and mythical legends."
                        image={p11}
                        position="R"
                        matter1="It is an offline quiz event on various mythologies across the globe."
                        matter2=""
                        org1="Devrikh Jatav"
                        Batch1="2022"
                        image1={p7}
                        org2="Harshit Soni"
                        Batch2="2022"
                        image2={p7}
                        Rules={Rules.Shaswat}
                        Date="27th,29th January 2024"
                        Venue="IIITV-ICD premises"
                        Prizes="11000"
                        members="2"
                        inter="false"

                    />
                    <Card1 title="Open Mic" matter="Join our Open Mic Night! Show off your talent—music, poetry, comedy, any performance art—at a welcoming venue. Embrace the spotlight in a supportive atmosphere, sharing your creativity with an engaged audience. Reserve your spot now for an unforgettable evening of self-expression and community connection.   "
                        image={p9}
                        position="L"
                        matter1="A fun event for students of IIITV-ICD to create an open environment for our introverted artists. It will be an open stage for poetry recitation, elocution, stand-up, storytelling, etc. "
                        matter2=""
                        org1="Team"
                        Batch1="2022"
                        image1={p7}
                        org2="Team"
                        Batch2="2022"
                        image2={p7}
                        Rules={Rules.Openmic}
                        Date=")1st February 2024"
                        Venue="IIITV-ICD premises"
                        Prizes="20000"
                        members="1"
                        inter="false"

                    />


                </section>

                <div className={clicked ? "row less justify-content-end mt-4" : "d-none"}>
                    <div className="col text-end    ">
                        <button onClick={handleclick} className='fs-5 bg-transparent border-none button2' >Less</button>
                    </div>
                </div>
            </div >
            <hr />
        </>
    )
}
