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
        event.preventDefault();
        console.log(value)
        dispatch({type: 'ADD_FEELING', payload:
            value
        })
        setValue(0)
        history.push('/questions/QuestionTwo')
      };

      
    // const [value, setValue] = React.useState(0);

    return(
        <div className="Question-container">
            <Box  component="fieldset" mb={3} borderColor="transparent">
            <Rating
            value={value}
            name="feeling-rating"
            onChange={(event, newValue) => {
                setValue(newValue);
            }}
            onClick={props.handleInputChange}
            />
      </Box>


            {/* <input
                name="rating"
                type="number"
                value={Rating}
                ref={register}
                hidden
                readOnly
            />
            <Box component="fieldset" borderColor="transparent">
                <Typography component="legend">How Are You Feeling Today?</Typography>
                    <Rating
                        name="rating"
                        value={Rating}
                        precision={1}
                        onChange={(_, value) => {
                            setRating(value);
                          }}
                        onClick={handleChange}
                    />
            
        
      </Box>
            {/* <form onSubmit={handleChange}>
                <input type="number" 
                onChange={(evt) => setFeelingRating(evt.target.value)}
                /> */}
                <button onClick={handleChange}>Submit</button>
            {/* </form> */}
            
        </div>
    )
}

export default QuestionOne;