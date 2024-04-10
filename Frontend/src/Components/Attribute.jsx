import React from 'react'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import ChecklistIcon from '@mui/icons-material/Checklist';
export default function Attribute() {
    return (
        <div className="container ">
            <div className="row justify-content-around align-items-center">
                <div className="att col-3 text-center d-flex flex-column align-items-center justify-content-center">
                    <CalendarMonthIcon sx={{ fontSize: 40 }} className='circle' /> <br />
                    <h1>9+ </h1>
                    <h4>Days</h4>
                </div>
                <div className="att col-3 text-center d-flex flex-column align-items-center justify-content-center">
                    <EmojiEventsIcon sx={{ fontSize: 40 }} className='circle' /> <br />
                    <h1>11</h1>
                    <h4>Events</h4>
                </div>
                <div className="att col-3 text-center d-flex flex-column align-items-center justify-content-center">
                    <ChecklistIcon sx={{ fontSize: 40 }} className='circle' /> <br />
                    <h1>₹53000+</h1>
                    <h4>Prizes</h4>
                </div>
            </div>
        </div>
    )
}
