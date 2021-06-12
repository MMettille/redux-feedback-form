import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {useHistory} from 'react-router-dom';
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button';

function QuestionFour(){
    const [comments, setComments] = useState('') 
    
    const dispatch = useDispatch();
    const history = useHistory('');

    const handleChange = (event) => {
        event.preventDefault();
        console.log
        dispatch({type: 'ADD_COMMENTS', payload: 
            comments
        })
        setComments('')
        history.push('/SubmitFeedback')
      };
       

    return(
        <div className="question-container">
            <h3>Would you like to leave any comments?</h3>
            <form onSubmit={handleChange} noValidate autoComplete="off">
                <TextField
                    label="Enter Comments Here"
                    multiline
                    variant="outlined"
                    onChange={(evt) => setComments(evt.target.value)}
                />
                <div className="btn">
                <Button type="submit" variant="outlined" size="large" color="primary">Submit</Button>
                </div>
            </form>
        </div>
    )

}

export default QuestionFour;