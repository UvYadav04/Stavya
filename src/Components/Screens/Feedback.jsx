import { React, useState } from 'react'
import Navbar from '../Navbar'
import { useNavigate } from 'react-router-dom'
export default function Feedback() {
    let navigate = useNavigate()
    const [text, settext] = useState("")
    const handlechange = (e) => {
        settext(e.target.value)
    }
    const handleclick = async () => {
        console.log("handleclick")
        settext("uvyadav")
        let response = await fetch("http://localhost:8080/registration/feedback", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ Text: text })
        })
        const json = await response.json()
        if (json.success) {
            alert('Feedback submitted successfully')
            navigate('/')
        }
        else {
            alert(json.message)
        }
    }
    return (
        <div>
            <Navbar />
            <div className="feedback cont7 container mt-5">
                <div className="row justify-content-center ">
                    <div className="col-sm-12 col-10">
                        <textarea name="Text" id="feed" placeholder='write your feedback here' cols="180" rows="10" min="10" onChange={(e) => handlechange(e)}></textarea>
                    </div>
                    <div className="col-3 px-3 button  text-end  mt-3">
                        <button onClick={() => handleclick()}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    )
}