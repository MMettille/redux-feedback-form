import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {useHistory} from 'react-router-dom';

function QuestionTwo(){

    const [understandingRating, setUnderstandingRating] = useState('') 
    
    const dispatch = useDispatch();
    const history = useHistory('');

    const handleChange = (event) => {
        event.preventDefault();
        dispatch({type: 'ADD_UNDERSTANDING', payload: {
            understanding: understandingRating
        }})
        setUnderstandingRating('')
        history.push('/questions/QuestionThree')
      };

    return(
        <div className="Question-container">
            <h3>How are you feeling today?</h3>
            <form onSubmit={handleChange}>
                <input type="number" 
                onChange={(evt) => setUnderstandingRating(evt.target.value)}
                />
                <button>Submit</button>
            </form>
        </div>
    )
}

export default QuestionTwo;