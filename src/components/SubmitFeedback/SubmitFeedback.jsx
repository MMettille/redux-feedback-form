import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import swal from 'sweetalert';

import './SubmitFeedback.css'

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

function SubmitFeedback(){

    const history = useHistory();
    const dispatch = useDispatch();

    // reducers
    const userRating = useSelector(store => store.userRating);

    const handleClick = (event) => {
        event.preventDefault()
        swal({
            title: "Are You Sure",
            text: "This will submit your response. There is no undoing this action.",
            icon: "warning",
            dangerMode: true,
            buttons: ["Cancel", "Yes, I am sure."]
        }).then ( (willSubmit)  => {
            if( willSubmit ) {
                axios({
                    method: 'POST',
                    url: '/feedback',
                    data: {
                        feeling: userRating[0],
                        understanding: userRating[1],
                        support: userRating[2],
                        comments: userRating[3]
                    }
                })
                    .then(response => {
                        history.push('/');
                        console.log('response', response)
                        clearRedux();
                    })
                    .catch(error => {
                        console.log('error in post', error);
                    })
                    swal("Your response has been submitted!",{
                        icon: "success",
                    })
            } else {
                swal("Your list is safe!");
            }
        })
    }

    const clearRedux = () => {
        dispatch({
            type: 'CLEAR_REDUX'
        });
    }

    return (
        <>
        <h3>Your Feedback:</h3>
        <div className="table-container">
            <TableContainer component={Paper}>
                <Table aria-label="simple table">
                    <TableBody>
                        <TableRow>
                            <TableCell variant="head">Feeling</TableCell>
                            <TableCell>{userRating[0]}</TableCell>
                        </TableRow>
                        <TableRow>  
                            <TableCell variant="head">Understanding</TableCell>
                            <TableCell>{userRating[1]}</TableCell>
                        </TableRow>
                        <TableRow>  
                            <TableCell variant="head">Support</TableCell>
                            <TableCell>{userRating[2]}</TableCell>
                        </TableRow>
                        <TableRow>  
                            <TableCell variant="head">Comments</TableCell>
                            <TableCell>{userRating[3]}</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
        <div className="submitFeedbackBtn">
            <Button variant="outlined" size="large" color="primary" onClick={handleClick}>Submit</Button>
        </div>
        
        </>
    )



}
export default SubmitFeedback;


