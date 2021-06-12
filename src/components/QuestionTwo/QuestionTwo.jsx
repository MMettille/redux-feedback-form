import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {useHistory} from 'react-router-dom';

import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

function QuestionTwo(props){

    const [value, setValue] = useState(0);
    
    const dispatch = useDispatch();
    const history = useHistory('');

    const handleChange = (event) => {
        if (value === 0){
            window.location.reload()
        } else {
        event.preventDefault();
        dispatch({type: 'ADD_UNDERSTANDING', payload: 
            value
        })
        setValue(0)
        history.push('/questions/QuestionThree')
        }
    };

    return(
        <div className="Question-container">
            <Box component="fieldset" mb={3} borderColor="transparent">
                <Typography component="legend">How well do you understand the material?</Typography>
                <Rating
                    value={value}
                    name="understanding-rating"
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

export default QuestionTwo;