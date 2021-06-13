import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import swal from 'sweetalert';

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

        <h2>Your Feedback</h2>
        <p>{userRating[0]}</p>
        <p>{userRating[1]}</p>
        <p>{userRating[2]}</p>
        <p>{userRating[3]}</p>
        <Button variant="outlined" size="large" color="primary" onClick={handleClick}>Submit</Button>
        
        </>
    )



}
export default SubmitFeedback;


