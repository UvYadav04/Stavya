import React from 'react'
export default function Card(props) {
    var sectionStyle = {
        backgroundImage: "url(" + props.image + ")",
    }
    let findclass = () => {
        if (props.position === 'L')
            return "row justify-content-start"
        else if (props.position === 'M')
            return "row justify-content-center"
        else if (props.position === 'R')
            return "row justify-content-end"
    }
    return (

        <>
            <div className="container cont5 mt-4">
                <div className={findclass()}>
                    <div className="col-5 col6" style={sectionStyle} >
                        {/* <img src={props.image} alt="" /> */}
                        <h2 className='mt-2 mb-0'>{props.title}</h2>
                        <p className="mt-0">{props.matter}</p>
                        <div className="row justify-content-around gap-5 mt-2 mb-3">
                            <button className='col-2 '>More</button>
                            <button className='col-2'>register</button>
                        </div>
                    </div>

                </div>
            </div >
        </>
    )
}
