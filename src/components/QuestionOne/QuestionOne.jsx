import React from 'react'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {useHistory} from 'react-router-dom';

import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';

function QuestionOne(props){

    const dispatch = useDispatch();
    const history = useHistory('');

    const [value, setValue] = useState(0);

    const handleChange = (event) => {
        if (value === 0){
            window.location.reload()
        } else {
            event.preventDefault();
            console.log(value)
            dispatch({type: 'ADD_FEELING', payload:
            value
            })
            setValue(0)
            history.push('/questions/QuestionTwo')
        }
    };

    return(
        <div className="question-container">
            <Box  component="fieldset" mb={3} borderColor="transparent">
                <h3>How are you feeling?</h3>
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

export default QuestionOne;