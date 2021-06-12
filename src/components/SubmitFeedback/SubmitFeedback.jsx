import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom';
import axios from 'axios';

function SubmitFeedback(){

    const history = useHistory();
    const dispatch = useDispatch();

    // reducers
    const feeling = useSelector(store => store.feelingRating);
    console.log(feeling)
    return(
        <>
            <button>clickme</button>
        </>
    )
}

export default SubmitFeedback;