import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {useHistory} from 'react-router-dom';

function QuestionTwo(){

    const [understandingRating, setUnderstandingRating] = useState('') 
    
    const dispatch = useDispatch();
    const history = useHistory('');

    const handleChange = (event) => {
        event.preventDefault();
        dispatch({type: 'ADD_UNDERSTANDING', payload: 
            understandingRating
        })
        setUnderstandingRating('')
        history.push('/questions/QuestionThree')
      };

    return(
        <div className="Question-container">
            <h3>How well do you understand the material?</h3>
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