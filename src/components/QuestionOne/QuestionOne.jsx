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
        /* ⬇ Material-ui's rating is a lab feature and is not yet hooked up to a form. In order to require the
        user to input a rating before continuing, I prevented the page from reloading then made an if/else
        statement. If the rating is 0, nothing happens. If it a number between 1-5, the value is dispatched to
        redux and the user is pusghed to the next page.
        */
        event.preventDefault();
        if (value === 0){
            return
        } else {
            dispatch({type: 'ADD_FEELING', payload: 
                value
            })
            // ⬇ Resets the value to 0
            setValue(0)
            // ⬇ Will send user to a new page
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