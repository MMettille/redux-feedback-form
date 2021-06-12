import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {useHistory} from 'react-router-dom';

function QuestionFour(){
    const [comments, setComments] = useState('') 
    
    const dispatch = useDispatch();
    const history = useHistory('');

    const handleChange = (event) => {
        event.preventDefault();
        dispatch({type: 'ADD_COMMENTS', payload: {
            comments: comments
        }})
        setComments('')
        history.push('/SubmitFeedback')
      };
       

    return(
        <div className="Question-container">
            <h3>Would you like to leave any comments?</h3>
            <form onSubmit={handleChange}>
                <input type="text" 
                onChange={(evt) => setComments(evt.target.value)}
                />
                <button>Submit</button>
            </form>
        </div>
    )

}

export default QuestionFour;