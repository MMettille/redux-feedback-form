import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {useHistory} from 'react-router-dom';

import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

function QuestionThree(props){
    const [value, setValue] = useState(0);
    
    const dispatch = useDispatch();
    const history = useHistory('');

    const handleChange = (event) => {
        event.preventDefault();
        dispatch({type: 'ADD_SUPPORTED', payload: 
            value
        })
        setValue('')
        history.push('/questions/QuestionFour')
      };

    return(
        <div className="Question-container">
            <Box  component="fieldset" mb={3} borderColor="transparent">
                <Typography component="legend">How are you feeling?</Typography>
                <Rating
                    value={value}
                    name="feeling-rating"
                    onChange={(event, newValue) => {
                        setValue(newValue);
                    }}
                    onClick={props.handleInputChange}
                />
            </Box>
            <button onClick={handleChange}>Submit</button>
        </div>
    )
}

export default QuestionThree;