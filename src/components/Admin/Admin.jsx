import axios from "axios";
import {useState, useEffect} from "react"

function Admin(){

    useEffect(() => {
        getFeedback();
    })
        
    const [feedback, setFeedback] = useState([]);
    
    const getFeedback = () => {
        axios.get("/feedback")
        .then( (response) => {
            setFeedback(response.data)
        })
        .catch((error) => {
            console.log(`We have a server error`, error);
        });
        console.log(feedback)
    }

    return(
        <>
            {feedback.map((item, i) => (
                <p>{feedback.feeling}</p>
            ))}
        </>
    )
}

export default Admin;