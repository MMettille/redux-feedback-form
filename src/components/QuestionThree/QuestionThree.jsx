import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {useHistory} from 'react-router-dom';

import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';

function QuestionThree(props){
    const [value, setValue] = useState(0);
    
    const dispatch = useDispatch();
    const history = useHistory('');

    const handleChange = (event) => {
        if (value === 0){
            window.location.reload()
        } else {
        event.preventDefault();
        dispatch({type: 'ADD_SUPPORTED', payload: {
            support: value
        }})
        setValue('')
        history.push('/questions/QuestionFour')
        }
    };

    return(
        <div className="question-container">
            <Box  component="fieldset" mb={3} borderColor="transparent">
                <h3>How well are you being supported?</h3>
                <Rating
                    value={value}
                    size="large"
                    name="feeling-rating"
                    onChange={(event, newValue) => {
                        setValue(newValue);
                    }}
                    onClick={props.handleInputChange}
                />
            </Box>
            <div className="btn">
            <Button variant="outlined" size="large" color="primary" onClick={handleChange}>Submit</Button>
            </div>
        </div>
    )
}

export default QuestionThree;