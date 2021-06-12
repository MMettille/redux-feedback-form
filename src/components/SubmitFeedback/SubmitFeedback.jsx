import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom';
import axios from 'axios';

function SubmitFeedback(){

    const history = useHistory();
    const dispatch = useDispatch();

    // reducers
    const feeling = useSelector(store => store.feelingRating);
    const understanding = useSelector(store => store.understandingRating);
    const support = useSelector(store => store.supportedRating);
    const comments = useSelector(store => store.comments);

    return(
        <>
        <h2>Your Feedback</h2>
        <p>{feeling.feeling}</p>
        <p>{understanding.understanding}</p>
        <p>{support.support}</p>
        <p>{comments.comments}</p>
        
    </>
    )
}

export default SubmitFeedback;