import './QuestionOne.css';
import React from 'react'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {useHistory} from 'react-router-dom';

import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

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

export default QuestionOne;