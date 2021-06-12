import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {useHistory} from 'react-router-dom';

function QuestionThree(){
    const [supportedRating, setSupportedRating] = useState('') 
    
    const dispatch = useDispatch();
    const history = useHistory('');

    const handleChange = (event) => {
        event.preventDefault();
        dispatch({type: 'ADD_SUPPORTED', payload: 
            supportedRating
        })
        setSupportedRating('')
        history.push('/questions/QuestionFour')
      };

    return(
        <div className="Question-container">
            <h3>How well do you feel you are being supported?</h3>
            <form onSubmit={handleChange}>
                <input type="number" 
                onChange={(evt) => setSupportedRating(evt.target.value)}
                />
                <button>Submit</button>
            </form>
        </div>
    )
}

export default QuestionThree;