import './QuestionOne.css';

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {useHistory} from 'react-router-dom';

function QuestionOne(){

    const [feelingRating, setFeelingRating] = useState('') 
    
    const dispatch = useDispatch();
    const history = useHistory('');

    const handleChange = (event) => {
        event.preventDefault();
        dispatch({type: 'ADD_FEELING', payload: {
            feeling: feelingRating
        }})
        setFeelingRating('')
        history.push('/questions/QuestionTwo')
      };

    return(
        <div className="Question-container">
            <h3>How are you feeling today?</h3>
            <form onSubmit={handleChange}>
                <input type="number" 
                onChange={(evt) => setFeelingRating(evt.target.value)}
                />
                <button>Submit</button>
            </form>
            
        </div>
    )
}

export default QuestionOne;