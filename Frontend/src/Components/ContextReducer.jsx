import React, { useReducer } from 'react'
import Rules from './Rules'
export const context1 = React.createContext()
export const context2 = React.createContext()


const initialstate = {
    title: "Nrityakala",
    matter: "Nrityakala, an immersive dance celebration, invites you to experience the artistry of diverse movements, cultural narratives, and rhythmic expressions. Join the passionate dancers as they weave stories through the elegant choreography. And celebrating tradition and innovation in a captivating dance extravaganza.",
    position: "L",
    matter1: "Nrityakala, an immersive dance celebration, invites you to experience the artistry of diverse movements, cultural narratives, and rhythmic expressions. Join the passionate dancers as they weave stories through the elegant choreography.",
    matter2: "And celebrating tradition and innovation in a captivating dance extravaganza.",
    org1: "Shantanu Kumar",
    Batch1: "2022",
    org2: "Harry Parsania",
    Batch2: "2022",
    Rules: Rules.nrityakala
}

const reducer = (state, action) => {
    console.log("hitt")
    console.log(action)
    console.log(`Event :  `, state)
    return { ...state, title: action.title, firstmatter: action.firstmatter, secondmatter: action.secondmatter, org1: action.org1, org2: action.org2, batch1: action.batch1, batch2: action.batch2, rules: action.rules }
}

export default function CartProvider({ children }) {
    const [Event, dispatch] = useReducer(reducer, initialstate)
    return (
        <>
            <context1.Provider value={dispatch}  >
                <context2.Provider value={Event}>
                    {children}
                </context2.Provider>
            </context1.Provider ></>
    )
}